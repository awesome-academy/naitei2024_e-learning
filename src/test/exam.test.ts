import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { User } from '../entity/user.entity';
import { Assignment } from '../entity/assignment.entity';
import { Grade } from '../entity/grade.entity';
import { Question } from '../entity/question.entity';
import { Option } from '../entity/option.entity';
import { Answer } from '../entity/answer.entity';
import { AssignmentStatus } from '../enums';
import * as examService from '../services/exam.service';

let userRepository: Repository<User>;
let gradeRepository: Repository<Grade>;
let questionRepository: Repository<Question>;
let examRepository: Repository<Assignment>;
let optionRepository: Repository<Option>;
let answerRepository: Repository<Answer>;

beforeAll(async () => {
  await AppDataSource.initialize();
  userRepository = AppDataSource.getRepository(User);
  gradeRepository = AppDataSource.getRepository(Grade);
  questionRepository = AppDataSource.getRepository(Question);
  examRepository = AppDataSource.getRepository(Assignment);
  optionRepository = AppDataSource.getRepository(Option);
  answerRepository = AppDataSource.getRepository(Answer);
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('Exam Services', () => {
  describe('getGradesByCourseId', () => {
    it('should return the grades for the given course id and student id', async () => {
      const result = await examService.getGradesByCourseId(
        'c1d1e4f1-223b-4cdd-9f0e-0123456789ab',
        '5877df58-ad78-4833-8b04-175e72b6e3db'
      );
      expect(result).not.toBeNull();
      expect(result).toHaveLength(2);
    });

    it('should return an empty array if no grades are found for the given course and student IDs', async () => {
      const courseId = 'course123';
      const studentId = 'student456';
      const result = await examService.getGradesByCourseId(courseId, studentId);
      expect(result).toEqual([]);
    });
  });

  describe('getBestGradeByCourseId', () => {
    it('should return the best grade for the given course and student IDs', async () => {
      const result = await examService.getBestGradeByCourseId(
        'c1d1e4f1-223b-4cdd-9f0e-0123456789ab',
        '5877df58-ad78-4833-8b04-175e72b6e3db'
      );
      expect(result).not.toBeNull();
      expect(result!.grade).toBe(4);
    });

    it('should return null if no grades are found for the given course and student IDs', async () => {
      const courseId = 'course123';
      const studentId = 'student456';

      const result = await examService.getBestGradeByCourseId(
        courseId,
        studentId
      );

      expect(result).toBeUndefined();
    });
  });

  describe('updateGradeWhenStartExam', () => {
    it('should update the existing grade when there is only one grade with status TODO', async () => {
      const exam = await examRepository.findOne({
        relations: ['course'],
        where: { id: 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab' },
      });
      const student = await userRepository.findOne({
        where: { id: '5877df58-ad78-4833-8b04-175e72b6e3db' },
      });
      const result = await examService.updateGradeWhenStartExam(
        exam!,
        student!
      );

      expect(result).not.toBeNull();
      expect(result!.status).toBe(AssignmentStatus.DOING);
      expect(result!.attempt).toBe(1);

      result!.status = AssignmentStatus.TODO;
      await gradeRepository.save(result!);
    });

    it('should create a new grade when there are multiple grades or the grade status is not TODO', async () => {
      const exam = await examRepository.findOne({
        relations: ['course'],
        where: { id: 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab' },
      });
      const student = await userRepository.findOne({
        where: { id: '5877df58-ad78-4833-8b04-175e72b6e3db' },
      });
      const result = await examService.updateGradeWhenStartExam(
        exam!,
        student!
      );

      expect(result).not.toBeNull();
      expect(result!.status).toBe(AssignmentStatus.DOING);
      expect(result!.attempt).toBe(3);

      await gradeRepository.delete(result!.id);
    });
  });

  describe('updateGradeWhenSubmitExam', () => {
    it('should update the latest grade attempt with the provided grade, max_grade, feedback, and set status to PASS if the grade is above the passing rate', async () => {
      const exam = await examRepository.findOne({
        relations: ['course'],
        where: { id: 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab' },
      });
      const student = await userRepository.findOne({
        where: { id: '5877df58-ad78-4833-8b04-175e72b6e3db' },
      });
      await examService.updateGradeWhenStartExam(exam!, student!);

      const result = await examService.updateGradeWhenSubmitExam(
        exam!,
        student!,
        5,
        5
      );

      expect(result).not.toBeNull();
      expect(result!.status).toBe(AssignmentStatus.PASS);
      expect(result!.attempt).toBe(3);
      expect(result!.grade).toBe(5);
      expect(result!.max_grade).toBe(5);

      await gradeRepository.delete(result!.id);
    });

    it('should update the latest grade attempt with the provided grade, max_grade, feedback, and set status to FAIL if the grade is below the passing rate', async () => {
      const exam = await examRepository.findOne({
        relations: ['course'],
        where: { id: 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab' },
      });
      const student = await userRepository.findOne({
        where: { id: '5877df58-ad78-4833-8b04-175e72b6e3db' },
      });
      await examService.updateGradeWhenStartExam(exam!, student!);

      const result = await examService.updateGradeWhenSubmitExam(
        exam!,
        student!,
        2,
        5
      );

      expect(result).not.toBeNull();
      expect(result!.status).toBe(AssignmentStatus.FAIL);
      expect(result!.attempt).toBeGreaterThan(2);
      expect(result!.grade).toBe(2);
      expect(result!.max_grade).toBe(5);

      await gradeRepository.delete(result!.id);
    });
  });

  describe('getExamById', () => {
    it('should return the exam when a valid examId is provided', async () => {
      const result = await examService.getExamById(
        '02b378be-5802-4778-a1e4-8c968d244ff2'
      );

      expect(result).not.toBeNull();
      expect(result!.name).toBe('Network Exam');
    });

    it('should return undefined when no exam is found with the provided examId', async () => {
      const nonExistentExamId = 'non-existent-exam-id';
      const result = await examService.getExamById(nonExistentExamId);
      expect(result).toBeUndefined();
    });
  });

  describe('getQuestionsByExamId', () => {
    it('should return the questions for the provided examId', async () => {
      const result = await examService.getQuestionsByExamId(
        'a1d1e4f1-223b-4cdd-9f0e-0123456789ab'
      );

      expect(result).not.toBeNull();
      expect(result).toHaveLength(5);
    });

    it('should return an empty array when no questions are found for the provided examId', async () => {
      const nonExistentExamId = 'non-existent-exam-id';

      const result = await examService.getQuestionsByExamId(nonExistentExamId);

      expect(result).toEqual([]);
    });
  });

  describe('getQuestionById', () => {
    it('should return the question for the provided questionId', async () => {
      const result = await examService.getQuestionById('q1');

      expect(result).not.toBeNull();
      expect(result!.content).toBe('What is the capital of France?');
    });

    it('should return undefined when no question is found with the provided questionId', async () => {
      const nonExistentQuestionId = 'non-existent-question-id';

      const result = await examService.getQuestionById(nonExistentQuestionId);

      expect(result).toBeUndefined();
    });
  });

  describe('getOptionById', () => {
    it('should return the option for the provided optionId', async () => {
      const result = await examService.getOptionById('o10');

      expect(result).not.toBeNull();
      expect(result!.content).toBe('Mars');
    });

    it('should return undefined when no option is found with the provided optionId', async () => {
      const nonExistentOptionId = 'non-existent-option-id';
      const result = await examService.getOptionById(nonExistentOptionId);
      expect(result).toBeUndefined();
    });
  });

  describe('createAnswerForQuestion', () => {
    it('should create answer for the provided question, user, and optionId', async () => {
      const question = await examService.getQuestionById('q1');
      const user = await userRepository.findOne({
        where: { id: '5877df58-ad78-4833-8b04-175e72b6e3db' },
      });
      const optionId = 'o1';

      const result = await examService.createAnswerForQuestion(
        question!,
        user!,
        optionId
      );

      expect(result).not.toBeNull();
      expect(result!.question.id).toBe(question!.id);
      expect(result!.option.id).toBe(optionId);

      await answerRepository.delete(result!.id);
    });
  });

  describe('getResultOfExam', () => {
    it('should return the result of the exam for the provided userId and examId', async () => {
      const result = await examService.getResultOfExam(
        '5877df58-ad78-4833-8b04-175e72b6e3db',
        'a1d1e4f1-223b-4cdd-9f0e-0123456789ab'
      );

      expect(result).not.toBeNull();
      expect(result!.score).toBe(4);
      expect(result!.filteredAnswers).toHaveLength(5);
    });

    it('should return filteredAnswers = [] and score = 0 when no result is found for the provided userId and examId', async () => {
      const nonExistentUserId = 'non-existent-user-id';
      const nonExistentExamId = 'non-existent-exam-id';

      const result = await examService.getResultOfExam(
        nonExistentUserId,
        nonExistentExamId
      );

      expect(result.filteredAnswers).toEqual([]);
      expect(result.score).toBe(0);
    });
  });

  describe('getAllUserGradesByCourseId', () => {
    it('should return all user grades for the provided courseId', async () => {
      const result = await examService.getAllUserGradesByCourseId(
        'c1d1e4f1-223b-4cdd-9f0e-0123456789ab'
      );

      expect(result).not.toBeNull();
      expect(result).toHaveLength(3);
    });

    it('should return an empty array when no user grades are found for the provided courseId', async () => {
      const nonExistentCourseId = 'non-existent-course-id';

      const result =
        await examService.getAllUserGradesByCourseId(nonExistentCourseId);

      expect(result).toEqual([]);
    });
  });

  describe('getGradeById', () => {
    it('should return the grade for the provided gradeId', async () => {
      const result = await examService.getGradeById(
        '361d4c27-d0f2-4d8a-a13b-361b738e597e'
      );

      expect(result).not.toBeNull();
      expect(result!.grade).toBe(4);
    });

    it('should return undefined when no grade is found with the provided gradeId', async () => {
      const nonExistentGradeId = 'non-existent-grade-id';
      const result = await examService.getGradeById(nonExistentGradeId);
      expect(result).toBeNull();
    });
  });

  describe('getResultOfExamByGradeId', () => {
    it('should return the result of the exam for the provided gradeId', async () => {
      const result = await examService.getResultOfExamByGradeId(
        'acb5f8dd-6a64-41db-9a31-574026be2ba6'
      );

      expect(result).not.toBeNull();
      expect(result!.score).toBe(5);
      expect(result!.answers).toHaveLength(5);
    });

    it('should return undefined when no result is found for the provided gradeId', async () => {
      const nonExistentGradeId = 'non-existent-grade-id';

      const result =
        await examService.getResultOfExamByGradeId(nonExistentGradeId);

      expect(result).toBeUndefined();
    });
  });

  describe('updateGradeById', () => {
    it('should update the grade with the provided gradeId and feedback', async () => {
      const gradeId = '361d4c27-d0f2-4d8a-a13b-361b738e597e';
      const feedback = 'Good job!';

      const result = await examService.updateGradeById(gradeId, feedback);

      expect(result).not.toBeNull();
      expect(result!.feedback).toBe(feedback);
    });

    it('should return undefined when no grade is found with the provided gradeId', async () => {
      const nonExistentGradeId = 'non-existent-grade-id';
      const feedback = 'Good job!';

      const result = await examService.updateGradeById(
        nonExistentGradeId,
        feedback
      );

      expect(result).toBeUndefined();
    });
  });
});
