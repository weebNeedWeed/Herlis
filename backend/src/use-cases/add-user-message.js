import {makeConversation} from "./../entities";

export default function makeAddUserMessage({conversationDb, getGeminiResponse}) {
    return async function addUserMessage({
        userId,
        id,
        content,
    }) {
        let conversation = await conversationDb.findById(id);
        if(!conversation) {
            throw new Error("Conversation does not exist");
        }
        conversation = makeConversation(conversation); 
        if(conversation.getUserId() !== userId) {
            throw new Error("Invalid conversation");
        }
        const response = await getGeminiResponse(content,conversation);
        conversation.addMessage(
            {sender: "user", content});
        conversation.addMessage(
            {sender: "model", content: response.text()});

        const result = await conversationDb.update({
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
                
        return result;
    }
}
