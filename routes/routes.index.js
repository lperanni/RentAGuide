import { Router } from "express";
import guideRouter from "./routes.guide";
import userRouter from "./routes.user";
import authRouter from "./routes.auth";

const router = Router();

router.use("/", authRouter);
router.use("/guide", guideRouter);
router.use("/user", userRouter);

export default router;