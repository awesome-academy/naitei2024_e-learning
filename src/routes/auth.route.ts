// src/routes/auth.route.ts
import { Router } from 'express';
import {
  registerGet,
  registerPost,
  loginGet,
  loginPost,
} from '../controllers/auth.controller';

const router: Router = Router();

// Route để render trang đăng ký
router.get('/register', registerGet);
router.post('/register', registerPost);

// Route để render trang đăng nhập
router.get('/login', loginGet);
router.post('/login', loginPost);

export default router;
