import { Router } from "express";
import healthController from "../controllers/health.controller";
const healthRouter = Router();

healthRouter.get("/",healthController.healthCheck);

export default healthRouter;

