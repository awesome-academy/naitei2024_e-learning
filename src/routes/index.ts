import { Router, Request, Response, NextFunction } from 'express';
import authRoutes from './auth.route';
import { requireRole } from '../middleware/requireRole';
import { UserRole } from '../enums/UserRole';

const router: Router = Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', requireRole(UserRole.ADMIN), (req, res) => {
  res.render('admin', { title: 'Admin Dashboard' });
});

router.get('/instructor', requireRole(UserRole.INSTRUCTOR), (req, res) => {
  res.render('instructor', { title: 'Instructor Dashboard' });
});

// router.get('/course-detail', (req: Request, res: Response, next: NextFunction) => {
//   res.render('courses/course-detail', { title: 'Course Detail' });
// });

router.use('/auth', authRoutes);

export default router;
