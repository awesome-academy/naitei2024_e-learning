import { AppDataSource } from '../config/data-source';
import { Lesson } from '../entity/lesson.entity';

const lessonRepository = AppDataSource.getRepository(Lesson);
export const getLessonList = async (userId: string, courseId: string) => {
  const lessons = await lessonRepository.find({
    relations: ['studentLessons', 'courses'],
  });

  const filteredLessons = lessons.filter(
    lesson =>
      lesson.courses.some(course => course.id === courseId) &&
      lesson.studentLessons.some(studentLesson => studentLesson.id === userId)
  );
  const lessonsWithDoneStatus = filteredLessons.map(lesson => {
    const studentLesson = lesson.studentLessons.find(sl => sl.id === userId);
    return {
      ...lesson,
      done: studentLesson ? studentLesson.done : null,
    };
  });
  return lessonsWithDoneStatus;
};

export const getLessonById = async (id: string) =>
  await lessonRepository.findOne({ where: { id } });
