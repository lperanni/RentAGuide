import { Router } from "express";
import guideRouter from "./routes.guide";
import userRouter from "./routes.user";

const router = Router();

router.use("/guide", guideRouter);
router.use("/user", userRouter);

export default router;