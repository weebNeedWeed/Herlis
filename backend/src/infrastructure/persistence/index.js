import {db} from "./../firebase-init";
import makeUserDb from "./user-db";

const userDb = makeUserDb({db});
export {userDb};
