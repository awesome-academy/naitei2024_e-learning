import { Request, Response, NextFunction } from 'express';

export const sessionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.userId) {
    // Nếu có userId trong session, lưu thông tin người dùng vào res.locals
    res.locals.user = {
      id: req.session.userId,
      username: req.session.username,
      name: req.session.name,
      role: req.session.role,
    };
  } else {
    res.locals.user = null;
  }
  next();
};
