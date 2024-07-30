import { Router } from 'express';
import * as examController from '../controllers/exam.controller';

const examRoute: Router = Router();

examRoute.get('/', examController.getExamInfo);

examRoute.get('/:id', examController.getExamDetail);

export default examRoute;
