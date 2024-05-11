declare global {
  declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development';

      SERVER_PORT: string;
      SERVER_HOST: string;

      TOKEN_SECRET: string;
      TOKEN_EXPIRY_TIME: string;
    }
  }
}

export {};
