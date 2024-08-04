import { AppDataSource } from '../config/data-source';
import { Lesson } from '../entity/lesson.entity';

const lessonRepository = AppDataSource.getRepository(Lesson);

export const getLessonList = async (userId: string, courseId: string) => {
  const lessons = await lessonRepository.find({
    relations: ['studentLessons.student', 'courses'],
  });
  const filteredLessons = lessons.filter(
    lesson =>
      lesson.courses.some(course => course.id === courseId) &&
      lesson.studentLessons.some(
        studentLesson => studentLesson.student.id === userId
      )
  );
  const lessonsWithDoneStatus = filteredLessons.map(lesson => {
    const studentLesson = lesson.studentLessons.find(
      sl => sl.student.id === userId
    );
    return {
      ...lesson,
      done: studentLesson ? studentLesson.done : null,
    };
  });
  return lessonsWithDoneStatus;
};

export const getLessonById = async (id: string) =>
  await lessonRepository.findOne({ where: { id } });
