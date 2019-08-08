import { Router } from "express";
import guideRouter from "./routes.guide";

const router = Router();

router.use("/guide", guideRouter);

export default router;