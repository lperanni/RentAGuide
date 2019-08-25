import { Router } from 'express';
import guideRouter from './guide/routes.guide';
import userRouter from './user/routes.user';
import serviceRouter from './service/routes.service';
import jobRouter from './job/routes.job';
import utilRouter from './util/routes.util';

const router = Router();

// Route = "/api"


router.use("/guide", guideRouter);
router.use("/user", userRouter);
router.use("/service", serviceRouter);
router.use("/job", jobRouter);
router.use("/util", utilRouter);

export default router;