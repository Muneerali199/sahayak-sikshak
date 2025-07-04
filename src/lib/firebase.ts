// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUVlHAvvAca8TurlfBwemLAqTs7x08UTI",
  authDomain: "sahayak-1f319.firebaseapp.com",
  databaseURL: "https://sahayak-1f319-default-rtdb.firebaseio.com",
  projectId: "sahayak-1f319",
  storageBucket: "sahayak-1f319.appspot.com",
  messagingSenderId: "825851704284",
  appId: "1:825851704284:web:789f3824ab2425ee699519",
  measurementId: "G-G03CGLCSEK"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
