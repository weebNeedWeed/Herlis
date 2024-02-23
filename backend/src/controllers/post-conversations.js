export default function makePostConversations({createConversation, logger}) {
    return async function postConversations(httpRequest) {
        const {uid} = httpRequest.decodedToken;
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const conversation = await createConversation({
                userId: uid,
                firstMessage: httpRequest.body.firstMessage
            });

            return {
                headers,
                statusCode: 200,
                body: conversation
            };
        } catch(err) {
            console.log(err);
            logger.error(err.message, {location: __filename});
            return {
                headers,
                statusCode: 500,
                body: {
                    error: err.message
                }
            };
        }
    }
}
