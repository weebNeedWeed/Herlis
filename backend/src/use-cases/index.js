import { userDb } from "./../infrastructure/persistence";
import { conversationDb } from "./../infrastructure/persistence";
import getGeminiResponse from "./../infrastructure/gemini";
import IsoDate from "./../utils/IsoDate";
import DomainEventEmitter from "./../utils/DomainEventEmitter";
import "./domain-event-handlers";
import { publishMessage } from "./../infrastructure/sqs/publisher";

import makeAddUser from "./add-user";
import makeAddUserMessage from "./add-user-message";
import makeCreateConversation from "./create-conversation";
import makeGetAllConversations from "./get-all-conversations";
import makeGetConversationById from "./get-conversation-by-id";

const addUser = makeAddUser({ userDb, });
const createConversation = makeCreateConversation({ userDb, conversationDb, getGeminiResponse, DomainEventEmitter });
const addUserMessage = makeAddUserMessage({ conversationDb, getGeminiResponse, publishMessage });
const getAllConversations = makeGetAllConversations({ conversationDb, userDb });
const getConversationById = makeGetConversationById({ conversationDb, userDb });

export {
    addUser,
    createConversation,
    addUserMessage,
    getAllConversations,
    getConversationById,
};
