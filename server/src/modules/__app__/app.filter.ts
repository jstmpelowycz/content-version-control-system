import { INestApplication } from '@nestjs/common';
import { BasicExceptionFilter } from '@/filters/basic-exception.filter';

export const applyFilters = (app: INestApplication) => {
  app.useGlobalFilters(
    new BasicExceptionFilter(),
  );
};
