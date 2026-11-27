/* Service worker do Oráculo Astral: guarda o app para abrir também sem internet.
   Estratégia: tenta a rede primeiro (pega sempre a versão nova do GitHub)
   e, se estiver offline, usa a cópia guardada. Troque VERSAO a cada atualização. */
const VERSAO = 'oraculo-v2';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return; // Wikipédia, fontes etc. seguem direto
  e.respondWith(
    fetch(req).then(res => { const copia = res.clone(); caches.open(VERSAO).then(c => c.put(req, copia)); return res; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
