import { PrismaClient } from '@prisma/client';
import { container } from 'tsyringe';

import IUserRepository from '../domain/user/repositories/userRepository';
import PrismaUserQueries from '../infra/prisma/queries/user';

container.registerSingleton<IUserRepository>('UserRepository', PrismaUserQueries);
container.register<PrismaClient>("PrismaClient", {
  useValue: new PrismaClient(),
});


