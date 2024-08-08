import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import * as userService from '../services/user.service';
import * as courseService from '../services/course.service';
import { courseLearns } from '../mock/data';

export const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const instructors = await userService.getInstructorList();
    const students = await userService.getStudentList();

    // const userCourses = await courseServices.getUserCourseList(req.user);
    const courseRecommends = await courseService.getCourseList();

    res.render('index', {
      title: 'Smart Education',
      courseRecommends,
      courseLearns,
      instructors,
      students,
      currentPath: req.baseUrl + req.path,
      user: res.locals.user || null,
    });
  }
);
