import { User } from "@prisma/client";
import { CreateUserDto } from "../dtos/createUser.dto";

export interface ICreateUserUseCase {
  execute(user: CreateUserDto): Promise<User>;
}