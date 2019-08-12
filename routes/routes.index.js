import { Router } from 'express';
import guideRouter from './guide/routes.guide';
import userRouter from './user/routes.user';
import serviceRouter from './service/routes.service';

const router = Router();


router.use("/guide", guideRouter);
router.use("/user", userRouter);
router.use("/service", serviceRouter);

export default router;