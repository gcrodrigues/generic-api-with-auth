import { Router } from 'express';
import { UserController } from '../../../domain/user/controllers/userController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/create', userController.create);
usersRouter.delete('/deactivate', userController.deactivate);

export default usersRouter ;
