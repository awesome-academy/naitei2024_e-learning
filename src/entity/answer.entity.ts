import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Question } from './question.entity';
import { Option } from './option.entity';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, student => student.answers)
  @JoinColumn({ name: 'student_id' })
  student: User;

  @ManyToOne(() => Question, question => question.answers)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(() => Option, option => option.answers, { nullable: true })
  @JoinColumn({ name: 'option_id' })
  option: Option;

  @Column({ nullable: true })
  answer: string;

  constructor(partial?: Partial<Answer>) {
    Object.assign(this, partial);
  }
}
