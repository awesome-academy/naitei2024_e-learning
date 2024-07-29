import { NextFunction, Response, Request } from 'express';
import asyncHandler from 'express-async-handler';

export const getExamInfo = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('exams/index');
  }
);

export const getExamDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('exams/detail');
  }
);
