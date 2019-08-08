import { Router } from "express";
import guideController from "../controllers/guideController";

const router = Router();

router.get("/", (req, res) => guideController.getGuide(req,res));

export default router;