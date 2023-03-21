import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '../useCases/createUser.usecase';
import { DeactivateUserUseCase } from '../useCases/deactivateUser.usecase';

export class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const createUser = container.resolve(CreateUserUseCase);
    try {
      const user = await createUser.execute({ name, email, password }); 
      return res.status(200).json(user)
    } catch (e) {
      return res.status(400).json(e)
    }
  }

  async deactivateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const deactivateUser = container.resolve(DeactivateUserUseCase);
    try {
      const deactivatedUser = await deactivateUser.execute(id); 
      return res.status(200).json({id: deactivatedUser.id})
    } catch (e) {
      return res.status(400).json(e)
    }
  }
}
