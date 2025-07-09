{
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

<!-- ====================================================================== -->
<!-- PASO 3: Crea otro archivo nuevo, pega este contenido y guárdalo como -->
<!-- sw.js (Service Worker) en el mismo directorio que los otros archivos -->
<!-- ====================================================================== -->
const CACHE_NAME = 'calculadora-ac-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Instalar el Service Worker y guardar los archivos en caché