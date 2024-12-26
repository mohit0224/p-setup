import envConfig from "./envConfig";

const allowedOrigins = typeof envConfig.CORS_ORIGIN === "string" ? envConfig.CORS_ORIGIN : "";

const corsConfig = {
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "csrf-token"],
    optionsSuccessStatus: 204,
    maxAge: 600,
};

export default corsConfig;

