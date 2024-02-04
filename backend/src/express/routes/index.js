import express from "express";
import userRouter from "./user-route";
import conversationsRouter from "./conversations-route";

const router = express.Router();
router.use("/user", userRouter);
router.use("/conversations", conversationsRouter);

export default router;
