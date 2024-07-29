import { Router } from 'express';
import * as lessonController from '../controllers/lesson.controller';
import { RequestWithCourseID } from '../helpers/lesson.helper';

const lessonRouter: Router = Router();

lessonRouter.use((req: RequestWithCourseID, res, next) => {
  req.courseID = req.baseUrl.split('/')[2];
  next();
});

lessonRouter.get('/:lessonID', lessonController.getLessonDetai);

export default lessonRouter;
