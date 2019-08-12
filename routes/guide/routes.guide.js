import { Router } from "express";
import guideController from "../../controllers/guideController";
import guideAuth from './routes.guide.auth';

const router = Router();

// ROUTE = "/guide"

router.use("/auth", guideAuth);

router.get("/", (req, res) => guideController.getGuides(req,res));

router.get("/:id", (req,res) => guideController.getGuideById(req,res));

router.patch("/:id", (req, res) => guideController.updateGuideInfo(req,res));

router.patch("/:id/password", (req,res) => guideController.changePassword(req,res));

router.delete("/:id", (req,res) => guideController.deleteGuide(req,res));


export default router;