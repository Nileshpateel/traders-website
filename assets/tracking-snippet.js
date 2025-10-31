/* tracking-snippet.js
   - Logs page views, sessions (duration), and referral clicks to Firestore.
   - Requires firebase config values to be set below (same project).
   - Uses localStorage session id so duration can be computed.
*/

(function () {
  // =============== CONFIG - replace with your firebase config ===============
  const firebaseConfig = {
    apiKey: "AIzaSyAxQ5C1vvCdoiYp0zv0WKafKBKOxaHUT-0",
    authDomain: "trading-world-e854e.firebaseapp.com",
    projectId: "trading-world-e854e",
    storageBucket: "trading-world-e854e.firebasestorage.app",
    messagingSenderId: "177258946944",
    appId: "1:177258946944:web:568cc7c08869ea4611a165"
  };
  // ========================================================================

  // init firebase (safe to call multiple times)
  if (!window.firebase?.apps?.length) {
    // load firebase libs are required on page; admin.html loads them already.
    // If your pages don't load firebase libs, include the same CDN scripts before this file:
    // <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"></script>
    // <script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"></script>
  }
  try { firebase.initializeApp(firebaseConfig); } catch (e) { /* already initialized */ }
  const db = firebase.getFirestore();

  // helpers
  function uid() {
    let s = localStorage.getItem('tl_session_uid');
    if (!s) { s = 's-' + Math.random().toString(36).slice(2); localStorage.setItem('tl_session_uid', s); }
    return s;
  }
  function nowTs() { return firebase.serverTimestamp ? firebase.serverTimestamp() : { ts: Date.now() }; }

  const sessionIdKey = 'tl_session_id';
  function startSession() {
    const sid = localStorage.getItem(sessionIdKey) || ('sess-' + Date.now() + '-' + Math.random().toString(36).slice(2));
    localStorage.setItem(sessionIdKey, sid);
    localStorage.setItem('tl_session_start', Date.now());
    return sid;
  }

  // record page view
  async function recordPageView() {
    const sid = startSession();
    const data = {
      page: window.location.pathname || window.location.href,
      referrer: document.referrer || null,
      uid: uid(),
      sessionId: sid,
      userAgent: navigator.userAgent,
      timestamp: firebase.serverTimestamp ? firebase.serverTimestamp() : Date.now()
    };
    try {
      await firebase.addDoc(firebase.collection(db, 'page_views'), data);
    } catch (err) { console.warn("pv err", err); }
  }

  // record referral click (call this from referral link onclick or wrap links)
  async function recordReferral(link) {
    const data = {
      link,
      page: window.location.pathname,
      uid: uid(),
      timestamp: firebase.serverTimestamp ? firebase.serverTimestamp() : Date.now()
    };
    try {
      await firebase.addDoc(firebase.collection(db, 'referrals'), data);
    } catch (err) { console.warn("ref err", err); }
  }

  // session end (store duration)
  async function endSession() {
    try {
      const start = parseInt(localStorage.getItem('tl_session_start') || 0, 10);
      if (!start) return;
      const durationSec = Math.round((Date.now() - start) / 1000);
      const sid = localStorage.getItem(sessionIdKey) || 'sess-unknown';
      const docData = {
        uid: uid(),
        sessionId: sid,
        page: window.location.pathname,
        durationSec,
        timestamp: firebase.serverTimestamp ? firebase.serverTimestamp() : Date.now()
      };
      await firebase.addDoc(firebase.collection(db, 'sessions'), docData);
      // clear session start so repeated unloads don't duplicate
      localStorage.removeItem('tl_session_start');
      localStorage.removeItem(sessionIdKey);
    } catch (err) { console.warn("end sess err", err); }
  }

  // wrap referral links automatically (optional)
  function attachReferralListeners() {
    const referralDomains = ['angel-one.onelink.me','one.justmarkets.link','invite.coindcx.com','exnesstrack.org'];
    document.querySelectorAll('a[href]').forEach(a => {
      try {
        const href = a.href;
        const url = new URL(href);
        if (referralDomains.some(d => url.hostname.includes(d))) {
          // add onclick to record referral
          a.addEventListener('click', (e) => {
            // record asynchronously
            recordReferral(href);
            // allow default navigation
          }, { passive: true });
        }
      } catch (e) {}
    });
  }

  // expose recordReferral globally in case you want to call manually
  window.TradeLearnerTrack = { recordReferral };

  // boot
  recordPageView();
  window.addEventListener('beforeunload', endSession);
  window.addEventListener('unload', endSession);

  // attach referral listeners after DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    attachReferralListeners();
  });

})();
