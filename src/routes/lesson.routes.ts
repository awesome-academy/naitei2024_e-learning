import { Router, Response, NextFunction } from 'express';
import * as lessonController from '../controllers/lesson.controller';
import { RequestWithCourseID } from '../helpers/lesson.helper';

const router: Router = Router();

router.use((req: RequestWithCourseID, res: Response, next: NextFunction) => {
  req.courseID = req.baseUrl.split('/')[2];
  next();
});

router.get('/create', lessonController.lessonCreateGet);

router.post('/create', lessonController.lessonCreatePost);

router.get('/:id/delete', lessonController.lessonDeleteGet);

router.post('/:id/delete', lessonController.lessonDeletePost);

router.get('/:id/update', lessonController.lessonUpdateGet);

router.post('/:id/update', lessonController.lessonUpdatePost);

router.get('/:id', lessonController.getLessonDetail);

router.get('/', lessonController.lessonList);

export default router;
