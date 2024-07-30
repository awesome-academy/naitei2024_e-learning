import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../enums/UserRole';

export const requireRole = (role: UserRole) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.role === role) {
      next();
    } else {
      res.status(403).send('Access denied');
    }
  };
};
