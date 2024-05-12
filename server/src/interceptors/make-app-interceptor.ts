import { Provider, ClassProvider } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

export const makeAppInterceptor = (useClass: ClassProvider['useClass']): Provider => {
  return {
    provide: APP_INTERCEPTOR,
    useClass,
  };
};
