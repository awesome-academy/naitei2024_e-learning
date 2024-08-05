import { NextFunction, Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import { getLessonList, markDoneLesson } from '../services/lesson.service';
import { RequestWithCourseID } from '../helpers/lesson.helper';
import { getCourseById } from '../services/course.service';

export const getLessonDetail = asyncHandler(
  async (req: RequestWithCourseID, res: Response, next: NextFunction) => {
    // [TODO] get current user id
    const lessonList = await getLessonList('10', req.courseID!);
    const lessonDetail = lessonList.find(lesson => lesson.id === req.params.id);
    res.render('lessons/index', {
      lessonList,
      lessonDetail,
      courseID: req.courseID,
      studentLessonId: lessonDetail?.studentLessons[0].id,
    });
  }
);

export const lessonList = asyncHandler(
  async (req: RequestWithCourseID, res: Response, next: NextFunction) => {
    // [TODO] get current user id
    const lessonList = await getLessonList('10', req.courseID!);
    const courseDetail = await getCourseById(req.courseID!);
    res.render('lessons/index', {
      lessonList,
      courseDetail,
      courseID: req.courseID,
    });
  }
);

export const lessonCreateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('lesson is created with method GET');
  }
);

export const lessonCreatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('lesson is created with method POST');
  }
);

export const lessonDeleteGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`lesson ${req.params.id} is deleted with method GET`);
  }
);

export const lessonDeletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`lesson ${req.params.id} is deleted with method POST`);
  }
);

export const lessonUpdateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`lesson ${req.params.id} is updated with method GET `);
  }
);

export const lessonUpdatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`lesson ${req.params.id} is updated with method POST`);
  }
);

export const markDoneLessonPost = asyncHandler(
  async (req: RequestWithCourseID, res: Response, next: NextFunction) => {
    const studentLessonId = req.body.studentLessonId;
    const response = await markDoneLesson(studentLessonId);
    if (!response) return;
    res.redirect(`${response.lesson.id}`);
  }
);
