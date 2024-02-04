export default function makeUserDb({db}) {
    const collectionName = "users";

    return Object.freeze({
        findByUid,
        insert
    });

    async function findByUid(uid) {
        const userRef = db.collection(collectionName).doc(uid);
        const doc = await userRef.get();
        if(!doc.exists) {
            return null;
        }
        return doc.data();
    }

    async function insert({uid, ...userInfo}) {
        const userRef = db.collection(collectionName).doc(uid);
        await userRef.set({
            ...userInfo
        });
        return {uid, ...userInfo};
    }
}
