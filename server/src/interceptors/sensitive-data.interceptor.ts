import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';


@Injectable()
export class SensitiveDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map(data => this.removeToken(data)),
      map(data => this.removePassword(data)),
      map(data => response.send(data)),
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
