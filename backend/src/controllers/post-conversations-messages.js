export default function makePostConversationsMessages({addUserMessage, logger}) {
    return async function postConversationsMessages(httpRequest) {
        const {uid} = httpRequest.decodedToken;
        const {id} = httpRequest.params;
        if(!id) {
            throw new Error("Missing conversationId");
        }
        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const conversation = await addUserMessage({
                content: httpRequest.body.content,
                userId: uid,
                id,
            });
            return {
                headers,
                statusCode: 200,
                body: conversation.messages.pop()
            };
        } catch(err) {
            logger.error(err.message, {location:__filename});
            return {
                headers,
                statusCode: 400,
                body: {
                    error: err.message
                }
            };
        }
    }
}
