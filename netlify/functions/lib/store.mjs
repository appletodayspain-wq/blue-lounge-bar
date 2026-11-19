// Almacenamiento del bar: Netlify Blobs en producción, carpeta local en pruebas (LOCAL_BLOBS=/ruta).
import { getStore } from "@netlify/blobs";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

function localStore(dir) {
  fs.mkdirSync(dir, { recursive: true });
  const f = (k) => path.join(dir, encodeURIComponent(k) + ".json");
  const read = (k) => { try { return JSON.parse(fs.readFileSync(f(k), "utf8")); } catch { return null; } };
  return {
    async get(k, o) { const r = read(k); return r ? r.data : null; },
    async getWithMetadata(k) { const r = read(k); return r ? { data: r.data, etag: r.etag, metadata: {} } : null; },
    async setJSON(k, data, o = {}) {
      const cur = read(k);
      if (o.onlyIfNew && cur) return { modified: false };
      if (o.onlyIfMatch && (!cur || cur.etag !== o.onlyIfMatch)) return { modified: false };
      const etag = crypto.randomBytes(6).toString("hex");
      fs.writeFileSync(f(k), JSON.stringify({ data, etag }));
      return { modified: true, etag };
    },
    async delete(k) { try { fs.unlinkSync(f(k)); } catch {} },
    async list({ prefix = "" } = {}) {
      return { blobs: fs.readdirSync(dir).map((n) => decodeURIComponent(n.replace(/\.json$/, ""))).filter((k) => k.startsWith(prefix)).map((key) => ({ key })) };
    },
  };
}

// En Netlify el permiso de acceso a Blobs caduca: se pide la tienda de nuevo en cada uso
// (si se guarda entre peticiones, una función "caliente" acaba con "Token expired").
let _local;
export function store() {
  if (process.env.LOCAL_BLOBS) return (_local = _local || localStore(process.env.LOCAL_BLOBS));
  return getStore({ name: "bar", consistency: "strong" });
}

/* Colecciones del TPV. Las que crecen sin parar se reparten en trozos por fecha de creación del id. */
export const COLS = ["products", "tables", "kitchen", "sales", "staff", "shifts", "customers", "cash", "settings", "reservas", "archive"];
const SHARDED = new Set(["sales", "shifts", "cash", "customers", "reservas", "archive"]);
export const shardOf = (col, id) => (SHARDED.has(col) && /^[a-z0-9]{8,}$/.test(id) ? id.slice(0, 3) : "_");
export const keyOf = (col, id) => `c/${col}/${shardOf(col, id)}`;

/* Escritura condicional con reintentos: fn(docsActuales) modifica el objeto docs y devuelve true si cambió. */
export async function mutateShard(key, fn) {
  const s = store();
  for (let i = 0; i < 12; i++) {
    const cur = await s.getWithMetadata(key, { type: "json" });
    const obj = cur && cur.data ? cur.data : { docs: {} };
    const changed = fn(obj.docs);
    if (changed === false) return obj.docs;
    const r = cur ? await s.setJSON(key, obj, { onlyIfMatch: cur.etag }) : await s.setJSON(key, obj, { onlyIfNew: true });
    if (r.modified) { await bumpRev([key]); return obj.docs; }
    await new Promise((res) => setTimeout(res, 15 + Math.random() * 60));
  }
  throw Object.assign(new Error("Hay mucho movimiento, inténtalo otra vez"), { status: 409 });
}

export async function bumpRev(keys) {
  const s = store();
  for (let i = 0; i < 15; i++) {
    const cur = await s.getWithMetadata("rev", { type: "json" });
    const rev = (cur && cur.data) || {};
    let t = Date.now();
    keys.forEach((k) => { rev[k] = Math.max(t, (rev[k] || 0) + 1); });
    const r = cur ? await s.setJSON("rev", rev, { onlyIfMatch: cur.etag }) : await s.setJSON("rev", rev, { onlyIfNew: true });
    if (r.modified) return rev;
    await new Promise((res) => setTimeout(res, 10 + Math.random() * 40));
  }
}

export async function getRev() { return (await store().get("rev", { type: "json" })) || {}; }
export async function readShard(key) { const d = await store().get(key, { type: "json" }); return (d && d.docs) || {}; }

export async function readCol(col) {
  const rev = await getRev();
  const keys = Object.keys(rev).filter((k) => k.startsWith(`c/${col}/`));
  const out = {};
  for (const k of keys) Object.assign(out, await readShard(k));
  return out;
}

export async function setDoc(col, id, data) {
  return mutateShard(keyOf(col, id), (docs) => { docs[id] = data; });
}
export async function updateDoc(col, id, fn) {
  let result;
  await mutateShard(keyOf(col, id), (docs) => { const r = fn(docs[id] ? structuredClone(docs[id]) : null); if (r === undefined) return false; if (r === null) delete docs[id]; else docs[id] = r; result = r; });
  return result;
}
