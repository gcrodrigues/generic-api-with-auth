import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { CreateUserDto } from '../../../../domain/user/dtos/createUser.dto';
import IUserRepository from '../../../../domain/user/repositories/IUserRepository';

@injectable()
export default class PrismaUserQueries implements IUserRepository {
  
  constructor(
    @inject("PrismaClient") private prisma: PrismaClient
  ) {}

  async create(user: CreateUserDto) {
    const createdUser = await this.prisma.user.create({
      data: user
    })

    return createdUser
  }

  async deactivate(id: string) {
    const deleteUser = await this.prisma.user.delete({ where: { id: id} })
    return deleteUser
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email: email }})
    return user
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id: id }})
    return user
  }
}