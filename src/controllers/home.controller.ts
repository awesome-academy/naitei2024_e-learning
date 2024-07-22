import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { courseRecommends, courseLearns, user } from '../mock/data';

export const index = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {
      title: 'Smart Education',
      courseRecommends,
      courseLearns,
      user: res.locals.user || null,
    });
  }
);
