import { Router } from 'express';
import session from 'express-session';
import passport from 'passport';
import check from '../../services/authenticationCheck';
import authController from '../../controllers/authController';
const router = Router();

//MIDDLEWARE
router.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());


// ROUTE = "/user/auth"

router.post('/register', check.checkNotAuthenticated, (req, res) => authController.registerUser(req, res));
router.post('/login', check.checkNotAuthenticated, passport.authenticate('user-local'), (req, res) => res.sendStatus(204));
router.delete('/logout', (req, res) => authController.signOut(req, res));


export default router;