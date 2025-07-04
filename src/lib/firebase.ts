// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, type FirebaseOptions } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration is now loaded from environment variables
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function isFirebaseConfigValid(config: FirebaseOptions): boolean {
  return !!(config.apiKey && config.authDomain && config.projectId && config.appId);
}

// Initialize Firebase
let app;
if (isFirebaseConfigValid(firebaseConfig)) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
} else {
    console.error(
        "Firebase configuration is invalid or incomplete. " +
        "Please check your .env file and ensure all NEXT_PUBLIC_FIREBASE_* variables are set correctly. " +
        "You may need to restart your development server after updating the .env file."
    );
    app = null;
}

const auth = app ? getAuth(app) : null;

let analytics;
if (app && typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch(e) {
    console.warn("Firebase Analytics could not be initialized.", e);
  }
}

export { app, auth, analytics };
