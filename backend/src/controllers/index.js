import makePostUser from "./post-user";
import makePostConversations from "./post-conversations";
import makePostConversationsMessages from "./post-conversations-messages";
import makeGetConversations from "./get-conversations";
import makeGetConversationsId from "./get-conversations-id";

import {
    addUser, 
    createConversation, 
    addUserMessage, 
    getAllConversations,
    getConversationById,
} from "./../use-cases";
import logger from "./../infrastructure/logging-init";
import IsoDate from "./../utils/IsoDate";

const postUser = makePostUser({addUser, logger, IsoDate});
const postConversations = makePostConversations({createConversation, logger});
const postConversationsMessages = makePostConversationsMessages({addUserMessage, logger});
const getConversations = makeGetConversations({logger, getAllConversations});
const getConversationsId = makeGetConversationsId({logger, getConversationById});

export {
    postUser,
    postConversations,
    postConversationsMessages,
    getConversations,
    getConversationsId,
};
