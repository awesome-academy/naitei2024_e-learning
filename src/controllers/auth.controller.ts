import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import i18next from 'i18next';
import { User } from '../entity/user.entity';
import {
  findUserByUsername,
  saveUser,
  authenticateUser,
} from '../services/auth.service';
import { UserRole } from '../enums/UserRole';
import { RegisterDTO } from '../dtos/register.dto';
import { LoginDTO } from '../dtos/login.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export const registerGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('auth/register', {
      title: i18next.t('register.title'),
    });
  }
);

export const registerPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Chuyển đổi body thành đối tượng RegisterDTO
    const dto = plainToClass(RegisterDTO, req.body);

    // Xác thực dữ liệu DTO
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.render('auth/register', {
        user: dto,
        errors: errors.map(err => ({
          param: err.property,
          msg: Object.values(err.constraints || {})[0],
        })),
      });
    }

    // Tiến hành xử lý đăng ký
    const user = new User();
    user.name = dto.name;
    user.username = dto.username;
    user.email = dto.email;
    user.hash_password = await User.hashPassword(dto.password); // Hash mật khẩu

    const userExists = await findUserByUsername(dto.username);
    if (userExists) {
      req.flash('error', i18next.t('username_exists'));
    } else {
      await saveUser(user);
      req.flash('success', i18next.t('user_saved'));
    }
    res.redirect('/auth/register');
  }
);

export const loginGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('auth/login', {
      title: i18next.t('login.title'),
    });
  }
);

export const loginPost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToClass(LoginDTO, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const formattedErrors = errors.map(err => ({
        param: err.property,
        msg: Object.values(err.constraints || {})[0],
      }));

      return res.render('auth/login', {
        title: i18next.t('login.title'),
        errors: formattedErrors,
        messages: { error: formattedErrors.map(err => err.msg) },
      });
    }

    const user = await authenticateUser(dto.username, dto.password);

    if (user) {
      // Lưu thông tin người dùng vào session
      req.session.user = user;

      if (user.role === UserRole.ADMIN) {
        res.redirect('/admin');
      } else if (user.role === UserRole.INSTRUCTOR) {
        res.redirect('/instructor');
      } else {
        res.redirect('/'); // Mặc định chuyển hướng đến trang sinh viên
      }
    } else {
      req.flash('error', i18next.t('login.errors.invalid_credentials'));
      res.redirect('/auth/login');
    }
  }
);

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy(err => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
