import buildMakeUser from "./user";
import buildMakeConversation from "./conversation";
import buildMakeMessage from "./message";
import Id from "./../utils/Id";
import IsoDate from "./../utils/IsoDate";

const makeUser = buildMakeUser({IsoDate});
const makeConversation = buildMakeConversation({Id});
const makeMessage = buildMakeMessage({Id});

export {
    makeUser,
    makeConversation,
    makeMessage
};
