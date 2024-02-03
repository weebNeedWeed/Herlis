export default function makeCallback({controller}) {
    return (req, res) => {
        const httpRequest = Object.freeze({
            params: req.params,
            query: req.query,
            body: req.body,
        });

        controller(httpRequest)
            .then(httpResponse => {
                if(httpResponse.headers) {
                    res.set(httpResponse.headers);
                }
                res.type("json");
                res.status(httpResponse.statusCode)
                    .send(httpResponse.body);
            }).catch(() => {
                // TODO: add logging here
                res.type("json")
                    .status(500)
                    .send({ error: 'An unknown error occurred.' });
            });
    };
}
