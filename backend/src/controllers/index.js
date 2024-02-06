import makePostUser from "./post-user";
import makePostConversations from "./post-conversations";
import makePostConversationsMessages from "./post-conversations-messages";

import {addUser, createConversation, addUserMessage} from "./../use-cases";
import logger from "./../infrastructure/logging-init";

const postUser = makePostUser({addUser, logger});
const postConversations = makePostConversations({createConversation, logger});
const postConversationsMessages = makePostConversationsMessages({addUserMessage, logger});

export {
    postUser,
    postConversations,
    postConversationsMessages
};
