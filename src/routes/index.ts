import { Router } from 'express';
import homeRouter from './home.routes';
import authRouter from './auth.routes';
import userRouter from './user.routes';
import courseRouter from './course.routes';
import lessonRouter from './lesson.routes';
import examRouter from './exam.routes';
import questionRouter from './question.routes';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/courses/:courseId/lessons', lessonRouter);
router.use('/courses/:courseId/exam', examRouter);
router.use('/courses', courseRouter);
router.use('/lessons', lessonRouter);
router.use('/exams', examRouter);
router.use('/questions', questionRouter);
router.use('/', homeRouter);

export default router;