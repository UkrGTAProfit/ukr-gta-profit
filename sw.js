from pathlib import Path
p=Path("/mnt/data/sw.js")
p.write_text("""const CACHE_NAME = 'ukr-gta-profit-10.2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(['./', './index.html', './manifest.json'])
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
""", encoding="utf-8")
print("Готово")
