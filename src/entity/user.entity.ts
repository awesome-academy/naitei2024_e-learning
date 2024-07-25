import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { Enrollment } from './enrollment.entity';
import { StudentLesson } from './student_lesson.entity';
import { Answer } from './answer.entity';
import { Grade } from './grade.entity';
import { UserRole } from '../enums/UserRole';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  hash_password: string;

  @Column()
  username: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;

  @Column()
  name: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  avatar_url: string;

  @OneToMany(() => Course, course => course.instructor)
  instructorCourses: Course[];

  @OneToMany(() => Course, course => course.subInstructor)
  subInstructorCourses: Course[];

  @OneToMany(() => Enrollment, enrollment => enrollment.student)
  enrollments: Enrollment[];

  @OneToMany(() => StudentLesson, studentLesson => studentLesson.student)
  studentLessons: StudentLesson[];

  @OneToMany(() => Answer, answer => answer.student)
  answers: Answer[];

  @OneToMany(() => Grade, grade => grade.student)
  grades: Grade[];

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}
