import { Response } from 'express';
import {
  Body,
  Post,
  Res,
  Controller,
} from '@nestjs/common';
import { UserService } from '@/modules/user/user.service';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { LoginUserDto } from '@/modules/user/dto/login-user.dto';
import { setJwtTokenToCookie } from '@/utils/cookie';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('register')
  async register(@Body() dto: CreateUserDto, @Res() response: Response) {
    const user = await this.userService.register(dto);

    setJwtTokenToCookie(response, user.token);

    return response.json(user);
  }

  @Post('login')
  async login(@Body() dto: LoginUserDto, @Res() response: Response) {
    const user = await this.userService.login(dto);

    setJwtTokenToCookie(response, user.token);

    return response.json(user);
  }
}
