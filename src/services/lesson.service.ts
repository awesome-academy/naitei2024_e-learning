import { StudentLesson } from '../entity/student_lesson.entity';
import { AppDataSource } from '../config/data-source';
import { Lesson } from '../entity/lesson.entity';

const lessonRepository = AppDataSource.getRepository(Lesson);
const studentLessonRepository = AppDataSource.getRepository(StudentLesson);

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

export const markDoneLesson = async (id: string) => {
  const studentLesson = await studentLessonRepository.findOne({
    where: { id },
    relations: ['lesson'],
  });
  if (!studentLesson) {
    return;
  }
  studentLesson.done = true;
  await studentLessonRepository.save(studentLesson);
  return studentLesson;
};
