import { AppDataSource } from '../config/data-source';
import { Repository } from 'typeorm';
import { describe, expect, beforeAll, afterAll, it } from '@jest/globals';
import { CourseLevel, Specialization, UserRole } from '../enums';
import { User } from '../entity/user.entity';
import { Lesson } from '../entity/lesson.entity';
import { StudentLesson } from '../entity/student_lesson.entity';
import { Course } from '../entity/course.entity';
import { createCourse } from '../services/course.service';
import { createUser } from '../services/user.service';
import * as LessonService from '../services/lesson.service';

describe('Lesson Services', () => {
  let instructor: User;
  let student: User;
  let course: Course;

  const user = new User({
    email: `user${new Date().toISOString()}@example.com`,
    hash_password: '',
    username: `user${new Date().toISOString()}`,
    role: UserRole.STUDENT,
    name: 'John Doe',
    phone: '123-456-7890',
    about: 'Just a regular user.',
    birthday: new Date('1990-01-01T00:00:00.000Z'),
    specialization: Specialization.NONE,
    isVerify: true,
  });
  const att = {
    id: '2',
    name: 'Jest for Beginner',
    description:
      '"Jest for Beginner" is a concise guide to getting started with Jest, a popular JavaScript testing framework. Learn the basics of writing and running tests with practical examples and hands-on exercises, perfect for developers new to testing or Jest.',
    level: CourseLevel.BEGINNER,
    lessonIds: '',
  };
  const lesson = new Lesson({
    title: 'Getting Started with Jest',
    content:
      ' Introduction to setting up Jest in your JavaScript project. This lesson covers installation, basic configuration, and running your first test.',
    file_url: 'https://yourwebsite.com/files/getting-started-with-jest.md',
    study_time: new Date('2024-08-29T12:34:57.000Z'),
  });

  beforeAll(async () => {
    await AppDataSource.initialize();
    instructor = await createUser(user);
    user.email = `user${new Date(new Date().getTime() + 111).toISOString()}@example.com`;
    user.username = `user${new Date(new Date().getTime() + 111).toISOString()}`;
    student = await createUser(user);
    course = await createCourse(att, instructor);
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });
  describe('createNewLesson', () => {
    it('should return Lesson when created successfully', async () => {
      const course = await createCourse(att, instructor);
      const newLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      expect(newLesson).not.toBeNull();
    });
  });

  describe('updateLessonById', () => {
    it('should update and return the lesson when it exists', async () => {
      const course = await createCourse(att, instructor);
      const existingLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const updatedLessonDetails = {
        title: 'New Title',
        content: 'New Content',
        file_url: 'https://newurl.com/new-file.md',
        study_time: new Date('2024-08-29T12:34:56.789Z'),
      };

      const result = await LessonService.updateLessonById(
        existingLesson.id,
        [course],
        updatedLessonDetails.title,
        updatedLessonDetails.content,
        updatedLessonDetails.file_url,
        updatedLessonDetails.study_time
      );

      expect(result).not.toBeNull();
      expect(result?.title).toBe(updatedLessonDetails.title);
      expect(result?.content).toBe(updatedLessonDetails.content);
      expect(result?.file_url).toBe(updatedLessonDetails.file_url);
      expect(result?.study_time).toEqual(updatedLessonDetails.study_time);
      expect(result?.courses).toStrictEqual([course]);
    });

    it('should return undefined if the lesson does not exist', async () => {
      const lessonId = '1';
      const result = await LessonService.updateLessonById(lessonId, []);
      expect(result).toBeUndefined();
    });
  });

  describe('deleteLessonById', () => {
    it('should delete and return the lesson when it exists', async () => {
      const course = await createCourse(att, instructor);
      await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );

      const result = await LessonService.deleteLessonByLessonId(
        lesson.id,
        course.id
      );

      expect(result).not.toBeNull();
    });

    it('should return undefined if the lesson does not exist', async () => {
      const lessonId = '1';
      const courseId = '1';
      const result = await LessonService.deleteLessonByLessonId(
        lessonId,
        courseId
      );
      expect(result).toBeUndefined();
    });
  });

  describe('getLessonList', () => {
    it('should return a list of lessons with done status for the given user', async () => {
      const course = await createCourse(att, instructor);

      const newLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const studentLessonRepository =
        AppDataSource.getRepository(StudentLesson);
      const studentLesson = new StudentLesson({
        student: student,
        lesson: newLesson,
        done: true,
      });
      await studentLessonRepository.save(studentLesson);

      const result = await LessonService.getLessonList(student.id, course.id);

      expect(result).toHaveLength(1);
      expect(result[0].done).toBe(true);
    });

    it('should return an empty array if no lessons are found', async () => {
      const userId = 'user123';
      const courseId = 'course123';

      const result = await LessonService.getLessonList(userId, courseId);

      expect(result).toEqual([]);
    });
  });

  describe('getLessonListAdmin', () => {
    it('should return a list of lessons with done status for all user', async () => {
      const course = await createCourse(att, instructor);
      const newLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const studentLessonRepository =
        AppDataSource.getRepository(StudentLesson);
      await studentLessonRepository.save({
        student: student,
        lesson: newLesson,
        done: true,
      });
      const result = await LessonService.getLessonListAdmin(course.id);

      expect(result).toHaveLength(1);
    });

    it('should return an empty array if no lessons are found', async () => {
      const courseId = 'course123';
      const result = await LessonService.getLessonListAdmin(courseId);

      expect(result).toEqual([]);
    });
  });

  describe('getLessonById', () => {
    it('should return the lesson when a valid ID is provided', async () => {
      const course = await createCourse(att, instructor);
      const newLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const result = await LessonService.getLessonById(newLesson.id);
      const { courses, ...expectedLesson } = newLesson;

      expect(result).not.toBeNull();
      expect(result).toEqual(expectedLesson);
    });

    it('should return null if no lesson is found for the given ID', async () => {
      const lessonId = 'lesson123';

      const result = await LessonService.getLessonById(lessonId);

      expect(result).toBeNull();
    });
  });

  describe('getLessonsByCourseId', () => {
    it('should return a list of lessons for the given course ID', async () => {
      const course = await createCourse(att, instructor);
      const newLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const { courses, ...expectedLesson } = newLesson;
      const result = await LessonService.getLessonsByCourseId(course.id);

      expect(result).toEqual([expectedLesson]);
    });

    it('should return an empty array if no lessons are found', async () => {
      const courseId = 'course123';

      const result = await LessonService.getLessonsByCourseId(courseId);

      expect(result).toEqual([]);
    });
  });

  describe('markDoneLesson', () => {
    it('should toggle the done status of the student lesson', async () => {
      const course = await createCourse(att, instructor);
      const newLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const studentLessonRepository =
        AppDataSource.getRepository(StudentLesson);
      const studentLesson = await studentLessonRepository.save({
        student: student,
        lesson: newLesson,
        done: false,
      });

      const result = await LessonService.markDoneLesson(studentLesson.id);

      expect(result).not.toBeNull();
      expect(result?.done).toBe(true);
    });

    it('should return undefined if the student lesson is not found', async () => {
      const studentLessonId = 'studentLesson123';

      const result = await LessonService.markDoneLesson(studentLessonId);

      expect(result).toBeUndefined();
    });
  });

  describe('getLessonListOfInstructor', () => {
    it('should return a list of lessons for the given instructor as primary or sub instructor', async () => {
      await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const result = await LessonService.getLessonListOfInstructor(instructor);
      expect(result).not.toBeNull();
    });
    it('should return an empty array if the instructor has no lessons', async () => {
      user.email = `user${new Date(new Date().getTime() + 333).toISOString()}@example.com`;
      user.username = `user${new Date(new Date().getTime() + 333).toISOString()}`;
      const instructor2 = await createUser(user);
      const result = await LessonService.getLessonListOfInstructor(instructor2);
      expect(result).toEqual([]);
    });
  });

  describe('getStudentLessonByLessonId', () => {
    it('should return a list of student lessons for the given lesson ID', async () => {
      const newLesson = await LessonService.createLesson(
        course,
        lesson.title,
        lesson.content,
        lesson.file_url,
        lesson.study_time
      );
      const result = await LessonService.getStudentLessonByLessonId(
        newLesson.id
      );

      expect(result).not.toBeNull();
    });

    it('should return an empty array if no student lessons are found for the given lesson ID', async () => {
      const lessonId = 'lesson123';
      const result = await LessonService.getStudentLessonByLessonId(lessonId);

      expect(result).toEqual([]);
    });
  });
});
