import {db} from "./../firebase-init";
import makeUserDb from "./user-db";
import makeConversationDb from "./conversation-db";

const userDb = makeUserDb({db});
const conversationDb = makeConversationDb({db});

const runTransaction = db.runTransaction;
export {
    userDb,
    conversationDb, 
    runTransaction,
};
