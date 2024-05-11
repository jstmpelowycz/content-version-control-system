import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '@/modules/user/user.repository';
import { RegisterUserDto } from '@/modules/auth/dto/register-user.dto';
import { UserErrors } from '@/modules/user/user.constants';
import { bcryptClient } from '@/lib/bcrypt.client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {
  }

  async create(dto: RegisterUserDto): Promise<User> {
    const hashedPassword = await bcryptClient.hash(dto.password);

    return this.userRepository.create({
      ...dto,
      password: hashedPassword,
    });
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      return null;
    }

    return user;
  }

  async getById(id: number): Promise<User | never> {
    const user = await this.findById(id);

    if (!user) {
      throw new NotFoundException(UserErrors.NOT_FOUND);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return null;
    }

    return user;
  }

  async getByEmail(email: string): Promise<User | never> {
    const user = await this.findByEmail(email);

    if (!user) {
      throw new NotFoundException(UserErrors.NOT_FOUND);
    }

    return user;
  }
}
