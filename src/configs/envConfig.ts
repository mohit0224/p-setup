import DotenvFlow from "dotenv-flow";
DotenvFlow.config();

const envConfig = {
    PORT: Number(process.env.PORT),
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    MONGODB_URI: String(process.env.MONGODB_URI),
    MONGODB_DBNAME: String(process.env.MONGODB_DBNAME),
    BCRYPT_SALT: Number(process.env.BCRYPT_SALT),
    FRONTEND_URI: String(process.env.FRONTEND_URI),
    ACCESS_TOKEN: String(process.env.ACCESS_TOKEN),
    REFRESH_TOKEN: String(process.env.REFRESH_TOKEN),
    REDIS_HOST: String(process.env.REDIS_HOST),
    REDIS_PORT: Number(process.env.REDIS_PORT),
    COOKIE_SIGN: String(process.env.COOKIE_SIGN),
};

export default envConfig;

