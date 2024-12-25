import express, { Application } from "express";
import path from "path";
import morgan from "morgan";
import asyncHandler from "./utils/asyncHandler.utils";
import notFoundRoute from "./middlewares/notFoundRoute";
import { apiResponse } from "./utils/httpResponse.utils";
import { morganFnc, morganFormat } from "./configs/morgan.config";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";

const app: Application = express();

app.set("trust proxy", 1);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan(morganFormat, morganFnc));

app.get(
    "/",
    asyncHandler((req, res) => {
        res.status(200).json(new apiResponse(200, "Welcome to the API", "", req));
    })
);

app.use(notFoundRoute);
app.use(globalErrorHandler);

export default app;

