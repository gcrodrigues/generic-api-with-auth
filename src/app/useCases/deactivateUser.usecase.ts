import { inject, injectable } from "tsyringe";
import IUserRepository from "../../domain/user/repositories/IUserRepository";

@injectable()
export class DeactivateUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(id: string) {
    const createdUser = await this.userRepository.deactivate(id);
    return createdUser
  }
}