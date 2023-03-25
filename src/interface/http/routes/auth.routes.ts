import { Router } from 'express';
import { AuthController } from '../../../domain/auth/interface/http/controllers/authController';

const authRouter = Router();

const authController = new AuthController();

authRouter.post('/', authController.auth);

export default authRouter ;
