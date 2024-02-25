import makePostUser from "./post-user";
import makePostConversations from "./post-conversations";
import makePostConversationsMessages from "./post-conversations-messages";
import makeGetConversations from "./get-conversations";
import makeGetConversationsId from "./get-conversations-id";

import { doctorDb } from "../infrastructure/persistence";

import {
    addUser,
    createConversation,
    addUserMessage,
    getAllConversations,
    getConversationById,
    getAllDoctors
} from "./../use-cases";
import logger from "./../infrastructure/logging-init";
import IsoDate from "./../utils/IsoDate";
import makeGetDoctors from "./get-doctors";
import makeGetDoctorsId from "./get-doctors-id";

const postUser = makePostUser({ addUser, logger, IsoDate });
const postConversations = makePostConversations({ createConversation, logger });
const postConversationsMessages = makePostConversationsMessages({ addUserMessage, logger });
const getConversations = makeGetConversations({ logger, getAllConversations });
const getConversationsId = makeGetConversationsId({ logger, getConversationById });
const getDoctors = makeGetDoctors({ getAllDoctors });
const getDoctorsId = makeGetDoctorsId({ doctorDb });

export {
    postUser,
    postConversations,
    postConversationsMessages,
    getConversations,
    getConversationsId,
    getDoctors,
    getDoctorsId
};
