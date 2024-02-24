import { makeConversation } from "./../entities";

export default function makeAddUserMessage({
    conversationDb,
    getGeminiResponse,
    publishMessage
}) {
    return async function addUserMessage({
        userId,
        id,
        content,
    }) {
        let conversation = await conversationDb.findById(id);
        if (!conversation) {
            throw new Error("Conversation does not exist");
        }
        conversation = makeConversation(conversation);
        if (conversation.getUserId() !== userId) {
            throw new Error("Invalid conversation");
        }
        const response = await getGeminiResponse(content, conversation);
        conversation.addMessage(
            { sender: "user", content });
        conversation.addMessage(
            { sender: "model", content: response.text() });

        // publish message to queue
        const msg = {
            content,
            userId,
            conversationId: id,
        };
        await publishMessage(JSON.stringify(msg));

        const result = await conversationDb.update({
            id: conversation.getId(),
            messages: conversation.getMessages().map(x => ({
                id: x.getId(),
                content: x.getContent(),
                sender: x.getSender(),
                createdAt: x.getCreatedAt().getTime(),
            })),
        });

        return result;
    }
}
