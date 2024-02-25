import express from "express";
import userRouter from "./user-route";
import conversationsRouter from "./conversations-route";
import { eventsHandler } from "../server-sent-events";
import doctorsRouter from "./doctors-route";

const router = express.Router();
router.use("/user", userRouter);
router.use("/conversations", conversationsRouter);

router.use("/events", eventsHandler);
router.use("/doctors", doctorsRouter);

export default router;
