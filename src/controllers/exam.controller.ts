import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

export const examList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('exam list');
  }
);

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

export const examCreateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('exam is created with method GET');
  }
);

export const examCreatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('exam is created with method POST');
  }
);

export const examDeleteGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`exam ${req.params.id} is deleted with method GET`);
  }
);

export const examDeletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`exam ${req.params.id} is deleted with method POST`);
  }
);

export const examUpdateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`exam ${req.params.id} is updated with method GET `);
  }
);

export const examUpdatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`exam ${req.params.id} is updated with method POST`);
  }
);
