import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    });
  }

  async onModuleInit(): Promise<void> {
    await this.connectToDb();
  }

  async onModuleDestroy(): Promise<void> {
    await this.disconnectFromDb();
  }

  private async connectToDb(): Promise<void> {
    try {
      this.logger.log('Connecting to DB...');

      await this.$connect();

      this.logger.log('Connected to DB.');
    } catch (error) {
      this.logger.error('Something went wrong while connecting to DB\n', error);
    }
  }

  private async disconnectFromDb(): Promise<void> {
    try {
      this.logger.log('Disconnecting from DB...');

      await this.$disconnect();

      this.logger.log('Disconnected to DB.');
    } catch (error) {
      this.logger.error('Something went wrong while disconnecting from DB\n', error);
    }
  }
}
