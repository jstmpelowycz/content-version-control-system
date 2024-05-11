import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@/modules/__prisma__/prisma.module';

@Module({
  imports: [PrismaModule, JwtModule],
  exports: [UserService],
  providers: [UserService, UserRepository],
})
export class UserModule {
}
