import { Router } from "express";
import auth from './routes.user.auth';
import userController from '../../controllers/userController';

const router = Router();

// ROUTE = "/user"

router.use('/auth', auth);

router.get("/", (req, res) => userController.getAllUsers(res));
router.get("/:id", (req, res) => userController.getUser(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res)),
router.patch("/:id/password", (req, res) => userController.changePassword(req, res));




export default router;