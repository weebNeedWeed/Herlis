export default function makeGetConversations({logger, getAllConversations}) {
    return async function getConversations(httpRequest) {
        const {uid} = httpRequest.decodedToken;
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const result = await getAllConversations({
                userId: uid,
                pageSize: parseInt(httpRequest.query.pageSize, 10),
                cursor: httpRequest.query.cursor,
            });
            return {
                headers,
                statusCode: 200,
                body: {
                    ...result,
                    data: result.data.map(x => ({...x,messages: []})),
                }
            };
        } catch(err) {
            logger.error(err.message, {location: __filename});
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
