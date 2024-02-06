import {makeConversation} from "./../entities";

export default function makeCreateConversation({
    conversationDb,
    userDb,
    getGeminiResponse
}) {
    return async function createConversation({
        userId,
        firstMessage,
    }) {
        const conversation = makeConversation({
            userId
        });

        if(!firstMessage || !firstMessage.trim()) {
            throw new Error("Invalid message");
        }

        if(!await userDb.findByUid(userId)){
            throw new Error("Invalid userId");
        }

        const response = await getGeminiResponse(firstMessage,conversation);
        conversation.addMessage(
            {sender: "user", content: firstMessage});
        conversation.addMessage(
            {sender: "model", content: response.text()});

        return await conversationDb.insert({
            id: conversation.getId(),
            title: conversation.getTitle(),
            userId: conversation.getUserId(),
            createdAt: conversation.getCreatedAt(),
            messages: conversation.getMessages().map(x => ({
                id: x.getId(),
                content: x.getContent(),
                sender: x.getSender(),
                createdAt: x.getCreatedAt()
            })),
        });
    }
}
