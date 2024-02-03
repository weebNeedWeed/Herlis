export default function makePostUser({addUser}) {
    return async function postUser(httpRequest) {
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const user = await addUser({...httpRequest.body});
            return {
                headers,
                statusCode: 200,
                body: user
            };
        } catch(err) {
            console.log(err);
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
