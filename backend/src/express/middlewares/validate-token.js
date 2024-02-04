import {auth} from "./../../infrastructure/firebase-init";
import logger from "./../../infrastructure/logging-init";

export default async function validateToken(req, res, next) {
    if (!req.token) {
        res.status(401).send({error: "Unauthorized"});
        return;
    }
    try {
        const decodedToken = await auth.verifyIdToken(req.token);
        req.decodedToken = decodedToken;
        next();
    } catch(err) {
        logger.log({
            level: "warn",
            message: err
        });
        res.status(401).send({error: "Unauthorized"});
    }
}
