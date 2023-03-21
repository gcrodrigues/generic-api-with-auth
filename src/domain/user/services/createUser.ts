import { inject, injectable } from "tsyringe";
import { CreateUserDto } from "../dtos/createUser.dto";
import IUserRepository from "../repositories/IUserRepository";
import AppError from "../../../infra/errors/AppError";

@injectable()
export class CreateUserService {
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