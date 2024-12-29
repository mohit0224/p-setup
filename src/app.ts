import express, { Application } from "express";
import path from "path";

// Core Middleware
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import compression from "compression";
import cookieParser from "cookie-parser";

// Custom Utilities and Configs
import asyncHandler from "./utils/asyncHandler.utils";
import { apiResponse } from "./utils/httpResponse.utils";
import { morganFnc, morganFormat } from "./configs/morgan.config";
import envConfig from "./configs/envConfig";
import helmetConfig from "./configs/helmet.config";
import corsConfig from "./configs/cors.config";
import hppConfig from "./configs/hpp.config";

// Custom Middleware
import isHttps from "./middlewares/isHttps.middleware";
import rateLimiter from "./middlewares/rateLimiter.middleware";
import filterQuery from "./middlewares/filterQuery.middleware";
import csrfProtection from "./middlewares/csrf.middleware";
import notFoundRoute from "./middlewares/notFoundRoute";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";

// Routes
import logRouter from "./routes/logs.routes";
import healthRouter from "./routes/health.routes";
import csrfRouter from "./routes/csrf.routes";

const app: Application = express();

app.set("trust proxy", 1);
app.use(filterQuery);
app.use(hpp(hppConfig));
app.use(isHttps);
app.use(cors(corsConfig));
app.use(helmet(helmetConfig));
app.use(rateLimiter(100));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan(morganFormat, morganFnc));
app.use(cookieParser(envConfig.COOKIE_SIGN));
app.use(csrfProtection);
app.use(compression());

app.get(
    "/",
    asyncHandler((req, res) => {
        res.status(200).json(new apiResponse(200, "Welcome to the API", req));
    })
);

app.use("/api/v1/logs", logRouter);
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/csrf-token", csrfRouter);

app.use(notFoundRoute);
app.use(globalErrorHandler);

export default app;

