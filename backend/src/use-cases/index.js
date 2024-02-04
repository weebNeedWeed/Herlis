import {userDb} from "./../infrastructure/persistence";
import {conversationDb} from "./../infrastructure/persistence";

import makeAddUser from "./add-user";
import makeCreateConversation from "./create-conversation";

const addUser = makeAddUser({userDb});
const createConversation = makeCreateConversation({userDb, conversationDb});

export {addUser, createConversation};
