/* Conexión del TPV con la base de datos del bar en Netlify (sustituye a la de Claude). */
(function(){
"use strict";
const TK='blb-tpv-token';
const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const set=(k,v)=>{try{v==null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){}};
let token=get(TK);

async function api(path,body){
  const r=await fetch('/api/'+path,{method:body?'POST':'GET',headers:Object.assign({'content-type':'application/json'},token?{authorization:'Bearer '+token}:{}),body:body?JSON.stringify(body):undefined,cache:'no-store'});
  let d={};try{d=await r.json()}catch(e){}
  if(!r.ok){const e=new Error(d.error||('Error '+r.status));e.status=r.status;e.code=r.status===401?'unauthorized':r.status===409?'conflict':'net';throw e}
  return d;
}

/* ---------- pantalla de acceso ---------- */
function loginScreen(){
  return new Promise(async resolve=>{
    let configured=true;try{configured=(await api('estado')).clave}catch(e){}
    const w=document.createElement('div');w.className='netlogin';
    w.innerHTML=`<form class="nl-box" autocomplete="on">
      <div class="nl-logo">B</div><h1>TPV · Blue Lounge Bar</h1>
      <p>${configured?'Escribe la clave del TPV para entrar en este dispositivo.':'Primera vez: crea la clave del TPV (mínimo 6 caracteres). Guárdala bien, la pedirá en cada dispositivo nuevo.'}</p>
      <input type="password" id="nl-clave" autocomplete="current-password" placeholder="Clave del TPV" required minlength="6">
      ${configured?'':'<input type="password" id="nl-clave2" autocomplete="new-password" placeholder="Repite la clave" required minlength="6">'}
      <button type="submit">${configured?'Entrar':'Crear clave y entrar'}</button><small id="nl-err"></small></form>`;
    document.body.appendChild(w);
    const f=w.querySelector('form');setTimeout(()=>f.querySelector('input').focus(),50);
    f.addEventListener('submit',async e=>{e.preventDefault();const c=f.querySelector('#nl-clave').value;const er=f.querySelector('#nl-err');er.textContent='';
      if(!configured&&c!==f.querySelector('#nl-clave2').value){er.textContent='Las dos claves no coinciden';return}
      f.querySelector('button').disabled=true;
      try{const d=await api(configured?'login':'setup',{clave:c});token=d.token;set(TK,token);w.remove();resolve()}
      catch(x){er.textContent=x.message;f.querySelector('button').disabled=false}});
  });
}

/* ---------- base de datos con el mismo uso que la de Claude ---------- */
function makeDB(){
  const shards={},known={};const listeners={};let loadedOnce=false;let writeSeq=0,timer=null,inflight=false;
  const cols=new Set();
  function snapOf(col){const docs=[];Object.keys(shards).forEach(k=>{if(k.startsWith('c/'+col+'/')){const d=shards[k];Object.keys(d).forEach(id=>docs.push({id,data:()=>d[id]}))}});return{docs,metadata:{fromCache:false}}}
  function emit(col){(listeners[col]||[]).forEach(l=>{try{l.cb(snapOf(col))}catch(e){console.error(e)}})}
  async function sync(){
    if(inflight)return;inflight=true;const seq=writeSeq;
    try{
      const d=await api('sync',{known});
      if(seq!==writeSeq){inflight=false;return sync()}
      const changed=new Set();
      Object.entries(d.shards||{}).forEach(([k,docs])=>{shards[k]=docs;known[k]=d.rev[k];changed.add(k.split('/')[1])});
      Object.keys(shards).forEach(k=>{if(!(k in d.rev)){delete shards[k];delete known[k];changed.add(k.split('/')[1])}});
      if(!loadedOnce){loadedOnce=true;Object.keys(listeners).forEach(emit)}else changed.forEach(c=>emit(c));
      setStatus(true);
    }catch(e){
      if(e.status===401){set(TK,null);location.reload();return}
      setStatus(false);
    }finally{inflight=false}
  }
  function loop(){clearTimeout(timer);timer=setTimeout(async()=>{await sync();loop()},document.hidden?12000:2500)}
  document.addEventListener('visibilitychange',()=>{if(!document.hidden){sync();loop()}});
  const queue=[];let flushing=false;
  async function write(op){
    writeSeq++;
    // copia local inmediata para que la siguiente sincronización no la pise
    const k=Object.keys(shards).find(x=>x.startsWith('c/'+op.col+'/')&&shards[x][op.id]);
    if(op.op==='delete'&&k)delete shards[k][op.id];
    queue.push(op);
    return new Promise((res,rej)=>{op._res=res;op._rej=rej;flushSoon()});
  }
  function flushSoon(){if(flushing)return;flushing=true;setTimeout(async()=>{
    const ops=queue.splice(0,queue.length);
    try{await api('write',{ops:ops.map(o=>({op:o.op,col:o.col,id:o.id,data:o.data}))});writeSeq++;ops.forEach(o=>o._res())}
    catch(e){ops.forEach(o=>o._rej(Object.assign(e,{code:e.code==='unauthorized'?'revoked':'unavailable'})))}
    flushing=false;if(queue.length)flushSoon();else setTimeout(sync,150)},60)}
  const db={
    collection(col){cols.add(col);return{
      onSnapshot(cb,errCb){(listeners[col]=listeners[col]||[]).push({cb,errCb});if(loadedOnce)cb(snapOf(col))},
      doc(id){return{set:data=>write({op:'set',col,id,data}),delete:()=>write({op:'delete',col,id})}}
    }}
  };
  sync().then(loop);
  return db;
}
function setStatus(ok){const s=document.getElementById('syncTxt');if(!s)return;s.dataset.net=ok?'ok':'off'}

window.BLB_NET={
  async connect(){if(!token)await loginScreen();return makeDB()},
  api,
  logout(){set(TK,null);location.reload()},
  async changeClave(actual,nueva){return api('clave',{actual,nueva})}
};
})();
