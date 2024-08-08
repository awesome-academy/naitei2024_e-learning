import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import i18next from 'i18next';
import * as courseService from '../services/course.service';
import { Course } from '../entity/course.entity';
import { CourseLevel } from '../enums/CourseLevel';
import * as lessonService from '../services/lesson.service';

export const courseList = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const courseRecommends = await courseService.getCourseList();
    res.render('courses/index', {
      title: req.t('title.list_course'),
      courseRecommends,
      currentPath: req.baseUrl,
    });
  }
);

async function validateCourse(
  req: Request,
  res: Response
): Promise<Course | null> {
  const courseId = req.params.id;
  if (!courseId) {
    const errorMessageId = i18next.t('error.invalidId');
    res.status(404).send(errorMessageId);
    return null;
  }

  const course = await courseService.getCourseDetails(courseId);
  if (course === null) {
    req.flash('error', i18next.t('error.courseNotFound'));
    res.redirect('/error');
    return null;
  }

  return course;
}

// Hiển thị trang chi tiết của một khóa học cụ thể.
export const courseDetail = async (req: Request, res: Response) => {
  const course = await validateCourse(req, res);
  if (course === null) return;

  // Đếm số lượng sinh viên đã đăng ký khóa học
  const studentCount = await courseService.getStudentCountByCourseId(course.id);

  // Lấy danh sách bài học của khóa học
  const lessons = await lessonService.getLessonsByCourseId(course.id);

  try {
    res.render('courses/detail', {
      title: req.t('title.course_detail'),
      course,
      CourseLevel,
      lessons,
      studentCount,
    });
  } catch (error) {
    req.flash('error', i18next.t('error.failedToRetrieveCourseDetails'));
    res.redirect('/error');
  }
};

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
