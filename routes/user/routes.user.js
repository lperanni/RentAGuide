import { Router } from "express";
import auth from './routes.user.auth';

const router = Router();

// ROUTE = "/user"

router.use('/auth', auth);




export default router;