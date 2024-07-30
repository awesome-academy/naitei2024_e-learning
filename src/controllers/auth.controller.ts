import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { User } from '../entity/user.entity';
import {
  findUserByEmail,
  saveUser,
  authenticateUser,
} from '../services/auth.service';
import { body, validationResult } from 'express-validator';
import { UserRole } from '../enums/UserRole';

export const registerGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('auth/register', { title: 'Register' });
  }
);

export const registerPost = [
  body('name', 'Full Name is required').trim().notEmpty(),
  body('username', 'Username must be at least 3 characters long')
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body('email', 'Invalid email').isEmail().normalizeEmail(),
  body('password', 'Password must be at least 6 characters long')
    .trim()
    .isLength({ min: 6 }),
  body('confirm-password', 'Passwords do not match')
    .trim()
    .custom((value, { req }) => value === req.body.password),

  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    const user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.hash_password = await User.hashPassword(req.body.password); // Hash mật khẩu

    if (!errors.isEmpty()) {
      res.render('auth/register', {
        title: 'Register',
        user: user,
        errors: errors.array(),
      });
      return;
    } else {
      const userExists = await findUserByEmail(req.body.email);
      if (userExists) {
        res.redirect('/auth/login'); // Nếu email đã tồn tại, chuyển hướng đến trang đăng nhập
      } else {
        await saveUser(user);
        res.redirect('/auth/login'); // Đăng ký thành công, chuyển hướng đến trang đăng nhập
      }
    }
  }),
];

export const loginGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('auth/login', { title: 'Login' });
  }
);

export const loginPost = [
  body('username', 'Invalid username').trim().notEmpty(),
  body('password', 'Password cannot be empty').trim().notEmpty(),

  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('auth/login', {
        title: 'Login',
        errors: errors.array(),
      });
      return;
    }

    const user = await authenticateUser(req.body.username, req.body.password);

    if (user) {
      // Lưu thông tin người dùng vào session bằng cách sử dụng type assertion
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.name = user.name;
      req.session.role = user.role;

      // Điều hướng dựa trên vai trò của người dùng
      if (user.role === UserRole.ADMIN) {
        res.redirect('/admin'); // chuyển hướng đến trang quản trị
      } else if (user.role === UserRole.INSTRUCTOR) {
        res.redirect('/instructor'); // chuyển hướng đến trang giảng viên
      } else {
        res.redirect('/'); // Mặc định chuyển hướng đến trang sinh viên
      }
    } else {
      res.render('auth/login', {
        title: 'Login',
        errors: [{ msg: 'Invalid email or password' }],
      });
    }
  }),
];
