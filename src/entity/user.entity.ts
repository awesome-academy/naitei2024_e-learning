import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { Enrollment } from './enrollment.entity';
import { StudentLesson } from './student_lesson.entity';
import { Answer } from './answer.entity';
import { Grade } from './grade.entity';
import { UserRole } from '../enums/UserRole';
import { Specialization } from '../enums/Specialization';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  googleId?: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  hash_password: string;

  @Column({
    type: 'enum',
    enum: ['local', 'google'],
    default: 'local',
  })
  authType: 'local' | 'google';

  @Column({ nullable: true })
  username: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;

  @Column()
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  about: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({
    type: 'enum',
    enum: Specialization,
    nullable: true,
  })
  specialization: Specialization;

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

  async hashPassword(
    password: string,
    authType: 'local' | 'google'
  ): Promise<string> {
    if (authType === 'google') {
      return ''; // Hoặc giá trị khác nếu cần
    }
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  // So sánh mật khẩu
  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.hash_password);
  }
}
