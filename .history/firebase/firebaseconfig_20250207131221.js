
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy55jUmvC6fTFvGHBv4G5q1KCxw9DwVcw",
  authDomain: "deamoncompany-a4438.firebaseapp.com",
  projectId: "deamoncompany-a4438",
  storageBucket: "deamoncompany-a4438.firebasestorage.app",
  messagingSenderId: "334919239929",
  appId: "1:334919239929:web:f4729400057f45d384ba28",
  measurementId: "G-W4FTP8BS4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);