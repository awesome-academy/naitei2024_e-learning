import { Router } from 'express';
import * as authController from '../controllers/auth.controller';

const router: Router = Router();

router.get('/register', authController.registerGet);
router.post('/register', authController.registerPost);

router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);

router.get('/logout', authController.logout);

export default router;
