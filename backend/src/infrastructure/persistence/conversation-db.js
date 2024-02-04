export default function makeConversationDb({db}) {
    const collectionName = "conversations";

    return Object.freeze({
        insert
    });

    async function insert({id, ...conversationInfo}) {
        const convRef = db.collection(collectionName)
            .doc(id);
        await convRef.set(conversationInfo);
        return {id, ...conversationInfo};
    }
}
