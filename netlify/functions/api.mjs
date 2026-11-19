// API de Blue Lounge Bar: una sola función para el TPV (con clave) y para los clientes de la web.
import crypto from "node:crypto";
import { store, COLS, keyOf, mutateShard, bumpRev, getRev, readShard, readCol, setDoc, updateDoc } from "./lib/store.mjs";
import seed from "./seed.mjs";

export const config = { path: "/api/*" };

/* ---------- utilidades ---------- */
const json = (d, status = 200, h = {}) => new Response(JSON.stringify(d), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...h } });
const err = (msg, status = 400) => json({ error: msg }, status);
const uid = () => Date.now().toString(36) + crypto.randomBytes(4).toString("hex").slice(0, 5);
const r2 = (n) => Math.round((+n || 0) * 100) / 100;
const clean = (s, n = 200) => String(s ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, n);
const digits = (s) => String(s || "").replace(/\D/g, "");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function secret() {
  if (process.env.TPV_SECRET) return process.env.TPV_SECRET;
  const s = store();
  let v = await s.get("cfg/secret", { type: "json" });
  if (!v) { await s.setJSON("cfg/secret", { k: crypto.randomBytes(32).toString("hex") }, { onlyIfNew: true }); v = await s.get("cfg/secret", { type: "json" }); }
  return v.k;
}
const b64 = (s) => Buffer.from(s).toString("base64url");
const unb64 = (s) => Buffer.from(s, "base64url").toString();
async function sign(payload) { const p = b64(JSON.stringify(payload)); const h = crypto.createHmac("sha256", await secret()).update(p).digest("base64url"); return p + "." + h; }
async function verify(tok) {
  if (!tok || typeof tok !== "string" || !tok.includes(".")) return null;
  const [p, h] = tok.split(".");
  const want = crypto.createHmac("sha256", await secret()).update(p).digest("base64url");
  if (h.length !== want.length || !crypto.timingSafeEqual(Buffer.from(h), Buffer.from(want))) return null;
  try { const d = JSON.parse(unb64(p)); if (d.exp && d.exp < Date.now()) return null; return d; } catch { return null; }
}
const bearer = (req) => (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
async function staff(req) { const d = await verify(bearer(req)); return d && d.r === "staff" ? d : null; }
async function customer(req) { const d = await verify(bearer(req)); return d && d.r === "c" && d.id ? d : null; }

const hashClave = (c, salt) => crypto.scryptSync(String(c), salt, 32).toString("hex");
async function claveOk(c) {
  if (process.env.TPV_CLAVE) { const a = Buffer.from(String(c)), b = Buffer.from(process.env.TPV_CLAVE); return a.length === b.length && crypto.timingSafeEqual(a, b); }
  const v = await store().get("cfg/clave", { type: "json" });
  return !!v && hashClave(c, v.salt) === v.h;
}
async function claveConfigured() { return !!process.env.TPV_CLAVE || !!(await store().get("cfg/clave", { type: "json" })); }

/* ---------- carga inicial con los datos del TPV anterior ---------- */
let seeded = false;
async function ensureSeed() {
  if (seeded) return;
  const s = store();
  const r = await s.setJSON("cfg/seeded", { at: Date.now() }, { onlyIfNew: true });
  if (r.modified) {
    const keys = new Set();
    for (const col of Object.keys(seed)) {
      const byKey = {};
      for (const [id, d] of Object.entries(seed[col])) { const k = keyOf(col, id); (byKey[k] = byKey[k] || {})[id] = d; }
      for (const [k, docs] of Object.entries(byKey)) { await s.setJSON(k, { docs }); keys.add(k); }
    }
    // colecciones vacías también existen para que el TPV sepa que están cargadas
    for (const col of COLS) { const k = `c/${col}/_`; if (!keys.has(k)) { await s.setJSON(k, { docs: {} }, { onlyIfNew: true }); keys.add(k); } }
    await bumpRev([...keys]);
  }
  seeded = true;
}

/* ---------- carta pública ---------- */
async function settings() { const d = await readShard("c/settings/_"); return d.main || {}; }
function happyOn(st, p) { const h = st.happy || {}; return h.on && (h.cats || []).includes(p.cat); }
function priceOf(st, p, sel) { const base = r2((+p.price || 0) + (sel || []).reduce((s, c) => s + (+c.p || 0), 0)); return happyOn(st, p) ? r2(base * (1 - (+st.happy.pct || 0) / 100)) : base; }
const available = (p) => p && p.active !== false && (+p.price || 0) > 0 && !(typeof p.stock === "number" && p.stock <= 0);

/* ---------- mesas ---------- */
const MESA = (m) => (/^([1-9]|1[01])$/.test(m) ? "s" + m : m === "barra1" || m === "barra" ? "barra" : /^barra[23]$/.test(m) ? m : m === "billar" ? "billar" : null);
const tableName = (t) => (/^\d+$/.test(t.name) ? "Mesa " + t.name : t.name);
function publicTable(t, me) {
  const items = (t.items || []).map((i) => ({ name: i.name, qty: i.qty, price: i.price, mine: i.custId === me, sent: !!i.sent, at: i.at || null }));
  return { id: t.id, name: tableName(t), pickup: t.pickup || null, temp: !!t.temp, items, total: r2(items.reduce((s, i) => s + i.price * i.qty, 0)), bill: !!t.bill, call: !!t.call, ready: t.ready || null, openedAt: t.openedAt || null };
}

/* ---------- rutas ---------- */
export default async (req) => {
  const url = new URL(req.url);
  const route = url.pathname.replace(/^\/api\//, "").replace(/\/$/, "");
  const M = req.method;
  let body = {};
  if (M === "POST") { try { body = await req.json(); } catch { body = {}; } }
  try {
    await ensureSeed();

    /* ===== TPV ===== */
    if (route === "estado" && M === "GET") return json({ clave: await claveConfigured() });

    if (route === "setup" && M === "POST") {
      if (process.env.TPV_CLAVE) return err("La clave ya está configurada", 403);
      const c = String(body.clave || "");
      if (c.length < 6) return err("La clave necesita al menos 6 caracteres");
      const salt = crypto.randomBytes(12).toString("hex");
      const r = await store().setJSON("cfg/clave", { salt, h: hashClave(c, salt) }, { onlyIfNew: true });
      if (!r.modified) return err("La clave ya está configurada", 403);
      return json({ token: await sign({ r: "staff", exp: Date.now() + 180 * 864e5 }) });
    }

    if (route === "login" && M === "POST") {
      if (!(await claveOk(body.clave || ""))) { await sleep(700); return err("Clave incorrecta", 401); }
      return json({ token: await sign({ r: "staff", exp: Date.now() + 180 * 864e5 }) });
    }

    if (route === "clave" && M === "POST") {
      if (!(await staff(req))) return err("Inicia sesión", 401);
      if (process.env.TPV_CLAVE) return err("La clave está fijada en Netlify (variable TPV_CLAVE). Cámbiala allí.", 409);
      if (!(await claveOk(body.actual || ""))) { await sleep(700); return err("La clave actual no es correcta", 401); }
      const c = String(body.nueva || ""); if (c.length < 6) return err("La clave nueva necesita al menos 6 caracteres");
      const salt = crypto.randomBytes(12).toString("hex");
      await store().setJSON("cfg/clave", { salt, h: hashClave(c, salt) });
      return json({ ok: true });
    }

    if (route === "sync" && M === "POST") {
      if (!(await staff(req))) return err("Inicia sesión", 401);
      const known = body.known && typeof body.known === "object" ? body.known : {};
      const rev = await getRev();
      const shards = {};
      for (const [k, t] of Object.entries(rev)) if (known[k] !== t) shards[k] = await readShard(k);
      return json({ rev, shards, now: Date.now() });
    }

    if (route === "write" && M === "POST") {
      if (!(await staff(req))) return err("Inicia sesión", 401);
      const ops = Array.isArray(body.ops) ? body.ops.slice(0, 100) : [];
      const byKey = {};
      for (const o of ops) {
        if (!COLS.includes(o.col) || !/^[A-Za-z0-9_.~:@+-]{1,120}$/.test(o.id || "")) return err("Operación no válida");
        (byKey[keyOf(o.col, o.id)] = byKey[keyOf(o.col, o.id)] || []).push(o);
      }
      for (const [k, list] of Object.entries(byKey)) {
        await mutateShard(k, (docs) => { for (const o of list) { if (o.op === "delete") delete docs[o.id]; else docs[o.id] = o.data || {}; } });
      }
      return json({ ok: true });
    }

    /* ===== Público ===== */
    if (route === "carta" && M === "GET") {
      const [prods, st] = [await readShard("c/products/_"), await settings()];
      const cats = [...(st.cats || [])];
      const items = Object.entries(prods).map(([id, p]) => {
        const o = { id, n: p.name, c: p.cat, p: priceOf(st, p, []), o: p.order ?? 99 };
        if (p.desc) o.d = p.desc;
        if (Array.isArray(p.opts) && p.opts.length) o.x = p.opts;
        if (!available(p)) o.off = 1;
        if (happyOn(st, p)) o.h = 1;
        if (p.cat && !cats.includes(p.cat)) cats.push(p.cat);
        return o;
      }).sort((a, b) => cats.indexOf(a.c) - cats.indexOf(b.c) || a.o - b.o || String(a.n).localeCompare(b.n, "es"));
      return json({ cats: cats.filter((c) => items.some((i) => i.c === c)), items, happy: st.happy && st.happy.on ? st.happy : null }, 200, { "cache-control": "public, max-age=20" });
    }

    if (route === "cliente" && M === "POST") {
      const name = clean(body.name, 60), phone = digits(body.phone).slice(-15);
      if (name.length < 2) return err("Escribe tu nombre");
      if (phone.length < 9) return err("Escribe un móvil válido");
      if (!body.adulto || !body.acepto) return err("Tienes que ser mayor de edad y aceptar el uso de tus datos");
      const all = await readCol("customers");
      let id = Object.keys(all).find((k) => digits(all[k].phone).slice(-9) === phone.slice(-9));
      if (id) await updateDoc("customers", id, (c) => Object.assign(c || {}, { name: (c && c.name) || name, phone, web: true }));
      else { id = uid(); await setDoc("customers", id, { name, phone, points: 0, visits: 0, spent: 0, notes: "Registrado en la web", since: Date.now(), web: true }); }
      return json({ id, name, phone, token: await sign({ r: "c", id, n: name, ph: phone }) });
    }

    if (route === "reserva" && M === "POST") {
      const cu = await customer(req);
      const r = { name: clean(body.name, 60), phone: digits(body.phone).slice(-15), date: clean(body.date, 10), time: clean(body.time, 5), pax: clean(body.pax, 12), zone: clean(body.zone, 40), notes: clean(body.notes, 400) };
      if (r.name.length < 2 || r.phone.length < 9) return err("Escribe tu nombre y un teléfono válido");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date) || !/^\d{2}:\d{2}$/.test(r.time)) return err("Elige día y hora");
      if (r.date < new Date(Date.now() - 864e5).toISOString().slice(0, 10)) return err("Esa fecha ya ha pasado");
      const id = uid();
      await setDoc("reservas", id, Object.assign(r, { status: "pendiente", at: Date.now(), custId: cu ? cu.id : null, src: "web" }));
      return json({ ok: true, id });
    }

    /* Lo siguiente necesita cliente registrado */
    const cu = await customer(req);

    if (route === "pedido" && M === "POST") {
      if (!cu) return err("Regístrate para pedir", 401);
      const lines = Array.isArray(body.items) ? body.items.slice(0, 40) : [];
      if (!lines.length) return err("Tu pedido está vacío");
      const [prods, st] = [await readShard("c/products/_"), await settings()];
      const note = clean(body.note, 300);
      const at = Date.now();
      const add = [];
      for (const l of lines) {
        const p = prods[l.id];
        if (!available(p)) return err(`«${(p && p.name) || "Un producto"}» ya no está disponible`);
        const qty = Math.max(1, Math.min(20, parseInt(l.qty, 10) || 1));
        const opts = Array.isArray(p.opts) ? p.opts : [];
        const sel = [];
        for (let g = 0; g < opts.length; g++) {
          const want = l.sel && l.sel[g] && l.sel[g].n;
          const ch = opts[g].choices.find((c) => c.n === want);
          if (!ch) return err(`Elige ${opts[g].name.toLowerCase()} para «${p.name}»`);
          sel.push(ch);
        }
        const name = sel.length ? p.name + " · " + sel.map((c) => c.n).join(" · ") : p.name;
        add.push({ k: uid(), pid: l.id, name, price: priceOf(st, p, sel), qty, note: add.length === 0 ? note : "", sent: false, by: "cliente", web: true, custId: cu.id, cust: cu.n, at });
      }
      const who = { id: cu.id, name: cu.n, phone: cu.ph };
      let tid;
      if (body.mesa) {
        tid = MESA(String(body.mesa));
        if (!tid) return err("Mesa no válida");
        const t = await updateDoc("tables", tid, (t) => {
          if (!t) return undefined;
          t.items = (t.items || []).concat(add);
          if (!t.openedAt) { t.openedAt = at; t.sess = uid(); }
          if (!t.sess) t.sess = uid();
          t.webCust = (t.webCust || []).filter((c) => c.id !== cu.id).concat(who);
          t.webNew = at; t.bill = false;
          return t;
        });
        if (!t) return err("Esa mesa no existe");
      } else {
        const hora = clean(body.hora, 5);
        if (!/^\d{2}:\d{2}$/.test(hora)) return err("Indica a qué hora lo recoges");
        tid = "w" + uid();
        await setDoc("tables", tid, { name: "Recoger " + hora + " · " + cu.n.split(" ")[0], zone: "Para recoger", order: 200, seats: 0, temp: true, pickup: hora, items: add, openedAt: at, sess: uid(), webCust: [who], webNew: at, guests: 0 });
      }
      return json({ ok: true, table: tid });
    }

    if (route === "yo" && M === "GET") {
      if (!cu) return err("Regístrate", 401);
      const tables = await readShard("c/tables/_");
      const mine = Object.entries(tables).filter(([, t]) => t.openedAt && (t.webCust || []).some((c) => c.id === cu.id)).map(([id, t]) => publicTable(Object.assign({ id }, t), cu.id));
      const res = Object.entries(await readCol("reservas")).filter(([, r]) => r.custId === cu.id || digits(r.phone).slice(-9) === String(cu.ph).slice(-9))
        .map(([id, r]) => ({ id, date: r.date, time: r.time, pax: r.pax, zone: r.zone, status: r.status })).filter((r) => r.date >= new Date(Date.now() - 864e5).toISOString().slice(0, 10)).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
      return json({ me: { id: cu.id, name: cu.n, phone: cu.ph }, tables: mine, reservas: res, now: Date.now() });
    }

    if (route === "mesa" && M === "POST") {
      if (!cu) return err("Regístrate", 401);
      const accion = body.accion;
      const t = await updateDoc("tables", String(body.id || ""), (t) => {
        if (!t || !t.openedAt || !(t.webCust || []).some((c) => c.id === cu.id)) return undefined;
        if (accion === "cuenta") { t.bill = true; t.call = Date.now(); }
        else if (accion === "llamar") t.call = Date.now();
        else return undefined;
        return t;
      });
      if (!t) return err("Esta mesa ya está cerrada", 404);
      return json({ ok: true });
    }

    return err("No encontrado", 404);
  } catch (e) {
    console.error(e);
    return e.status === 409 ? err(e.message, 409) : err("Error del servidor. Inténtalo otra vez.", 500);
  }
};
