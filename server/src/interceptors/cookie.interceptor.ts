import { Observable } from 'rxjs';
import { Response } from 'express';
import { map } from 'rxjs/operators';
import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';

@Injectable()
export class CookieInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => this.setJwtTokenToCookie(data, response)),
    );
  }

  setJwtTokenToCookie(data: object, response: Response): object {
    if (!('user' in data && data.user instanceof Object)) {
      return data;
    }

    if ('token' in data.user && typeof data.user.token === 'string') {
      response.cookie('jwt', data.user.token, {
        sameSite: 'none',
        path: '/',
        secure: false,
        httpOnly: true,
      });
    }

    return data;
  }
}
