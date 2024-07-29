import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const userRoute: Router = Router();

userRoute.get('/create', userController.createUser);

userRoute.get('/:id/delete', userController.getDeleteUser);

userRoute.get('/:id/update', userController.getUpdateUser);

userRoute.get('/', userController.getUserList);

userRoute.get('/:id', userController.getUserById);

export default userRoute;
