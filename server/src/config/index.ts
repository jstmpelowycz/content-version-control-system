import * as path from 'path';
import { AuthConfig, GlobalConfig } from '@/config/config.types';
import { config } from 'dotenv';

config({
  path: path.resolve(__dirname, '../../.env'),
});

const resolvePort = () => parseInt(process.env.SERVER_PORT);

const resolveHost = () => process.env.SERVER_HOST;

const resolveAuthConfig = (): AuthConfig => ({
  jwt: {
    secret: process.env.TOKEN_SECRET,
    expiryTime: process.env.TOKEN_EXPIRY_TIME,
  },
});

export const globalConfig = {
  port: resolvePort(),
  host: resolveHost(),
  auth: resolveAuthConfig(),
} as GlobalConfig;
