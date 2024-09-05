import fs from 'fs';
import path from 'path';
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { Course } from '../entity/course.entity';
import { User } from '../entity/user.entity';
import * as courseService from '../services/course.service';
import { EnrollStatus } from '../enums/EnrollStatus';

let courseRepository: Repository<Course>;
let userRepository: Repository<User>;

beforeAll(async () => {
  await AppDataSource.initialize();
  courseRepository = AppDataSource.getRepository(Course);
  userRepository = AppDataSource.getRepository(User);
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('Course Services', () => {
  describe('getCoursesWithStudentCount', () => {
    it('should return courses sorted by student count', async () => {
      const courses = await courseRepository.find();
      const coursesWithStudentCount =
        await courseService.getCoursesWithStudentCount(courses);
      expect(coursesWithStudentCount.length).toBe(16);
      expect(coursesWithStudentCount[0].studentCount).toBe(5);
      expect(coursesWithStudentCount[15].studentCount).toBe(0);
    });
  });

  describe('getCourseList', () => {
    it('should return all courses sorted by student count and name', async () => {
      const courses = await courseService.getCourseList();
      expect(courses.length).toBe(16);
      expect(courses[0].studentCount).toBe(5);
      expect(courses[0].name).toBe('Cloud Computing Essentials');
      expect(courses[1].studentCount).toBe(5);
      expect(courses[1].name).toBe('Python for Data Science');
      expect(courses[15].studentCount).toBe(0);
      expect(courses[15].name).toBe('Azure');
    });
  });

  describe('getUserCourseList', () => {
    it('should return courses of instructor sorted by student count', async () => {
      const instructor = await userRepository.findOne({
        where: { username: 'hoanx' },
      });
      const courses = await courseService.getUserCourseList(instructor!);
      expect(courses.length).toBe(7);
      expect(courses[0].studentCount).toBe(5);
      expect(courses[0].name).toBe('Cloud Computing Essentials');
      expect(courses[1].studentCount).toBe(5);
      expect(courses[1].name).toBe('Python for Data Science');
      expect(courses[6].studentCount).toBe(2);
      expect(courses[6].name).toBe('Mobile App Development');
    });

    it('should return courses of student sorted by enroll status', async () => {
      const student = await userRepository.findOne({
        where: { username: 'vuongpm-0516' },
      });

      const courses = await courseService.getUserCourseList(student!);
      expect(courses.length).toBe(14);
      expect(courses[0].enrollStatus).toBe(EnrollStatus.APPROVED);
      expect(courses[5].enrollStatus).toBe(EnrollStatus.APPROVED);
      expect(courses[6].enrollStatus).toBe(EnrollStatus.PENDING);
      expect(courses[13].enrollStatus).toBe(EnrollStatus.REJECTED);
    });

    it('should return empty array for new user', async () => {
      const user = await userRepository.save(
        new User({
          email: 'newuser@gmail.com',
          username: 'newuser',
          hash_password: 'password',
        })
      );

      const courses = await courseService.getUserCourseList(user);
      expect(courses.length).toBe(0);

      await userRepository.delete(user.id);
    });
  });

  describe('getCourseById', () => {
    it('should return course by id', async () => {
      const course = await courseService.getCourseById(
        'c10d1e4f1-223b-4cdd-9f0e-0123456789a'
      );
      expect(course!.name).toBe('Web Development Fundamentals');
      expect(course!.instructor!.username).toBe('pmv');
      expect(course!.subInstructor!.username).toBe('anhnq');
    });

    it('should return null for non-existing course', async () => {
      const course = await courseService.getCourseById('non-existing-id');
      expect(course).toBeNull();
    });
  });

  describe('getCourseDetails', () => {
    it('should return course detail by course id', async () => {
      const course = await courseService.getCourseDetails(
        'c10d1e4f1-223b-4cdd-9f0e-0123456789a'
      );
      expect(course).not.toBeNull();
      expect(course!.name).toBe('Web Development Fundamentals');
      expect(course!.instructor!.username).toBe('pmv');
      expect(course).toHaveProperty('instructor');
      expect(course).toHaveProperty('subInstructor');
      expect(course).toHaveProperty('enrollments');
      expect(course).toHaveProperty('lessons');
      expect(course).toHaveProperty('assignment');
    });

    it('should return null for non-existing course', async () => {
      const course = await courseService.getCourseById('non-existing-id');
      expect(course).toBeNull();
    });
  });

  describe('getStudentCountByCourseId', () => {
    it('should return student count of course by id', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Web Development Fundamentals' },
      });
      const studentCount = await courseService.getStudentCountByCourseId(
        course!.id
      );
      expect(studentCount).toBe(2);
    });
  });

  describe('getEnrollment', () => {
    it('should return enrollment by course and student', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Web Development Fundamentals' },
      });

      const student = await userRepository.findOne({
        where: { username: 'vuongpm-0516' },
      });
      const enrollment = await courseService.getEnrollment(course!, student);
      expect(enrollment).not.toBeNull();
      expect(enrollment!.status).toBe(EnrollStatus.APPROVED);
    });

    it('should return null for non-existing enrollment', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Web Development Fundamentals' },
      });

      const student = await userRepository.findOne({
        where: { username: 'newuser' },
      });
      const enrollment = await courseService.getEnrollment(course!, student);
      expect(enrollment).toBeNull();
    });
  });

  describe('enrollCourse', () => {
    it('should save enrollment course for student', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Web Development Fundamentals' },
      });

      const courseDetail = await courseService.getCourseDetails(course!.id);

      const student = await userRepository.findOne({
        where: { username: 'pmv21020425' },
      });
      await courseService.enrollCourse(courseDetail!, student!);

      const enrollment = await courseService.getEnrollment(course!, student);
      expect(enrollment).not.toBeNull();
      expect(enrollment!.status).toBe(EnrollStatus.PENDING);

      await courseService.deleteEnrollment(enrollment!.id);
    });
  });

  describe('approveEnrollment', () => {
    it('should update enrollment course to approved for student', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Introduction to Programming' },
      });

      const courseDetail = await courseService.getCourseDetails(course!.id);

      const student = await userRepository.findOne({
        where: { username: 'pmv21020425' },
      });
      await courseService.enrollCourse(courseDetail!, student!);

      const enrollment = await courseService.getEnrollment(
        courseDetail!,
        student
      );
      await courseService.approveEnrollment(enrollment!.id);

      const updatedEnrollment = await courseService.getEnrollment(
        courseDetail!,
        student
      );
      expect(updatedEnrollment).not.toBeNull();
      expect(updatedEnrollment!.status).toBe(EnrollStatus.APPROVED);
    });
  });

  describe('rejectEnrollment', () => {
    it('should update enrollment course to rejected for student', async () => {
      const sqlFile = fs.readFileSync(
        path.join(__dirname, '../sql/e_learning_test.sql'),
        'utf8'
      );
      const queries = sqlFile.split(';').filter(query => query.trim() !== '');

      for (const query of queries) {
        await AppDataSource.query(query.trim());
      }

      const course = await courseRepository.findOne({
        where: { name: 'Introduction to Programming' },
      });

      const courseDetail = await courseService.getCourseDetails(course!.id);

      const student = await userRepository.findOne({
        where: { username: 'pmv21020425' },
      });
      await courseService.enrollCourse(courseDetail!, student!);

      const enrollment = await courseService.getEnrollment(
        courseDetail!,
        student
      );
      await courseService.rejectEnrollment(enrollment!.id);

      const updatedEnrollment = await courseService.getEnrollment(
        courseDetail!,
        student
      );
      expect(updatedEnrollment).not.toBeNull();
      expect(updatedEnrollment!.status).toBe(EnrollStatus.REJECTED);

      await courseService.deleteEnrollment(enrollment!.id);
    });
  });

  describe('deleteEnrollment', () => {
    it('should delete enrollment', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Web Development Fundamentals' },
      });

      const student = await userRepository.findOne({
        where: { username: 'pmv21020425' },
      });

      const courseDetail = await courseService.getCourseDetails(course!.id);
      await courseService.enrollCourse(courseDetail!, student!);

      const enrollment = await courseService.getEnrollment(course!, student);
      await courseService.deleteEnrollment(enrollment!.id);

      const deletedEnrollment = await courseService.getEnrollment(
        course!,
        student
      );
      expect(deletedEnrollment).toBeNull();
    });
  });

  describe('getProgressInCourse', () => {
    it('should return progress of student in course have exam', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Introduction to Programming' },
      });

      const student = await userRepository.findOne({
        where: { username: 'vuongpm-0516' },
      });
      const progress = await courseService.getProgressInCourse(
        course!,
        student!
      );
      expect(progress).toBe(66);
    });

    it('should return progress of student in course do not have exam', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Web Development Fundamentals' },
      });

      const student = await userRepository.findOne({
        where: { username: 'vuongpm-0516' },
      });
      const progress = await courseService.getProgressInCourse(
        course!,
        student!
      );
      expect(progress).toBe(100);
    });
  });

  describe('getEnrollmentForInstructor', () => {
    it('should return enrollments for instructor', async () => {
      const instructor = await userRepository.findOne({
        where: { username: 'pmv' },
      });
      const enrollments = await courseService.getEnrollmentForInstructor(
        instructor!
      );
      expect(enrollments.length).toBe(19);
    });
  });

  describe('getEnrollmentForCourse', () => {
    it('should return enrollmet for courses', async () => {
      const course = await courseRepository.findOne({
        where: { name: 'Web Development Fundamentals' },
      });
      const enrollments = await courseService.getEnrollmentForCourse(course!);
      expect(enrollments.length).toBe(2);
    });
  });

  describe('createCourse', () => {
    it('should create course', async () => {
      const instructor = await userRepository.findOne({
        where: { username: 'pmv' },
      });

      const course = await courseService.createCourse(
        {
          name: 'New Course',
          description: 'New Course Description',
          subInstructor: '00e813f9-59f4-40aa-bd60-1825d7606314',
          lessonIds: '',
        },
        instructor!
      );

      const newCourse = await courseService.getCourseDetails(course.id);

      expect(newCourse).not.toBeNull();
      expect(newCourse!.instructor!.username).toBe('pmv');
      expect(newCourse!.subInstructor!.username).toBe('anhnq');
      expect(newCourse!.description).toBe('New Course Description');

      await courseRepository.delete(course.id);
    });
  });

  describe('updateCourse', () => {
    it('should update course', async () => {
      const instructor = await userRepository.findOne({
        where: { username: 'pmv' },
      });

      const course = await courseService.createCourse(
        {
          name: 'New Course',
          description: 'New Course Description',
          subInstructor: '00e813f9-59f4-40aa-bd60-1825d7606314',
          lessonIds: '',
        },
        instructor!
      );

      const updatedCourse = await courseService.updateCourse(course!, {
        name: 'Updated Course',
        description: 'Updated Course Description',
        subInstructor: '',
        lessonIds: '',
      });

      const courseUpdatedSubIntructor = await courseService.updateCourse(
        updatedCourse!,
        {
          name: 'Updated Course',
          description: 'Updated Course Description',
          subInstructor: '00e813f9-59f4-40aa-bd60-1825d7606314',
          lessonIds: '',
        }
      );

      expect(updatedCourse).not.toBeNull();
      expect(updatedCourse!.name).toBe('Updated Course');
      expect(updatedCourse!.description).toBe('Updated Course Description');
      expect(courseUpdatedSubIntructor!.subInstructor!.username).toBe('anhnq');

      await courseRepository.delete(course.id);
    });
  });

  describe('deleteCourse', () => {
    it('should delete course by id', async () => {
      const instructor = await userRepository.findOne({
        where: { username: 'pmv' },
      });

      const course = await courseService.createCourse(
        {
          name: 'New Course',
          description: 'New Course Description',
          subInstructor: '00e813f9-59f4-40aa-bd60-1825d7606314',
          lessonIds: '',
        },
        instructor!
      );

      await courseService.deleteCourse(course.id);

      const deletedCourse = await courseRepository.findOne({
        where: { id: course.id },
      });
      expect(deletedCourse).toBeNull();
    });
  });

  describe('findCoursesByInstructorId', () => {
    it('should return courses by instructor id', async () => {
      const instructor = await userRepository.findOne({
        where: { username: 'hoanx' },
      });

      const courses = await courseService.findCoursesByInstructorId(
        instructor!.id
      );
      expect(courses.length).toBe(5);
    });

    it('should throw error for non-existing instructor', async () => {
      try {
        await courseService.findCoursesByInstructorId('non-existing-id');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe('Instructor not found');
      }
    });
  });

  describe('deleteCoursesByInstructorId', () => {
    it('should delete course by instructor id', async () => {
      const instructor = await userRepository.findOne({
        where: { username: 'pmv' },
      });

      await courseService.deleteCoursesByInstructorId(instructor!.id);

      const courses = await courseService.findCoursesByInstructorId(
        instructor!.id
      );

      for (const course of courses) {
        expect(course.enrollments).not.toBeNull();
      }

      const sqlFile = fs.readFileSync(
        path.join(__dirname, '../sql/e_learning_test.sql'),
        'utf8'
      );
      const queries = sqlFile.split(';').filter(query => query.trim() !== '');

      for (const query of queries) {
        await AppDataSource.query(query.trim());
      }
    });
  });
});
