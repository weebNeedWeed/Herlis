import logger from "./../infrastructure/logging-init";

export default function makeCallback(controller) {
    return (req, res) => {
        const httpRequest = Object.freeze({
            params: req.params,
            query: req.query,
            body: req.body,
            headers: req.headers,
            token: req.token || undefined,
            decodedToken: req.decodedToken || undefined,
        });

        controller(httpRequest)
            .then(httpResponse => {
                if(httpResponse.headers) {
                    res.set(httpResponse.headers);
                }
                res.type("json");
                res.status(httpResponse.statusCode)
                    .send(httpResponse.body);
            }).catch((err) => {
                logger.error(err.message, {location: __filename});
                res.type("json")
                    .status(500)
                    .send({ error: 'An unknown error occurred.' });
            });
    };
}
