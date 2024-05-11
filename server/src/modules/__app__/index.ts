import { NestFactory } from '@nestjs/core';
import { APP_CONFIG } from '@/modules/__app__/app.config';
import { AppModule } from '@/modules/__app__/app.module';
import { applyMiddleware } from '@/modules/__app__/app.middleware';
import { globalConfig } from '@/config';

export const init = async (): Promise<void> => {
  try {
    const app = await NestFactory.create(AppModule, APP_CONFIG);

    applyMiddleware(app);

    await app.listen(globalConfig.port, globalConfig.host);

    console.info(`Server has been launched! Exposed port is ${globalConfig.port}.`);
  } catch (error) {
    console.error(`Server is having problems, cannot be launched.`, error);
  }
};
