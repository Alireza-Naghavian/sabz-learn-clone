if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { updateViaCache: "none" })
      .then(() => {})
      .catch(() => console.log("sw registration failed"));
  });
}
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", async (event) => {
 
  const data = event.data.json();
  const options = {
    ...data,
    image: data.cover,
    badge: "/icons/web-app-manifest-192x192.png",
    vibrate: [100, 50, 100],
    dir: "rtl",
    lang: "fa",
  };
  event.waitUntil(registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;
  event.waitUntil(clients.openWindow(notification.data.url));
  event.notification.close();
});
