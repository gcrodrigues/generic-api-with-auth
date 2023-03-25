import { Router } from 'express';
import { UserController } from '../../../domain/user/controllers/userController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.delete('/deactivate', userController.deactivate);
usersRouter.post('/', userController.create);
usersRouter.put('/', userController.update);

export default usersRouter ;
