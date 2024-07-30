import { NextFunction, Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import { users } from '../mock/data';
import { UserRole } from '../enums/UserRole';

export const getUserList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('users/index', { users });
  }
);

export const getUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = users.find(user => user.id === req.params.id);
    res.render('users/detail', { user });
  }
);

export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('users/form', { title: 'Create user', UserRole });
  }
);

export const getUpdateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = users.find(user => user.id === req.params.id);
    res.render('users/form', { title: 'Update user', user, UserRole });
  }
);

export const getDeleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = users.find(user => user.id === req.params.id);
    res.render('users/delete', { user });
  }
);
