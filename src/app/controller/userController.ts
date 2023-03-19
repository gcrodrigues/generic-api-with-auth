import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '../useCases/createUser.usecase';

export class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
      const { name, email } = req.body;
      const createUser = container.resolve(CreateUserUseCase);
      const user = await createUser.execute({ name, email }); 
      return res.status(200).json(user)
  }
}
