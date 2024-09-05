import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/user.entity';
import { Course } from '../entity/course.entity';
import * as searchService from '../services/search.service';

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

describe('Search Services', () => {
  describe('searchCourses', () => {
    it('should return courses that match the keyword', async () => {
      const result = await searchService.searchCourses('beginner');

      expect(result.length).toBe(5);
    });
  });

  describe('searchInstructors', () => {
    it('should return instructors that match the keyword', async () => {
      const result = await searchService.searchInstructors('Xuan Hoa');

      expect(result.length).toBe(2);
    });
  });
});
