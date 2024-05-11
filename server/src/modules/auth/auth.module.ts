import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { globalConfig } from '@/config';


@Module({
  imports: [
    JwtModule.register({
      secret: globalConfig.auth.jwt.secret,
      signOptions: {
        expiresIn: globalConfig.auth.jwt.expiryTime,
      },
    }),
  ],
})
export class AuthModule {
}
