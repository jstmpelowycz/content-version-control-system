import { BaseUserDto } from '@/modules/user/dto/base-user.dto';

export interface LoginUserDto extends BaseUserDto {
  password: string;
}
