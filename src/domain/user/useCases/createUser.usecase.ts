import { User } from "@prisma/client";
import { CreateUserDto } from "../dtos/createUser.dto";

export interface RegisterUserUseCase {
  execute(user: CreateUserDto): Promise<User>;
}