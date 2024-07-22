import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Lesson } from './lesson.entity';

@Entity('student_lesson')
export class StudentLesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, student => student.studentLessons)
  @JoinColumn({ name: 'student_id' })
  student: User;

  @ManyToOne(() => Lesson, lesson => lesson.studentLessons)
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;

  @Column({ default: false })
  done: boolean;

  constructor(partial?: Partial<StudentLesson>) {
    Object.assign(this, partial);
  }
}
