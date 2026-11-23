// ▼▼▼ Vyplň podľa návodu (Firebase → Nastavenia projektu). Tieto údaje sú verejné, kľúč servisného účtu sem NEPATRÍ. ▼▼▼
self.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDB0XeHG58Mhk8yToO1uk8lQAILqK8L_8o',
  authDomain: 'stream-ckmt.firebaseapp.com',
  projectId: 'stream-ckmt',
  storageBucket: 'stream-ckmt.firebasestorage.app',
  messagingSenderId: '1062902184882',
  appId: '1:1062902184882:web:fa38ab774db0a88b8ac2ab'
};
// Cloud Messaging → Webová konfigurácia → Webové push certifikáty → Kľúčový pár
self.FIREBASE_VAPID = 'BDE-qbc6Pg68uKldhuySnDZjwuDL_NWazpACiJ_ipm1s7LXVQ85zWcTVvYXwZGBMSV5zC-2AeFVBnq8zAFggbXM';
// ▲▲▲
self.FIREBASE_OK = !/VLOŽ/.test(self.FIREBASE_CONFIG.apiKey + self.FIREBASE_CONFIG.appId + self.FIREBASE_VAPID);
