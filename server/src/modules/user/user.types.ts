import { User } from '@prisma/client';

export interface UserWithToken extends Omit<User, 'password'> {
  token: string;
}
