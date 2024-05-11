import { User } from '@prisma/client';

export class UserEntity {
  static excludePassword(user: User): User {
    return {
      ...user,
      password: null,
    };
  }
}
