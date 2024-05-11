import { BaseUserDto } from '@/modules/user/dto/base-user.dto';

export interface CreateUserDto extends BaseUserDto {
  fullName: string;
  password: string;
}
