import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDg4juA6FLrizHY5kOaTiAqOGWhGJrL9ko",
  authDomain: "max-1fd60.firebaseapp.com",
  projectId: "max-1fd60",
  storageBucket: "max-1fd60.firebasestorage.app",
  messagingSenderId: "459412007457",
  appId: "1:459412007457:web:2a67c1f43cdd889ba59160",
  measurementId: "G-DE42623QF0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
