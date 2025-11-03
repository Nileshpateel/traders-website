/* tracking-snippet.js — optimized for GitHub Pages + Firestore reliability */

(async function () {
  // ========== FIREBASE CONFIG ==========
  const firebaseConfig = {
    apiKey: "AIzaSyAxQ5C1vvCdoiYp0zv0WKafKBKOxaHUT-0",
    authDomain: "trading-world-e854e.firebaseapp.com",
    projectId: "trading-world-e854e",
    storageBucket: "trading-world-e854e.appspot.com",
    messagingSenderId: "177258946944",
    appId: "1:177258946944:web:568cc7c08869ea4611a165"
  };
  // =====================================

  // Helper: Load Firebase scripts dynamically
  async function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = () => resolve(true);
      s.onerror = () => reject(`Failed to load: ${src}`);
      document.head.appendChild(s);
    });
  }

  async function ensureFirebaseLoaded() {
    if (typeof firebase === "undefined") {
      await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
      await loadScript("https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js");
    }
  }

  // Wait for DOM before running tracking
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      await ensureFirebaseLoaded();
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();

      // Helpers
      const uid = () => {
        let s = localStorage.getItem("tl_session_uid");
        if (!s) {
          s = "s-" + Math.random().toString(36).slice(2);
          localStorage.setItem("tl_session_uid", s);
        }
        return s;
      };

      const startSession = () => {
        const sid =
          localStorage.getItem("tl_session_id") ||
          "sess-" + Date.now() + "-" + Math.random().toString(36).slice(2);
        localStorage.setItem("tl_session_id", sid);
        localStorage.setItem("tl_session_start", Date.now());
        return sid;
      };

      async function recordPageView(retry = 0) {
        try {
          const sid = startSession();
          const data = {
            page: window.location.pathname || window.location.href,
            referrer: document.referrer || null,
            uid: uid(),
            sessionId: sid,
            userAgent: navigator.userAgent,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          };
          await db.collection("page_views").add(data);
          console.log("✅ Page view recorded:", data.page);
        } catch (err) {
          console.warn("⚠️ Page view error:", err);
          if (retry < 2) {
            setTimeout(() => recordPageView(retry + 1), 1500);
          }
        }
      }

      async function endSession() {
        try {
          const start = parseInt(localStorage.getItem("tl_session_start") || 0, 10);
          if (!start) return;
          const durationSec = Math.round((Date.now() - start) / 1000);
          const sid = localStorage.getItem("tl_session_id") || "sess-unknown";
          const docData = {
            uid: uid(),
            sessionId: sid,
            page: window.location.pathname,
            durationSec,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          };
          await db.collection("sessions").add(docData);
          localStorage.removeItem("tl_session_start");
          localStorage.removeItem("tl_session_id");
          console.log("🕒 Session recorded:", durationSec, "seconds");
        } catch (err) {
          console.warn("❌ End session error:", err);
        }
      }

      // Trigger events
      recordPageView();
      window.addEventListener("beforeunload", () => setTimeout(endSession, 200));
      window.addEventListener("unload", () => setTimeout(endSession, 200));

    } catch (err) {
      console.error("🔥 Tracking init failed:", err);
    }
  });
})();
