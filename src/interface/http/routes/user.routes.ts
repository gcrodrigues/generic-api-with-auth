import { Router } from 'express';
import { UserController } from '../../../app/controller/userController';

const router = Router();

const userController = new UserController();

router.post('/create', userController.createUser);

export { router };
