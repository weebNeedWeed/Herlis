export default function makeGetConversationsId({getConversationById, logger}) {
    return async function getConversationsId(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };
        const {uid} = httpRequest.decodedToken;
        try {
            const conversation = await getConversationById({
                userId: uid,
                id: httpRequest.params.id
            });
            return {
                headers,
                statusCode: 200,
                body: conversation
            };
        } catch (err) {
            logger.error(err.message, {location: __filename});
            return {
                headers,
                statusCode: 400,
                body: {
                    error: err.message
                }
            }
        }
    }
}
