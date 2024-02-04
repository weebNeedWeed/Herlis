import {makeConversation} from "./../entities";

export default function makeCreateConversation({
    conversationDb,
    userDb
}) {
    return async function createConversation({
        title,
        userId,
    }) {
        const conversation = makeConversation({
            title,
            userId
        });

        if(!await userDb.findByUid(userId)) {
            throw new Error("Invalid userId");
        }

        return await conversationDb.insert({
            id: conversation.getId(),
            title: conversation.getTitle(),
            userId: conversation.getUserId(),
            createdAt: conversation.getCreatedAt(),
            messages: conversation.getMessages(),
        });
    }
}
