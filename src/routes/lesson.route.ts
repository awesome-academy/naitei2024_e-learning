import { Router } from 'express';
import * as lessonController from '../controllers/lesson.controller';

const lessonRouter: Router = Router();

lessonRouter.use((req: lessonController.RequestWithCourseID, res, next) => {
  req.courseID = req.baseUrl.split('/')[2];
  next();
});

lessonRouter.get('/:lessonID', lessonController.getLessonDetai);

export default lessonRouter;
