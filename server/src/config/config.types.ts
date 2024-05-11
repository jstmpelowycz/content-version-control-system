export interface GlobalConfig extends BaseConfig {
  auth: AuthConfig;
}

export interface BaseConfig {
  port: number;
  host: string;
}

export interface AuthConfig {
  jwt: JwtConfig;
}

export interface JwtConfig {
  secret: string;
  expiryTime: string;
}
