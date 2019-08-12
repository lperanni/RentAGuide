import { Router } from 'express';
import session from 'express-session';
import passport from 'passport';
import check from '../services/authenticationCheck';
import authController from '../controllers/authController';
const router = Router();

//MIDDLEWARE
router.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());


// ROUTE = "/"

router.post('/register', check.checkNotAuthenticated, (req, res) => authController.registerUser(req, res));
router.post('/login', check.checkNotAuthenticated, passport.authenticate('local'));
router.delete('/logout', (req, res) => { req.logOut()});


export default router;