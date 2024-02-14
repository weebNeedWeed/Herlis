import express from "express";
import makeCallback from "./../make-callback";
import {
    postConversations, 
    postConversationsMessages, 
    getConversations,
    getConversationsId,
} from "./../../controllers";
import extractToken from "./../middlewares/extract-token";
import validateToken from "./../middlewares/validate-token";

const router = express.Router();

router.use(extractToken);
router.use(validateToken);
router.post("/", makeCallback(postConversations));
router.post("/:id/messages", makeCallback(postConversationsMessages));
router.get("/", makeCallback(getConversations));
router.get("/:id", makeCallback(getConversationsId));

export default router;
