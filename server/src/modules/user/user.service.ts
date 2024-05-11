import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { bcryptClient } from '@/lib/bcrypt.client';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@/modules/user/user.entity';
import { UserRepository } from '@/modules/user/user.repository';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { LoginUserDto } from '@/modules/user/dto/login-user.dto';
import { UserErrors } from '@/modules/user/user.constants';
import { UserWithToken } from '@/modules/user/user.types';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {
  }

  async create(dto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcryptClient.hash(dto.password);

    const user = await this.userRepository.create({
      ...dto,
      password: hashedPassword,
    });

    return UserEntity.excludePassword(user);
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      return null;
    }

    return UserEntity.excludePassword(user);
  }

  async getById(id: number): Promise<User | never> {
    const user = await this.findById(id);

    if (!user) {
      throw new NotFoundException(UserErrors.NOT_FOUND);
    }

    return UserEntity.excludePassword(user);
  }

  async getByEmail(email: string): Promise<User | never> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException(UserErrors.NOT_FOUND);
    }

    return UserEntity.excludePassword(user);
  }

  async register(dto: CreateUserDto): Promise<UserWithToken | never> {
    await this.validateUserNotExists(dto.email);

    const user = await this.create(dto);

    return this.withJwtToken(user);
  }

  async login(dto: LoginUserDto): Promise<UserWithToken | never> {
    const user = await this.getByEmail(dto.email);

    await this.validateUserPassword(user, dto.password);

    return this.withJwtToken(user);
  }

  private async validateUserNotExists(email: string): Promise<void | never> {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new BadRequestException(UserErrors.ALREADY_EXISTS);
    }
  }

  private async validateUserPassword(
    user: User,
    incomingPassword: string,
  ): Promise<void | never> {
    const isValid = await bcryptClient.compare(incomingPassword, user.password!);

    if (!isValid) {
      throw new BadRequestException(UserErrors.BAD_CREDENTIALS);
    }
  }

  private withJwtToken(user: User): UserWithToken {
    console.log('here?');

    return {
      ...UserEntity.excludePassword(user),
      token: this.jwtService.sign({
        sub: user.id,
        email: user.email,
      }),
    };
  }
}
