// Potrebné, aby Android ponúkol „Inštalovať aplikáciu“. Nič neukladá, všetko ide vždy zo siete.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
