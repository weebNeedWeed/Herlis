import makePostUser from "./post-user";
import makePostConversations from "./post-conversations";
import makePostConversationsMessages from "./post-conversations-messages";
import makeGetConversations from "./get-conversations";

import {addUser, createConversation, addUserMessage, getAllConversations} from "./../use-cases";
import logger from "./../infrastructure/logging-init";
import IsoDate from "./../utils/IsoDate";

const postUser = makePostUser({addUser, logger, IsoDate});
const postConversations = makePostConversations({createConversation, logger});
const postConversationsMessages = makePostConversationsMessages({addUserMessage, logger});
const getConversations = makeGetConversations({logger, getAllConversations});

export {
    postUser,
    postConversations,
    postConversationsMessages,
    getConversations
};
