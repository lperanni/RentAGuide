import { Router } from "express";
import guideController from "../controllers/guideController";
import guide from "../models/guide";

const router = Router();

// ROUTE = "/guide"

router.get("/", (req, res) => guideController.getGuides(req,res));

router.get("/:id", (req,res) => guideController.getGuideById(req,res));

router.post("/", (req, res) => guideController.postGuide(req,res));

export default router;