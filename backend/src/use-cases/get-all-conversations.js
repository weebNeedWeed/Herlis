export default function makeGetAllConversations({
    conversationDb,
    userDb
}) {
    return async function getAllConversations({
        userId,
        cursor = null,
        pageSize = 10,
    }) {
        if(!userId) {
            throw new Error("Invalid userId");
        }

        if(!await userDb.findByUid(userId)) {
            throw new Error("User does not exist");
        }

        const result = await conversationDb.findAll({
            userId,
            cursor,
            pageSize,
        });
        const nextCursor = result[result.length - 1]?.id ?? null;
        return {
            cursor: nextCursor,
            data: result,
        };
    }
}
