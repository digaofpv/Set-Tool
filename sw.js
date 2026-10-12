// Set Tool: com internet, sempre busca a versão mais nova (app e dados); sem internet, usa a cópia guardada
const C='settool-v19';
const SHELL=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png','kit.json','producoes/index.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:'reload'})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  const same=url.origin===location.origin;
  const isIcon=same&&/\.png$/.test(url.pathname);
  const cacheable=same||/(^|\.)gstatic\.com$|cdnjs\.cloudflare\.com$|fonts\.(googleapis|gstatic)\.com$/.test(url.host);
  const put=res=>{if(res&&res.ok&&cacheable){const copy=res.clone();caches.open(C).then(c=>c.put(req,copy))}return res};
  if(same&&!isIcon){
    e.respondWith(fetch(req,{cache:'no-cache'}).then(put).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(put)));
});
