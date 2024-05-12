import { Body, Controller, HttpCode, HttpStatus, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { RegisterUserDto } from '@/modules/auth/dto/register-user.dto';
import { LoginUserDto } from '@/modules/auth/dto/login-user.dto';
import { SensitiveDataInterceptor } from '@/interceptors/sensitive-data.interceptor';
import { CookieInterceptor } from '@/interceptors/cookie.interceptor';

@Controller('auth')
@UseInterceptors(
  SensitiveDataInterceptor,
  CookieInterceptor,
)
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    const user = await this.authService.register(dto);

    return { user };
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.login(dto);

    return { user };
  }
}
