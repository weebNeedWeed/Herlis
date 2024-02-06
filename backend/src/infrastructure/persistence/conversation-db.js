export default function makeConversationDb({db}) {
    const collectionName = "conversations";

    return Object.freeze({
        insert,
        findById,
        update
    });

    async function insert({id, ...conversationInfo}) {
        const convRef = db.collection(collectionName)
            .doc(id);
        await convRef.set(conversationInfo);
        return {id, ...conversationInfo};
    }

    async function findById(id) {
        const convRef = db.collection(collectionName)
            .doc(id);
        const doc = await convRef.get();
        return doc.exists ? {...doc.data(), id} : null;
    }

    async function update({id, ...conversationInfo}) {
        const convRef = db.collection(collectionName)
            .doc(id);
        await convRef.update(conversationInfo);
        return {id, ...conversationInfo};
    }
}
