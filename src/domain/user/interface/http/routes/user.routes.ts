import { Router } from 'express';
import { UserController } from '../controllers/userController';

const usersRouter = Router();

const userController = new UserController();

usersRouter.delete('/deactivate', userController.deactivate);
usersRouter.post('/', userController.create);

export default usersRouter ;
