import { Router } from 'express';
import { UserController } from '../../../domain/user/controllers/userController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/create', userController.createUser);
usersRouter.delete('/deactivate', userController.deactivateUser);

export default usersRouter ;
