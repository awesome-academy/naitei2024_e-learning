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
import { Specialization } from '../enums/Specialization';
import passport from 'passport';

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

    // Kiểm tra xem người dùng đã tồn tại chưa
    const userExists = await findUserByUsername(dto.username);
    if (userExists) {
      req.flash('error', i18next.t('username_exists'));
      return res.redirect('/auth/register');
    }

    // Tạo đối tượng User mới
    const user = new User();
    user.name = dto.name;
    user.username = dto.username;
    user.email = dto.email;
    // Hash mật khẩu nếu authType là 'local'
    if (dto.authType === 'local' && dto.password) {
      user.hash_password = await user.hashPassword(dto.password, 'local');
    } else {
      user.hash_password = ''; // Hoặc giá trị khác nếu cần
    }

    if (dto.role === UserRole.INSTRUCTOR) {
      user.about = dto.about || '';
      user.specialization = dto.specialization || Specialization.NONE;
      user.role = UserRole.PENDING_APPROVAL; // Đặt trạng thái là PENDING_APPROVAL
    } else {
      user.role = UserRole.STUDENT;
    }

    // Lưu người dùng vào cơ sở dữ liệu
    await saveUser(user);

    // Thông báo cho người dùng
    if (dto.role === UserRole.INSTRUCTOR) {
      req.flash('success', i18next.t('register.instructor_pending_approval'));
    } else {
      req.flash('success', i18next.t('user_saved'));
    }

    // Chuyển hướng đến trang chính
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
      if (user.role === UserRole.PENDING_APPROVAL) {
        req.flash('error', i18next.t('login.errors.pending_approval'));
        return res.redirect('/auth/login');
      }

      // Lưu thông tin người dùng vào session
      req.session.user = user;

      if (user.role === UserRole.ADMIN) {
        res.redirect('/admin');
      } else {
        res.redirect('/');
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

export const googleCallback = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Received callback request');

  passport.authenticate('google', { session: true }, (err, user: User) => {
    if (err) {
      console.log('Error during authentication:', err);
      return next(err);
    }

    if (!user) {
      console.log('User not found');
      return res.redirect('/auth/login');
    }

    try {
      // Gọi `login` để lưu thông tin người dùng vào session
      req.logIn(user, err => {
        if (err) {
          console.log('Error logging in user:', err);
          return next(err);
        }

        // Lưu thông tin người dùng vào session
        req.session.user = user;
        console.log('User saved to session:', user);

        // Tiếp tục chuyển hướng sau khi lưu thông tin người dùng vào session
        res.redirect('/');
      });
    } catch (error) {
      console.log('Error saving user to session:', error);
      next(error);
    }
  })(req, res, next);
};
