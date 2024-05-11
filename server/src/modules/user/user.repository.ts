import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/__prisma__/prisma.service';
import { RegisterUserDto } from '@/modules/auth/dto/register-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {
  }

  async create(dto: RegisterUserDto): Promise<User> {
    return this.prismaService.user.create({
      data: dto,
    });
  }

  async findById(id: number): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
