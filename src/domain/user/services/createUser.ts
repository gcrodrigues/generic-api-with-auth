import { inject, injectable } from "tsyringe";
import { CreateUserDto } from "../dtos/createUser.dto";
import AppError from "../../../infra/errors/AppError";
import IUserRepository from "../repositories/userRepository";
import IHashProvider from "../providers/hashProvider/models/IHashProvider";

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
    @inject('HashProvider') private hashProvider: IHashProvider,
  ) {}

  async execute(user: CreateUserDto) {
    const userAlreadyExists = await this.userRepository.findByEmail(user.email)

    if(userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const hashedPassword = await this.hashProvider.generateHash(user.password) 

    const createdUser = await this.userRepository.create({...user, password: hashedPassword});

    return createdUser
  }
}