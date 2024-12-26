import { Router } from "express";
import healthController from "../controllers/health.controller";
import limiter from "../middlewares/rateLimiter.middleware";
const healthRouter = Router();

healthRouter.get("/", limiter(), healthController.healthCheck);

export default healthRouter;

