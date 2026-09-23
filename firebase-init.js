// firebase-init.js
// 1. Go to https://console.firebase.google.com -> create a project.
// 2. Build > Firestore Database -> Create database (start in "production mode").
// 3. Build > Authentication -> Sign-in method -> enable "Email/Password".
//    Then Authentication > Users > Add user -> create your admin login (email + password).
// 4. Project settings (gear icon) > General > "Your apps" > Add app > Web (</>) -> copy the config below.
// 5. Paste the Firestore rules from firestore.rules (in this folder) into
//    Firestore Database > Rules, and click Publish.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
