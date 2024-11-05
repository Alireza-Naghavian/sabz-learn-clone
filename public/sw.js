// self.addEventListener("push",function(event){

// })
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { updateViaCache: "none" })
      .then((registration) => {})
      .catch((err) => {
        console.log("Service Worker registration failed:", err);
      });
  });
}
self.addEventListener("install",(event)=>{
event.waitUntil(self.skipWaiting());
})
self.addEventListener("activate",(event)=>{
    event.waitUntil(self.clients.claim());
});
