import { BaseUserDto } from '@/modules/user/dto/base-user.dto';

export interface RegisterUserDto extends BaseUserDto {
  fullName: string;
  password: string;
}
