import * as cookieParser from 'cookie-parser';
import { INestApplication } from '@nestjs/common';
import { globalConfig } from '@/config';

export const applyMiddleware = (app: INestApplication): void => {
  app.use(cookieParser());

  app.enableCors({
    origin: globalConfig.clientOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
    credentials: true,
  });
};
