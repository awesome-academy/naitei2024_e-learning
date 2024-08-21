import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import passport from 'passport';

const router: Router = Router();

router.get('/register', authController.registerGet);
router.post('/register', authController.registerPost);

router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);

router.get('/logout', authController.logout);

// Định tuyến để bắt đầu quy trình xác thực Google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// Định tuyến để xử lý callback từ Google
router.get('/google/callback', authController.googleCallback);

export default router;
