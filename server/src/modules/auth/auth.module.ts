import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@/modules/user/user.module';
import { AuthService } from '@/modules/auth/auth.service';
import { AuthController } from '@/modules/auth/auth.controller';
import { globalConfig } from '@/config';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: globalConfig.auth.jwt.secret,
      signOptions: {
        expiresIn: globalConfig.auth.jwt.expiryTime,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
}
