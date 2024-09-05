import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { Lesson } from '../entity/lesson.entity';
import { StudentLesson } from '../entity/student_lesson.entity';
import { Course } from '../entity/course.entity';
import { User } from '../entity/user.entity';
import * as LessonService from '../services/lesson.service';

let lessonRepository: Repository<Lesson>;
let courseRepository: Repository<Course>;
let studentLessonRepository: Repository<StudentLesson>;
let userRepository: Repository<User>;

beforeAll(async () => {
  await AppDataSource.initialize();
  lessonRepository = AppDataSource.getRepository(Lesson);
  courseRepository = AppDataSource.getRepository(Course);
  studentLessonRepository = AppDataSource.getRepository(StudentLesson);
  userRepository = AppDataSource.getRepository(User);
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('Lesson Services', () => {
  describe('getLessonList', () => {
    it('should return a list of lessons with done status for the given user', async () => {
      const userId = '5877df58-ad78-4833-8b04-175e72b6e3db';
      const courseId = 'c10d1e4f1-223b-4cdd-9f0e-0123456789a';

      const result = await LessonService.getLessonList(userId, courseId);

      expect(result.length).toBe(6);
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
      const courseId = 'c10d1e4f1-223b-4cdd-9f0e-0123456789a';

      const result = await LessonService.getLessonListAdmin(courseId);

      expect(result.length).toBe(6);
      expect(result[0].studyTime).toBeDefined();
    });

    it('should return an empty array if no lessons are found', async () => {
      const courseId = 'course123';
      const result = await LessonService.getLessonListAdmin(courseId);

      expect(result).toEqual([]);
    });
  });

  describe('getLessonById', () => {
    it('should return the lesson when a valid ID is provided', async () => {
      const lessonId = 'l14d1e4f1-223b-4cdd-9f0e-0123456789a';

      const result = await LessonService.getLessonById(lessonId);

      expect(result).toBeDefined();
      expect(result?.title).toBe('CSS Styling');
    });

    it('should return null if no lesson is found for the given ID', async () => {
      const lessonId = 'lesson123';

      const result = await LessonService.getLessonById(lessonId);

      expect(result).toBeNull();
    });
  });

  describe('getLessonsByCourseId', () => {
    it('should return a list of lessons for the given course ID', async () => {
      const courseId = 'c10d1e4f1-223b-4cdd-9f0e-0123456789a';

      const result = await LessonService.getLessonsByCourseId(courseId);

      expect(result.length).toBe(6);
    });

    it('should return an empty array if no lessons are found', async () => {
      const courseId = 'course123';

      const result = await LessonService.getLessonsByCourseId(courseId);

      expect(result).toEqual([]);
    });
  });

  describe('markDoneLesson', () => {
    it('should toggle the done status of the student lesson', async () => {
      const studentLessonId = '0181a588-e96d-432c-8ffa-ca702c7ce00e';

      const result = await LessonService.markDoneLesson(studentLessonId);

      expect(result).toBeDefined();
      expect(result?.done).toBe(true);

      result!.done = false;
      await studentLessonRepository.save(result!);
    });

    it('should return undefined if the student lesson is not found', async () => {
      const studentLessonId = 'studentLesson123';

      const result = await LessonService.markDoneLesson(studentLessonId);

      expect(result).toBeUndefined();
    });
  });

  describe('createLesson', () => {
    it('should create and return the lesson', async () => {
      const course = await courseRepository.findOneBy({
        id: 'c10d1e4f1-223b-4cdd-9f0e-0123456789a',
      });
      const title = 'New Lesson';
      const content = 'This is a new lesson';
      const file_url = 'https://example.com/file';
      const study_time = new Date();

      const result = await LessonService.createLesson(
        course!,
        title,
        content,
        file_url,
        study_time
      );

      expect(result).toBeDefined();
      expect(result?.title).toBe(title);

      await LessonService.deleteLessonByLessonId(course!.id, result!.id);
    });
  });

  describe('updateLessonById', () => {
    it('should update and return the lesson when it exists', async () => {
      const course = await courseRepository.findOneBy({
        id: 'c10d1e4f1-223b-4cdd-9f0e-0123456789a',
      });
      const title = 'New Lesson';
      const content = 'This is a new lesson';
      const file_url = 'https://example.com/file';
      const study_time = new Date();

      const result = await LessonService.createLesson(
        course!,
        title,
        content,
        file_url,
        study_time
      );

      const newTitle = 'Updated Lesson';
      const newContent = 'This is an updated lesson';
      const updatedResult = await LessonService.updateLessonById(
        result!.id,
        [],
        newTitle,
        newContent
      );

      expect(updatedResult).toBeDefined();
      expect(updatedResult?.title).toBe(newTitle);
      expect(updatedResult?.content).toBe(newContent);

      await lessonRepository.delete(updatedResult!.id);
    });

    it('should return undefined if the lesson does not exist', async () => {
      const lessonId = '1';
      const result = await LessonService.updateLessonById(lessonId, []);
      expect(result).toBeUndefined();
    });
  });

  describe('getLessonListOfInstructor', () => {
    it('should return a list of lessons for the given instructor as primary or sub instructor', async () => {
      const instructorId = 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce';
      const instructor = await userRepository.findOneBy({ id: instructorId });

      const result = await LessonService.getLessonListOfInstructor(instructor!);

      expect(result.length).toBe(16);
    });
  });

  describe('getStudentLessonByLessonId', () => {
    it('should return a list of student lessons for the given lesson ID', async () => {
      const lessonId = 'l14d1e4f1-223b-4cdd-9f0e-0123456789a';

      const result = await LessonService.getStudentLessonByLessonId(lessonId);

      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('deleteLessonById', () => {
    it('should delete and return the lesson when it exists', async () => {
      const course = await courseRepository.findOneBy({
        id: 'c10d1e4f1-223b-4cdd-9f0e-0123456789a',
      });
      const title = 'New Lesson';
      const content = 'This is a new lesson';
      const file_url = 'https://example.com/file';
      const study_time = new Date();

      const result = await LessonService.createLesson(
        course!,
        title,
        content,
        file_url,
        study_time
      );

      await LessonService.deleteLessonByLessonId(course!.id, result!.id);

      const deletedResult = await lessonRepository.findOneBy({
        id: result!.id,
      });

      expect(deletedResult).toBeNull();
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
});
