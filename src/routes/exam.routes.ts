import { Router } from 'express';
import * as examController from '../controllers/exam.controller';

const router: Router = Router();

router.get('/create', examController.examCreateGet);

router.post('/create', examController.examCreatePost);

router.get('/:id/delete', examController.examDeleteGet);

router.post('/:id/delete', examController.examDeletePost);

router.get('/:id/update', examController.examUpdateGet);

router.post('/:id/update', examController.examUpdatePost);

router.get('/:id', examController.getExamDetail);

router.get('/', examController.getExamInfo);

export default router;
