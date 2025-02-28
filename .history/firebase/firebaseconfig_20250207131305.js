import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy55jUmvC6fTFvGHBv4G5q1KCxw9DwVcw",
  authDomain: "deamoncompany-a4438.firebaseapp.com",
  projectId: "deamoncompany-a4438",
  storageBucket: "deamoncompany-a4438.firebasestorage.app",
  messagingSenderId: "334919239929",
  appId: "1:334919239929:web:f4729400057f45d384ba28",
  measurementId: "G-W4FTP8BS4C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
