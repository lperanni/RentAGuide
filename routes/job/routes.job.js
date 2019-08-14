import { Router } from 'express'
import jobController from '../../controllers/jobController';
import check from '../../services/authenticationCheck';

const router = Router();

// ROUTE = "/job"

router.get("/", (res) => jobController.getJobs(res));
router.get("/:id", (req, res) => jobController.getJobById(req, res));
router.post("/", check.checkNotAuthenticated, (req, res) => jobController.postJob(req, res));
router.delete("/:id", check.checkNotAuthenticated, (req, res) => jobController.cancelJob(req, res));
router.patch("/:id", check.checkNotAuthenticated, (req, res) => jobController.updateJobInfo(req, res));


export default router;