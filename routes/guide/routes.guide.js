import { Router } from "express";
import guideController from "../../controllers/guideController";
import guideJobs from './routes.guide.jobs';

const router = Router();

// ROUTE = "/guide"

router.use("/:id/jobs", guideJobs);

router.get("/", (req, res) => guideController.getGuides(req,res));

router.get("/:id", (req,res) => guideController.getGuideById(req,res));

router.post("/", (req, res) => guideController.registerGuide(req, res));

router.patch("/:id", (req, res) => guideController.updateGuideInfo(req,res));

router.patch("/:id/password", (req,res) => guideController.changePassword(req,res));

router.delete("/:id", (req,res) => guideController.deleteGuide(req,res));

router.get("/:id/ratings", (req, res) => guideController.getAllRatings(req, res));

router.get("/:id/ratings/total", (req, res) => guideController.getTotalRating(req, res));

router.post("/:id/language", (req, res) => guideController.addKnownLanguage(req, res));

router.get("/:id/language", (req, res) => guideController.getAllKnownLanguages(req, res));

router.get("/language/:languageId", (req, res) => guideController.getAllGuidesByLanguage(req, res));

router.post("/:id/service", (req, res) => guideController.postService(req, res));

router.get("/:id/service", (req, res) => guideController.getAllServicesByGuide(req, res));


export default router;