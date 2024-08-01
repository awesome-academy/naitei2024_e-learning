import express, { Request, Response, NextFunction } from 'express';
import authRoutes from './auth.route';
import lessonRouter from './lesson.route';
import examRoute from './exam.route';
import userRoute from './user.route';
const router = express.Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});


router.get('/course-detail', (req: Request, res: Response, next: NextFunction) => {
  res.render('courses/course-detail');
});

router.use('/auth', authRoutes);
router.use('/courses/:id/lessons', lessonRouter);
router.use('/courses/:id/exam', examRoute);
router.use('/users', userRoute);

export default router;

