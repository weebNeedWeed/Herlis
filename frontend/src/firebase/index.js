// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../../firebase.config.json"

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
