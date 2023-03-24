import { Router } from 'express';
import authRouter from './auth.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);

export default routes;
