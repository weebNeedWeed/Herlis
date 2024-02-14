export default function makeGetConversationById({
    conversationDb,
    userDb
}) {
    return async function getConversationById({
        id,
        userId,
    }) {
        if(!userId || !await userDb.findByUid(userId)) {
            throw new Error("User does not exist.");
        }

        const conversation = await conversationDb.findById(id);
        if(!conversation || conversation.userId !== userId) {
            throw new Error("Conversation does not exist");
        }

        return conversation;
    }
}
