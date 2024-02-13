export default function makeConversationDb({db}) {
    const collectionName = "conversations";

    return Object.freeze({
        insert,
        findById,
        update,
        findAll
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

    async function findAll({userId, cursor = null, pageSize = 10}) { 
        const convRef = db.collection(collectionName);
        let res = convRef;
        if(userId) {
            res = convRef.where("userId", "==", userId);
        }
        res = res.orderBy("createdAt");
        if(cursor) {
            cursor = await convRef.doc(cursor).get();
            if(cursor.exists) 
                res = res.startAfter(cursor);
        }
        res = await res.limit(pageSize)
            .get();
        const result = [];
        res.forEach(doc => result.push({
            ...doc.data(),
            id: doc.id
        }));
        return result;
    }
}
