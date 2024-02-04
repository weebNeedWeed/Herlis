import express from "express";
import makeCallback from "./../make-callback";
import {postConversations} from "./../../controllers";
import extractToken from "./../middlewares/extract-token";
import validateToken from "./../middlewares/validate-token";

const router = express.Router();

router.use(extractToken);
router.use(validateToken);
router.post("/", makeCallback(postConversations));

export default router;
