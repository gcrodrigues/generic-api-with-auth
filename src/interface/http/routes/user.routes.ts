import { Router } from 'express';
import { UserController } from '../../../app/controller/userController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post('/create', userController.createUser);
usersRouter.delete('/deactivate', userController.deactivateUser);

export default usersRouter ;
