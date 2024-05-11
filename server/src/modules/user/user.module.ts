import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { PrismaModule } from '@/modules/__prisma__/prisma.module';

@Module({
  controllers: [UserController],
  imports: [PrismaModule],
  providers: [UserService, UserRepository, JwtService],
})
export class UserModule {
}
