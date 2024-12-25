interface EnvConfigType {
    PORT: number;
    BACKEND_URI: string;
    CORS_ORIGIN: unknown;
    MONGODB_URI: string;
    MONGODB_DBNAME: string;
    BCRYPT_SALT: number;
    FRONTEND_URI: string;
    JWT_ACCESS_KEY: string;
    REDIS_HOST: string;
    REDIS_PORT: number;
    COOKIE_SIGN: string;
}

const envConfig: EnvConfigType = {
    PORT: Number(process.env.PORT),
    BACKEND_URI: String(process.env.BACKEND_URI),
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    MONGODB_URI: String(process.env.MONGODB_URI),
    MONGODB_DBNAME: String(process.env.MONGODB_DBNAME),
    BCRYPT_SALT: Number(process.env.BCRYPT_SALT),
    FRONTEND_URI: String(process.env.FRONTEND_URI),
    JWT_ACCESS_KEY: String(process.env.REFRESH_TOKEN),
    REDIS_HOST: String(process.env.REDIS_HOST),
    REDIS_PORT: Number(process.env.REDIS_PORT),
    COOKIE_SIGN: String(process.env.COOKIE_SIGN),
};

export default envConfig;
