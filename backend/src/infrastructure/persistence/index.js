import { db } from "./../firebase-init";
import makeUserDb from "./user-db";
import makeConversationDb from "./conversation-db";
import { milvusClient } from "./../milvus-init";
import makeDoctorDb from "./doctor-db";

const userDb = makeUserDb({ db });
const conversationDb = makeConversationDb({ db });
const doctorDb = makeDoctorDb({ milvusClient });

const runTransaction = db.runTransaction;
export {
    userDb,
    conversationDb,
    makeDoctorDb,
    doctorDb
};
