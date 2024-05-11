import { Response } from 'express';
import { Body, Controller, HttpCode, Post, Res, HttpStatus, HttpException, UseInterceptors } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { RegisterUserDto } from '@/modules/auth/dto/register-user.dto';
import { LoginUserDto } from '@/modules/auth/dto/login-user.dto';
import { SensitiveDataInterceptor } from '@/interceptors/sensitive-data.interceptor';
import { CookieInterceptor } from '@/interceptors/cookie.interceptor';

@Controller('auth')
@UseInterceptors(
  CookieInterceptor,
  SensitiveDataInterceptor,
)
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() dto: RegisterUserDto, @Res() response: Response) {
    try {
      const user = await this.authService.register(dto);

      return { user };
    } catch (exception) {
      if (exception instanceof HttpException) {
        response
          .status(exception.getStatus())
          .json({ user: null });
      }
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: LoginUserDto, @Res() response: Response) {
    try {
      const user = await this.authService.login(dto);

      return { user };
    } catch (exception) {
      if (exception instanceof HttpException) {
        response
          .status(exception.getStatus())
          .json({ user: null });
      }
    }
  }
}
