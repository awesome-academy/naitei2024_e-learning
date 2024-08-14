import fs from 'fs';
import { NextFunction, Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import * as userService from '../services/user.service';
import * as courseService from '../services/course.service';
import { users, courseRecommends } from '../mock/data';
import { UserRole } from '../enums/UserRole';
import cloudinary from '../config/cloudinary-config';
import i18next from 'i18next';
import { Enrollment } from '../entity/enrollment.entity';

export const getUserList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('users/index', { users });
  }
);

export const getInstructorList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const instructors = await userService.getInstructorList();
    res.render('instructors/list', {
      title: req.t('title.list_instructor'),
      instructors,
      currentPath: req.baseUrl + req.path,
    });
  }
);

export const getStudentList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userSession = req.session.user;
    const students = await userService.getStudentList();

    let enrollments: Enrollment[] = [];
    if (userSession && userSession.role === UserRole.INSTRUCTOR) {
      enrollments = await courseService.getEnrollmentForInstructor(userSession);
    }
    res.render('students/list', {
      title: req.t('title.list_student'),
      students,
      enrollments,
      currentPath: req.baseUrl + req.path,
    });
  }
);

export const userDetail = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      res.status(404).send('User not found');
      return;
    }
    const managedCourses = await courseService.getUserCourseList(user);

    res.render('users/detail', {
      title: req.t('title.user_detail'),
      user,
      userCourses: managedCourses || [],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const validateUserCurrent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session.user || !req.session.user.id) {
    req.flash('error', i18next.t('error.user_not_authenticated'));
    return res.redirect('/login');
  }

  const user = await userService.getUserById(req.session.user.id);
  if (!user) {
    req.flash('error', i18next.t('error.user_not_found'));
    return res.redirect('/profile');
  }

  res.locals.user = user;
};

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await validateUserCurrent(req, res, next);

  return res.render('users/profile', {
    title: req.t('title.profile'),
    user: res.locals.user,
  });
};

export const userUpdateProfileGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await validateUserCurrent(req, res, next);

  res.render('users/update_profile', {
    title: req.t('title.update_profile'),
    user: res.locals.user,
  });
};

export const userUpdateProfilePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Kiểm tra xem người dùng đã đăng nhập chưa
  if (!req.session.user?.id) {
    req.flash('error', i18next.t('error.unauthorized'));
    return res.redirect('/login');
  }

  // Xử lý tải lên ảnh
  let avatarUrl = '';
  if (req.file) {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: 'avatars',
    });
    avatarUrl = result.secure_url;
    // Xóa file tạm thời sau khi upload thành công
    fs.unlinkSync(req.file.path);
  }

  // Lấy dữ liệu từ body và chuyển đổi kiểu ngày
  const updateData = {
    name: req.body.name,
    phone: req.body.phone,
    about: req.body.about,
    birthday: req.body.birthday ? new Date(req.body.birthday) : undefined,
    avatar_url: avatarUrl || req.session.user.avatar_url,
  };

  // Cập nhật người dùng
  const updatedUser = await userService.updateUser(
    req.session.user.id,
    updateData
  );
  if (!updatedUser) {
    req.flash('error', i18next.t('error.user_not_found'));
    return res.redirect('/profile');
  }

  // Cập nhật thông tin người dùng trong session
  req.session.user = updatedUser;

  req.flash('success', i18next.t('success.profile_updated'));
  res.redirect('/profile');
};

export const userCreateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.render('users/form', { title: 'Create user', UserRole });
  }
);

export const userCreatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('User is created with method POST');
  }
);

export const userDeleteGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = users.find(user => user.id === req.params.id);
    res.render('users/delete', { user });
  }
);

export const userDeletePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`User ${req.params.id} is deleted with method POST`);
  }
);

export const userUpdateGet = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = users.find(user => user.id === req.params.id);
    res.render('users/form', { title: 'Update user', user, UserRole });
  }
);

export const userUpdatePost = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`User ${req.params.id} is updated with method POST`);
  }
);
