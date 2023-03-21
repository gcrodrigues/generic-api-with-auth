import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '../services/createUser';
import { DeactivateUserService } from '../services/deactivateUser';

export class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute({ name, email, password }); 
    
    // @ts-expect-error deleting user password
    delete user.password;
    return res.status(200).json(user)
  }

  async deactivateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const deactivateUser = container.resolve(DeactivateUserService);
    const deactivatedUser = await deactivateUser.execute(id); 
    return res.status(200).json({id: deactivatedUser.id})
  }
}
