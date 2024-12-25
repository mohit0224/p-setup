import { Router } from "express";
import logsController from "../controllers/log.controller";

const logRouter = Router();

logRouter.post("/", logsController.getAllLogs);

export default logRouter;

