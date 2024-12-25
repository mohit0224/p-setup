import express, { Application, Response } from "express";
import path from "path";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware";

const app: Application = express();

app.set("trust proxy", 1);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_, res: Response) => {
    const check = false;

    res.send("Hello, World!");
});

app.use(globalErrorHandler);

export default app;

