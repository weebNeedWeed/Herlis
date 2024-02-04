import {initializeApp, cert} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {getAuth} from "firebase-admin/auth";

import credentials from "./../../credentials.json";

initializeApp({
  credential: cert(credentials)
});

const db = getFirestore();
const auth = getAuth();
export { db, auth };
