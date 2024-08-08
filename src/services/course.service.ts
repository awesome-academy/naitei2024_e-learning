import { AppDataSource } from '../config/data-source';
import { Course } from '../entity/course.entity';
import { User } from '../entity/user.entity';
import { Enrollment } from '../entity/enrollment.entity';
import { UserRole } from '../enums/UserRole';
import { EnrollStatus } from '../enums/EnrollStatus';

const courseRepository = AppDataSource.getRepository(Course);
const enrollmentRepository = AppDataSource.getRepository(Enrollment);

export const getCourseList = async () => {
  return courseRepository.find({
    order: { name: 'ASC' },
  });
};

export const getUserCourseList = async (user: User) => {
  if (user.role === UserRole.INSTRUCTOR) {
    return courseRepository.find({
      where: [{ instructor: user }, { subInstructor: user }],
    });
  } else {
    const enrollments = await enrollmentRepository.find({
      where: { student: user, status: EnrollStatus.APPROVED },
    });
    return enrollments.map(enrollment => enrollment.course);
  }
};

export const getCourseById = async (id: string) => {
  return courseRepository.findOne({
    where: { id },
    relations: ['instructor', 'subInstructor'],
  });
};

export const getCoursesByInstructorId = async (
  instructorId: string
): Promise<Course[]> => {
  return await courseRepository
    .createQueryBuilder('course')
    .where('course.instructor_id = :instructorId', { instructorId })
    .getMany();
};

export const getCourseDetails = async (
  courseId: string
): Promise<Course | null> => {
  return await courseRepository.findOne({
    where: { id: courseId },
    relations: [
      'instructor',
      'subInstructor',
      'enrollments',
      'lessons',
      'assignment',
    ],
  });
};

export const getStudentCountByCourseId = async (
  courseId: string
): Promise<number> => {
  return await enrollmentRepository.count({
    where: { course: { id: courseId } },
  });
};
