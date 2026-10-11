// Set Tool: app shell em cache para funcionar offline; dados das produções sempre tentam a rede primeiro
const C='settool-v2';
const SHELL=['./','index.html','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png','kit.json','producoes/index.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  const isData=url.origin===location.origin&&(/\.json$/.test(url.pathname)||url.pathname.includes('/producoes/'));
  const put=res=>{if(res&&res.ok){const copy=res.clone();caches.open(C).then(c=>c.put(req,copy))}return res};
  if(isData){e.respondWith(fetch(req).then(put).catch(()=>caches.match(req,{ignoreSearch:true})));return}
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(put)));
});
