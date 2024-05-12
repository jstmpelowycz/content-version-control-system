import * as path from 'path';
import { AuthConfig, GlobalConfig } from '@/config/config.types';
import { config } from 'dotenv';

config({
  path: path.resolve(__dirname, '../../.env'),
});

const resolveAuthConfig = (): AuthConfig => ({
  jwt: {
    secret: process.env.TOKEN_SECRET,
    expiryTime: process.env.TOKEN_EXPIRY_TIME,
  },
});

export const globalConfig = {
  hostname: process.env.HOSTNAME,
  host: process.env.SERVER_HOST,
  clientOrigin: process.env.CLIENT_ORIGIN,
  port: parseInt(process.env.SERVER_PORT),
  auth: resolveAuthConfig(),
} as GlobalConfig;
