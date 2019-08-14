import { Router } from 'express';
import jobController from '../../controllers/jobController';

const router = Router();

// Route = "/guide/:id/jobs"

router.get("/", (req, res) => jobController.getJobsByGuide(req, res));
router.get("/:jobId", (req, res) => jobController.getSingleJobByGuide(req, res));

export default router;