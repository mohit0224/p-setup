import express, { Application } from "express";
import path from "path";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";
import asyncHandler from "./utils/asyncHandler.utils";
import { apiResponse } from "./utils/httpResponse.utils";

const app: Application = express();

app.set("trust proxy", 1);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get(
    "/",
    asyncHandler((req, res) => {
        res.status(200).json(new apiResponse(200, "Welcome to the API", "", req));
    })
);

app.use(globalErrorHandler);

export default app;

