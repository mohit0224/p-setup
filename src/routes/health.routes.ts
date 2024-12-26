import { Router } from "express";
import healthController from "../controllers/health.controller";
import limiter from "../middlewares/rateLimiter.middleware";
const healthRouter = Router();

healthRouter.get("/", limiter(10), healthController.healthCheck);

export default healthRouter;

