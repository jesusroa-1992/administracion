const CACHE_NAME = 'balance-pro-v1';
const ASSETS = [
  './ADMINISTRACION_GENERAL_1.4.html',
  './manifest.json'
];

// Instalación
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Estrategia: Primero Red, si falla, Caché
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});