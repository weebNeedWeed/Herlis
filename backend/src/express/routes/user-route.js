import express from "express";
import {postUser} from "./../../controllers";
import makeCallback from "./../make-callback";

const router = express.Router();
router.post("/", makeCallback(postUser));

export default router;
