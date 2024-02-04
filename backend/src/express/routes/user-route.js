import express from "express";
import {postUser} from "./../../controllers";
import makeCallback from "./../make-callback";
import extractToken from "./../middlewares/extract-token";
import validateToken from "./../middlewares/validate-token";

const router = express.Router();

// private
router.use(extractToken);
router.use(validateToken);
router.post("/", makeCallback(postUser));

export default router;
