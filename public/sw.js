const CACHE = "kumsal-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/logo-fallback.svg",
  "/assets/hero-pool-loop.webm",
  "/assets/hero-pool.webp",
  "/assets/facility.webp",
  "/assets/local-pool.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
