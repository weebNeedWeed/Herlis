import {initializeApp, cert} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

import credentials from "./../../credentials.json";

import makeUserDb from "./user-db";

initializeApp({
  credential: cert(credentials)
});

const db = getFirestore();
const userDb = makeUserDb({db});

export { userDb };
