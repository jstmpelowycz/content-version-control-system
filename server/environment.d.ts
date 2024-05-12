declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development';

      HOSTNAME: string;

      SERVER_PORT: string;
      SERVER_HOST: string;

      CLIENT_ORIGIN: string;

      TOKEN_SECRET: string;
      TOKEN_EXPIRY_TIME: string;
    }
  }
}

export {};
