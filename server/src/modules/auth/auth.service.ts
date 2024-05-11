import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '@/modules/user/user.service';
import { RegisterUserDto } from '@/modules/auth/dto/register-user.dto';
import { LoginUserDto } from '@/modules/auth/dto/login-user.dto';
import { AuthUser } from '@/modules/user/user.types';
import { UserErrors } from '@/modules/user/user.constants';
import { JwtService } from '@nestjs/jwt';
import { bcryptClient } from '@/lib/bcrypt.client';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  async register(dto: RegisterUserDto): Promise<AuthUser | never> {
    await this.validateUserNotExists(dto.email);

    const user = await this.userService.create(dto);

    return this.withJwtToken(user);
  }

  async login(dto: LoginUserDto): Promise<AuthUser | never> {
    const user = await this.userService.getByEmail(dto.email);

    await this.validateUserPassword(user, dto.password);

    return this.withJwtToken(user);
  }

  private async validateUserNotExists(email: string): Promise<void | never> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      throw new BadRequestException(UserErrors.ALREADY_EXISTS);
    }
  }

  private async validateUserPassword(user: User, incomingPassword: string): Promise<void | never> {
    const isValid = await bcryptClient.compare(incomingPassword, user.password!);

    if (!isValid) {
      throw new BadRequestException(UserErrors.BAD_CREDENTIALS);
    }
  }

  private withJwtToken(user: User): AuthUser {
    return {
      ...user,
      token: this.jwtService.sign({
        sub: user.id,
        email: user.email,
      }),
    };
  }
}
