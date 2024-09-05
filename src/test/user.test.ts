import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/user.entity';
import { UserRole } from '../enums/UserRole';
import { Specialization } from '../enums/Specialization';
import { InstructorWithStudentCount } from '../helpers/user.helper';
import * as userService from '../services/user.service';

let userRepository: Repository<User>;

beforeAll(async () => {
  await AppDataSource.initialize();
  userRepository = AppDataSource.getRepository(User);
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('User Services', () => {
  describe('sortInstructorByMajor', () => {
    it('should sort instructors by specialization and student count', () => {
      const userSession = new User({
        specialization: Specialization.SOFTWARE_ENGINEERING,
      });
      const instructors = [
        {
          id: '1',
          specialization: Specialization.NETWORKING,
          studentCount: 10,
        },
        {
          id: '2',
          specialization: Specialization.CYBER_SECURITY,
          studentCount: 15,
        },
        {
          id: '3',
          specialization: Specialization.SOFTWARE_ENGINEERING,
          studentCount: 5,
        },
        {
          id: '4',
          specialization: Specialization.NETWORKING,
          studentCount: 7,
        },
        {
          id: '5',
          specialization: Specialization.SOFTWARE_ENGINEERING,
          studentCount: 9,
        },
      ];

      const result = userService.sortInstructorByMajor(
        instructors as InstructorWithStudentCount[],
        userSession
      );

      expect(result[0].id).toBe('5');
      expect(result[0].studentCount).toBe(9);
      expect(result[1].id).toBe('3');
      expect(result[1].studentCount).toBe(5);
      expect(result[2].id).toBe('2');
      expect(result[2].studentCount).toBe(15);
      expect(result[3].id).toBe('1');
      expect(result[3].studentCount).toBe(10);
      expect(result[4].id).toBe('4');
      expect(result[4].studentCount).toBe(7);
    });
  });

  describe('getInstructorList', () => {
    it('should return sorted list of instructors with course and student counts', async () => {
      const result = await userService.getInstructorList();

      expect(result).toHaveLength(4);
      expect(result[0].numberOfCourse).toBe(7);
      expect(result[0].studentCount).toBe(23);
    });
  });

  describe('getSubInstructorList', () => {
    it('should return sub-instructors with the same specialization', async () => {
      const instructor = await userService.getUserById(
        '00e813f9-59f4-40aa-bd60-1825d7606314'
      );
      const result = await userService.getSubInstructorList(instructor!);

      for (const subInstructor of result) {
        expect(subInstructor.role).toBe(UserRole.INSTRUCTOR);
        expect(subInstructor.id).not.toBe(instructor!.id);
        expect(subInstructor.specialization).toBe(instructor!.specialization);
      }
    });
  });

  describe('getStudentList', () => {
    it('should return list of students with enrollments', async () => {
      const result = await userService.getStudentList();

      expect(result).toHaveLength(7);
      expect(result[0].numberOfCourse).toBe(14);
      expect(result[6].numberOfCourse).toBe(1);
    });
  });

  describe('getUserById', () => {
    it('should return user by id', async () => {
      const user = await userService.getUserById(
        '00e813f9-59f4-40aa-bd60-1825d7606314'
      );

      expect(user).not.toBeNull();
      expect(user?.email).toBe('nguyen.quang.anh@sun-asterisk.com');
      expect(user?.username).toBe('anhnq');
      expect(user?.role).toBe(UserRole.INSTRUCTOR);
    });

    it('should return null for non-existent user id', async () => {
      const user = await userService.getUserById('non-existent-id');
      expect(user).toBeNull();
    });
  });

  describe('updateUser', () => {
    it('should update user successfully', async () => {
      const user = await userRepository.save(
        new User({
          email: 'newuser@gmail.com',
          username: 'newuser',
          hash_password: 'password',
          role: UserRole.STUDENT,
        })
      );

      const updatedUser = await userService.updateUser(user.id, {
        username: 'updateduser',
      });

      expect(updatedUser).not.toBeNull();
      expect(updatedUser!.username).toBe('updateduser');

      await userRepository.delete(user.id);
    });

    it('should return null if user not found', async () => {
      const result = await userService.updateUser('non-existent-id', {
        username: 'updateduser',
      });

      expect(result).toBeNull();
    });
  });

  describe('findUserByEmail', () => {
    it('should find user by email', async () => {
      const user = await userRepository.save(
        new User({
          email: 'newuser@gmail.com',
          username: 'newuser',
          hash_password: 'password',
          role: UserRole.STUDENT,
        })
      );

      const foundUser = await userService.findUserByEmail(user.email);

      expect(foundUser).not.toBeNull();
      expect(foundUser!.id).toBe(user.id);

      await userRepository.delete(user.id);
    });

    it('should return null if user not found', async () => {
      const result = await userService.findUserByEmail(
        'nonexistent@example.com'
      );

      expect(result).toBeNull();
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const newUser = await userService.createUser({
        email: 'newuser@gmail.com',
        username: 'newuser',
        hash_password: 'password',
        role: UserRole.STUDENT,
      });

      expect(newUser).not.toBeNull();
      expect(newUser.email).toBe('newuser@gmail.com');
      expect(newUser.username).toBe('newuser');
      expect(newUser.role).toBe(UserRole.STUDENT);
      expect(newUser.hash_password).not.toBe('password');

      await userRepository.delete(newUser.id);
    });
  });

  describe('findUserById', () => {
    it('should find user by id', async () => {
      const user = await userRepository.save(
        new User({
          email: 'newuser@gmail.com',
          username: 'newuser',
          hash_password: 'password',
          role: UserRole.STUDENT,
        })
      );

      const foundUser = await userService.findUserById(user.id);

      expect(foundUser).not.toBeNull();
      expect(foundUser!.id).toBe(user.id);

      await userRepository.delete(user.id);
    });

    it('should return null if user not found', async () => {
      const result = await userService.findUserById('non-existent-id');

      expect(result).toBeNull();
    });
  });

  describe('deleteById', () => {
    it('should delete user by id', async () => {
      const user = await userRepository.save(
        new User({
          email: 'newuser@gmail.com',
          username: 'newuser',
          hash_password: 'password',
          role: UserRole.STUDENT,
        })
      );

      await userService.deleteById(user.id);

      const deletedUser = await userService.findUserById(user.id);
      expect(deletedUser).toBeNull();
    });
  });
});
