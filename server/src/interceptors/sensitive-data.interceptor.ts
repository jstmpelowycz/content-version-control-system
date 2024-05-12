import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, NestInterceptor, CallHandler } from '@nestjs/common';


@Injectable()
export class SensitiveDataInterceptor implements NestInterceptor {
  intercept(_: any, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(this.removeToken),
      map(this.removePassword),
    );
  }

  private removeToken(data: object): object {
    if ('user' in data && data.user instanceof Object && 'token' in data.user) {
      delete data.user.token;
    }

    return data;
  }

  private removePassword(data: object): object {
    if ('user' in data && data.user instanceof Object && 'password' in data.user) {
      delete data.user.password;
    }

    return data;
  }
}
