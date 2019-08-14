import { Router } from 'express';
import guideRouter from './guide/routes.guide';
import userRouter from './user/routes.user';
import serviceRouter from './service/routes.service';
import jobRouter from './job/routes.job';

const router = Router();

// Route = "/api"


router.use("/guide", guideRouter);
router.use("/user", userRouter);
router.use("/service", serviceRouter);
router.use("/job", jobRouter);

export default router;