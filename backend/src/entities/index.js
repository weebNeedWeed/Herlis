import buildMakeUser from "./user";
import buildMakeConversation from "./conversation";
import buildMakeMessage from "./message";
import Id from "./../utils/Id";
import IsoDate from "./../utils/IsoDate";

const makeUser = buildMakeUser({IsoDate});
const makeConversation = buildMakeConversation({Id, IsoDate});
const makeMessage = buildMakeMessage({Id, IsoDate});

export {
    makeUser,
    makeConversation,
    makeMessage
};
