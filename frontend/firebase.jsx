// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhcGAi7D00PCWSb3kRAGW_a5EYBlJln7c",
  authDomain: "real-time-chatting-dcdaf.firebaseapp.com",
  projectId: "real-time-chatting-dcdaf",
  storageBucket: "real-time-chatting-dcdaf.appspot.com",
  messagingSenderId: "110611308539",
  appId: "1:110611308539:web:1d4c0963f53d10924af55e",
  measurementId: "G-WE31LXDV48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
