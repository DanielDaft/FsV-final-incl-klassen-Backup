// Deutsche Fahrschul-App Service Worker - FORCE UPDATE
const APP_VERSION = '7.0-FORCE-AM-CLASS-UPDATE';
const CACHE_NAME = `fahrschul-app-${APP_VERSION}`;

// KRITISCHE DATEIEN FÜR OFFLINE-NUTZUNG (ROOT PATHS)
const CRITICAL_FILES = [
  '/',           
  '/index.html', 
  '/manifest.json'
];

// AGGRESSIVE INSTALLATION - SOFORTIGER CACHE CLEAR
self.addEventListener('install', (event) => {
  console.log(`🚨 EMERGENCY INSTALL: ${APP_VERSION} - CLEARING ALL CACHES`);
  
  // FORCE ACTIVATE IMMEDIATELY
  self.skipWaiting();
  
  event.waitUntil(
    // FIRST: Delete ALL existing caches
    caches.keys().then(cacheNames => {
      console.log('🗑️ DELETING ALL OLD CACHES:', cacheNames);
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => {
      // THEN: Create new cache
      return caches.open(CACHE_NAME);
    }).then(cache => {
      console.log('✅ CREATING NEW CACHE:', CACHE_NAME);
      return cache.addAll(CRITICAL_FILES);
    }).catch(error => {
      console.error('❌ EMERGENCY INSTALL FAILED:', error);
    })
  );
});

// AGGRESSIVE ACTIVATION - CLAIM ALL CLIENTS
self.addEventListener('activate', (event) => {
  console.log(`🚨 EMERGENCY ACTIVATE: ${APP_VERSION}`);
  
  // CLAIM ALL CLIENTS IMMEDIATELY
  self.clients.claim();
  
  event.waitUntil(
    // DELETE ANY REMAINING OLD CACHES
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`🗑️ DELETING REMAINING CACHE: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ EMERGENCY ACTIVATION COMPLETE');
      // FORCE RELOAD ALL CLIENTS
      return self.clients.matchAll();
    }).then(clients => {
      clients.forEach(client => {
        console.log('🔄 FORCE RELOADING CLIENT:', client.url);
        client.postMessage({ type: 'FORCE_RELOAD' });
      });
    })
  );
});

// NETWORK-FIRST FETCH STRATEGY (ALWAYS GET LATEST)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Only handle same-origin requests
  if (url.origin === self.location.origin) {
    
    // For HTML files: ALWAYS NETWORK FIRST
    if (event.request.destination === 'document' || 
        url.pathname.endsWith('.html') || 
        url.pathname === '/') {
      
      event.respondWith(
        fetch(event.request)
          .then(response => {
            console.log('✅ NETWORK SUCCESS:', event.request.url);
            // Cache the new version
            if (response.ok) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          })
          .catch(error => {
            console.log('❌ NETWORK FAILED, TRYING CACHE:', event.request.url);
            // Fallback to cache when offline
            return caches.match(event.request).then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // If no cache, return a basic offline page
              return new Response(`
                <!DOCTYPE html>
                <html>
                <head><title>FsV - Offline</title></head>
                <body>
                  <h1>FsV - Deutsche Fahrschul-App</h1>
                  <p>App ist offline. Bitte prüfe deine Internetverbindung.</p>
                  <button onclick="window.location.reload()">Neu laden</button>
                </body>
                </html>
              `, {
                headers: { 'Content-Type': 'text/html' }
              });
            });
          })
      );
    } 
    // For other resources: CACHE FIRST
    else {
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            return response || fetch(event.request);
          })
      );
    }
  }
});

// MESSAGE HANDLER FOR FORCE RELOAD
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'FORCE_RELOAD') {
    console.log('🔄 FORCE RELOAD REQUESTED');
    self.clients.matchAll().then(clients => {
      clients.forEach(client => client.navigate(client.url));
    });
  }
});