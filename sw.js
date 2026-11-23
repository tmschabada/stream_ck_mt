// Service worker: inštalácia appky na plochu + príjem push notifikácií (Firebase). Nič neukladá, všetko ide zo siete.
importScripts('firebase-config.js');
if (self.FIREBASE_OK) {
  importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js', 'https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
  firebase.initializeApp(self.FIREBASE_CONFIG);
  firebase.messaging();   // notifikácie na pozadí zobrazí Firebase sám
}
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
// klik na notifikáciu zobrazenú, keď bola appka otvorená
self.addEventListener('notificationclick', e => {
  const d = e.notification.data || {};
  if (d.FCM_MSG || !d.link) return;
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    const w = list.find(c => c.url.indexOf(self.registration.scope) === 0);
    return w ? w.focus() : self.clients.openWindow(d.link);
  }));
});
