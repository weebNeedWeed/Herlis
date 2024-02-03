// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../../firebase.config.json"


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);