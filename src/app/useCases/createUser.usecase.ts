import { inject, injectable } from "tsyringe";
import { CreateUserDto } from "../../domain/user/dtos/createUser.dto";
import IUserRepository from "../../domain/user/repositories/IUserRepository";
import { ICreateUserUseCase } from "../../domain/user/useCases/createUser.usecase";
import AppError from "../../infra/errors/AppError";

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(user: CreateUserDto) {
    const userAlreadyExists = await this.userRepository.findByEmail(user.email)

    if(userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const createdUser = await this.userRepository.create(user);
    return createdUser
  }
}