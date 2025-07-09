const CACHE_NAME = 'calculadora-ac-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Instalar el Service Worker y guardar los archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar las peticiones y servir desde la caché si es posible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si encontramos una coincidencia en la caché, la devolvemos
        if (response) {
          return response;
        }
        // Si no, hacemos la petición a la red
        return fetch(event.request);
      }
    )
  );
});
