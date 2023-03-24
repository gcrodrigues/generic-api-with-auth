import { Router } from 'express';
import { AuthController } from '../../../domain/auth/controllers/authController';

const authRouter = Router();

const authController = new AuthController();

authRouter.post('/', authController.auth);

export default authRouter ;
