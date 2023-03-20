import { User } from "@prisma/client";
import { CreateUserDto } from "../dtos/createUser.dto";

export default interface IUserRepository {
  create(user: CreateUserDto): Promise<User>;
  deactivate(id: string): Promise<User>
}