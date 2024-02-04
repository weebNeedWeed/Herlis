import makePostUser from "./post-user";
import makePostConversations from "./post-conversations";

import {addUser, createConversation} from "./../use-cases";
import logger from "./../infrastructure/logging-init";

const postUser = makePostUser({addUser, logger});
const postConversations = makePostConversations({createConversation, logger});

export {
    postUser,
    postConversations
};
