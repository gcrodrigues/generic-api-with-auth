import { Router } from 'express';
import profileRouter from '../../../domain/user/interface/http/routes/profile.routes';
import usersRouter from '../../../domain/user/interface/http/routes/user.routes';
import authRouter from '../../../domain/auth/interface/http/routes/auth.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/profile', profileRouter);
routes.use('/auth', authRouter);

export default routes;
