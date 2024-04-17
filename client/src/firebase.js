// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8037b.firebaseapp.com",
  projectId: "mern-estate-8037b",
  storageBucket: "mern-estate-8037b.appspot.com",
  messagingSenderId: "891000834202",
  appId: "1:891000834202:web:d61cc557d1ac59db9ff723"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);