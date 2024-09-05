import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/user.entity';
import { Course } from '../entity/course.entity';
import { CourseLevel } from '../enums/CourseLevel';
import { UserRole } from '../enums/UserRole';
import * as adminService from '../services/admin.service';
import { use } from 'passport';
import exp from 'constants';

let userRepository: Repository<User>;
let courseRepository: Repository<Course>;

beforeAll(async () => {
  await AppDataSource.initialize();
  userRepository = AppDataSource.getRepository(User);
  courseRepository = AppDataSource.getRepository(Course);
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('Admin Services', () => {
  describe('getStatistics', () => {
    it('should return statistics of courses and instructors', async () => {
      const statistics = await adminService.getStatistics();

      expect(statistics.totalCourses).toBe(16);
      expect(statistics.totalInstructors).toBe(4);
      expect(statistics.pendingInstructors).toBe(1);
    });
  });

  describe('getPendingInstructors', () => {
    it('should return list of pending instructors', async () => {
      const pendingInstructors = await adminService.getPendingInstructors();

      expect(pendingInstructors).toHaveLength(1);
      expect(pendingInstructors[0].email).toBe('phamminh@gmail.com');
      expect(pendingInstructors[0].role).toBe(UserRole.PENDING_APPROVAL);
    });
  });

  describe('approveInstructor', () => {
    it('should approve the instructor', async () => {
      const pendingInstructors = await adminService.getPendingInstructors();
      const approvedInstructor = await adminService.approveInstructor(
        pendingInstructors[0].id
      );

      expect(approvedInstructor.role).toBe(UserRole.INSTRUCTOR);

      approvedInstructor.role = UserRole.PENDING_APPROVAL;
      await userRepository.save(approvedInstructor);
    });

    it('should throw error if user not found', async () => {
      try {
        await adminService.approveInstructor('non-existing-id');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe('User not found');
      }
    });
  });

  describe('rejectInstructor', () => {
    it('should reject the instructor', async () => {
      const newUser = new User();
      newUser.username = 'abc';
      newUser.email = 'abc@gmai.com';
      newUser.hash_password = '123456';
      newUser.role = UserRole.PENDING_APPROVAL;
      await userRepository.save(newUser);
      await adminService.rejectInstructor(newUser.id);

      const rejectedInstructor = await userRepository.findOne({
        where: { id: newUser.id },
      });

      expect(rejectedInstructor).toBeNull;
    });

    it('should throw error if user not found', async () => {
      try {
        await adminService.rejectInstructor('non-existing-id');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe('User not found');
      }
    });
  });

  describe('getInstructorDetails', () => {
    it('should return instructor details', async () => {
      const instructor = await adminService.getInstructorDetails(
        'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce'
      );
      expect(instructor.email).toBe('zuanki@gmail.com');
      expect(instructor.username).toBe('hoanx');
      expect(instructor.role).toBe(UserRole.INSTRUCTOR);
    });

    it('should throw error if user not found', async () => {
      try {
        await adminService.getInstructorDetails('non-existing-id');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect((error as Error).message).toBe('User not found');
      }
    });
  });

  describe('searchInstructors', () => {
    it('should return list of instructors that match the keyword', async () => {
      const instructors = await adminService.searchInstructors('vuong');

      expect(instructors).toHaveLength(1);
      expect(instructors[0].email).toBe('phamminhv@gmail.com');
      expect(instructors[0].username).toBe('pmv');
      expect(instructors[0].role).toBe(UserRole.INSTRUCTOR);
    });
  });
});
