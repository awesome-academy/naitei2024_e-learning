import { Router } from 'express';
import * as homeController from '../controllers/home.controller';

const router: Router = Router();

router.get('/', homeController.index);

export default router;
