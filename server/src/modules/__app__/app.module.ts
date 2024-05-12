import { Module } from '@nestjs/common';
import { PrismaModule } from '@/modules/__prisma__/prisma.module';
import { UserModule } from '@/modules/user/user.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { TransformResponseInterceptor } from '@/interceptors/transform-response.interceptor.service';
import { makeAppInterceptor } from '@/interceptors/make-app-interceptor';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
  ],
  providers: [
    makeAppInterceptor(TransformResponseInterceptor)
  ]
})
export class AppModule {
}
