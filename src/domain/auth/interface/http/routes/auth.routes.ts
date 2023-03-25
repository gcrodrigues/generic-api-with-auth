import { Router } from 'express';
import ensureAuthenticated from '../../../../user/interface/http/middlewares/ensureAuthenticated';
import { AuthController } from '../controllers/authController';

const authRouter = Router();

const authController = new AuthController();

authRouter.post('/', authController.auth);

export default authRouter ;
