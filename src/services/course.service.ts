import { AppDataSource } from '../config/data-source';
import { Course } from '../entity/course.entity';

const courseRepository = AppDataSource.getRepository(Course);

export const getCourseById = async (id: string) =>
  await courseRepository.findOne({
    where: { id },
    relations: ['instructor', 'subInstructor'],
  });
