import { NextFunction, Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import { fullLessons } from '../mock/data';
import { getLessonById, getLessonList } from '../services/lesson.service';

export interface RequestWithCourseID extends Request {
  courseID?: string;
}

export const getLessonDetai = asyncHandler(
  async (req: RequestWithCourseID, res: Response, next: NextFunction) => {
    const lessonList = await getLessonList('66', req.courseID!);
    const lessonDetail = await getLessonById(req.params.lessonID);
    res.render('lessons/index', {
      lessonList,
      lessonDetail,
      courseID: req.courseID,
    });
  }
);
