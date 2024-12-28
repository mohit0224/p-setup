import express, { Application } from "express";
import path from "path";
import morgan from "morgan";
import asyncHandler from "./utils/asyncHandler.utils";
import notFoundRoute from "./middlewares/notFoundRoute";
import { apiResponse } from "./utils/httpResponse.utils";
import { morganFnc, morganFormat } from "./configs/morgan.config";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";
import logRouter from "./routes/logs.routes";
import healthRouter from "./routes/health.routes";
import helmet from "helmet";
import isHttps from "./middlewares/isHttps.middleware";
import helmetConfig from "./configs/helmet.config";
import cors from "cors";
import corsConfig from "./configs/cors.config";
import rateLimiter from "./middlewares/rateLimiter.middleware";
import cookieParser from "cookie-parser";
import compression from "compression";
import envConfig from "./configs/envConfig";
import hpp from "hpp";
import filterQuery from "./middlewares/filterQuery.middleware";
import hppConfig from "./configs/hpp.config";

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
app.use(compression());

app.get(
    "/",
    asyncHandler((req, res) => {
        res.status(200).json(new apiResponse(200, "Welcome to the API", "", req));
    })
);

app.use("/api/v1/logs", logRouter);
app.use("/api/v1/health", healthRouter);

app.use(notFoundRoute);
app.use(globalErrorHandler);

export default app;

