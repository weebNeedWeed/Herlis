export default function extractToken(req, res, next) {
    const headers = req.headers;
    if(!headers["authorization"] || headers["authorization"].length <= 6) {
        res.status(401).send({error: "Unauthorized"});
        return;
    }
    
    // Token ...
    const token = headers["authorization"].substring(6);
    req.token = token;
    next();
}
