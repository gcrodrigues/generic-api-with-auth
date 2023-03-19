import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { CreateUserDto } from "../../domain/user/dtos/createUser.dto";
import IUserRepository from "../../domain/user/repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(user: CreateUserDto): Promise<User> {
    const createdUser = await this.userRepository.create(user);
    return createdUser
  }
}