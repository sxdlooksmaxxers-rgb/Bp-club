# SXD Levelling Club — Firebase setup

Files:
- `index.html` — public site (welcome, news/events feed, join form, member roster)
- `admin.html` — separate admin page (login, post news/events, ban/unban/remove members)
- `firebase-init.js` — your Firebase project config (edit this one file)
- `firestore.rules` — security rules to paste into the Firebase console
- `styles.css` — shared styling

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com → **Add project** → follow the prompts.
2. In the left menu: **Build → Firestore Database → Create database** → start in **production mode**.
3. In the left menu: **Build → Authentication → Sign-in method** → enable **Email/Password**.
4. Still in Authentication, go to the **Users** tab → **Add user** → create the login you (the admin) will use on `admin.html`. Add one user per admin.

## 2. Get your config and paste it in
1. Click the gear icon → **Project settings** → scroll to **Your apps** → click the **`</>`** (web) icon → register an app (nickname anything, no need for Hosting yet).
2. It shows a `firebaseConfig` object. Copy those values into `firebase-init.js`, replacing the placeholder strings (`YOUR_API_KEY`, etc).

## 3. Publish the security rules
1. **Firestore Database → Rules** tab.
2. Replace the contents with what's in `firestore.rules` (in this folder).
3. Click **Publish**.

This setup means: anyone can view the roster and news, and anyone can submit a join application — but only someone signed in through `admin.html` can post news/events, ban/unban a member, or delete anything. That check happens on Firebase's servers, not just in the page's JavaScript, so it can't be bypassed from the browser.

## 4. Host it
Any static host works since this is plain HTML/CSS/JS. The simplest is Firebase's own:
```
npm install -g firebase-tools
firebase login
firebase init hosting     # choose this project, public dir = this folder, single-page app = No
firebase deploy
```
You'll get a live `https://YOUR_PROJECT.web.app` URL. GitHub Pages, Netlify, or Vercel also work — just upload the folder as-is.

## Notes
- Photos are resized in the browser and stored as small base64 strings directly in Firestore, so there's no extra Storage setup needed. If you want full-resolution photos later, swap this for Firebase Storage.
- To remove an admin's access, just delete their user in Authentication → Users.
- `admin.html` isn't secret by URL — anyone can open it, but they can't sign in or do anything without an admin account, since the security rules (not the page) enforce that.
