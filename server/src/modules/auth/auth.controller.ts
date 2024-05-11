import { Response } from 'express';
import { Body, Controller, HttpCode, Post, Res, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { RegisterUserDto } from '@/modules/auth/dto/register-user.dto';
import { LoginUserDto } from '@/modules/auth/dto/login-user.dto';
import { setJwtTokenToCookie } from '@/utils/cookie';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() dto: RegisterUserDto, @Res() response: Response) {
    try {
      const user = await this.authService.register(dto);

      setJwtTokenToCookie(response, user.token);

      return response.json({ user });
    } catch (exception) {
      if (exception instanceof HttpException) {
        return response
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

      setJwtTokenToCookie(response, user.token);

      return response.json({ user });
    } catch (exception) {
      if (exception instanceof HttpException) {
        return response
          .status(exception.getStatus())
          .json({ user: null });
      }
    }
  }
}
