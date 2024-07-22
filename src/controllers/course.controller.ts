import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

export const courseList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('course list');
  }
);

export const courseDetail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`course detail: ${req.params.id}`);
  }
);

export const courseCreateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('course is created with method GET');
  }
);

export const courseCreatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('course is created with method POST');
  }
);

export const courseDeleteGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`course ${req.params.id} is deleted with method GET`);
  }
);

export const courseDeletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`course ${req.params.id} is deleted with method POST`);
  }
);

export const courseUpdateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`course ${req.params.id} is updated with method GET `);
  }
);

export const courseUpdatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`course ${req.params.id} is updated with method POST`);
  }
);
