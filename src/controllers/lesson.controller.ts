import { NextFunction, Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import { fullLessons } from '../mock/data';

export interface RequestWithCourseID extends Request {
  courseID?: string;
}

export const getLessonDetai = asyncHandler(
  async (req: RequestWithCourseID, res: Response, next: NextFunction) => {
    const lessonDetail = fullLessons.find(
      lesson => lesson.id === req.params.lessonID
    );
    res.render('lessons/index', {
      fullLessons,
      lessonDetail,
      courseID: req.courseID,
    });
  }
);
