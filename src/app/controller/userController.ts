import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '../useCases/createUser.usecase';
import { DeactivateUserUseCase } from '../useCases/deactivateUser.usecase';

export class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
      const { name, email } = req.body;
      const createUser = container.resolve(CreateUserUseCase);
      const user = await createUser.execute({ name, email }); 
      return res.status(200).json(user)
  }

  async deactivateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const deactivateUser = container.resolve(DeactivateUserUseCase);
    const deactivatedUser = await deactivateUser.execute(id); 
    return res.status(200).json({id: deactivatedUser.id})
  }
}
