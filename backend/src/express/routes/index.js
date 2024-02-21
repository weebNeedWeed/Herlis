import express from "express";
import userRouter from "./user-route";
import conversationsRouter from "./conversations-route";
import { eventsHandler } from "../server-sent-events";

const router = express.Router();
router.use("/user", userRouter);
router.use("/conversations", conversationsRouter);

router.use("/events", eventsHandler);

export default router;
