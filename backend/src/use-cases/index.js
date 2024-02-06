import {userDb} from "./../infrastructure/persistence";
import {conversationDb} from "./../infrastructure/persistence";
import getGeminiResponse from "./../infrastructure/gemini";
import "./domain-event-handlers";

import makeAddUser from "./add-user";
import makeAddUserMessage from "./add-user-message";
import makeCreateConversation from "./create-conversation";

const addUser = makeAddUser({userDb});
const createConversation = makeCreateConversation({userDb, conversationDb,getGeminiResponse});
const addUserMessage = makeAddUserMessage({conversationDb,getGeminiResponse});

export {addUser, createConversation, addUserMessage};
