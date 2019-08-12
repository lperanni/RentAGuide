import { Router } from 'express';
import guideController from '../../controllers/guideController';
import check from '../../services/authenticationCheck';
import session from 'express-session';
import passport from 'passport';

const router = Router();

router.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());

// ROUTE = "/guide/auth"

router.post("/register",check.checkNotAuthenticated,(req, res) => guideController.registerGuide(req,res));

router.post("/login", check.checkNotAuthenticated, passport.authenticate('guide-local'), (req, res) => res.sendStatus(204));

router.delete('/logout', (req, res) => guideController.signOut(req, res));

export default router;