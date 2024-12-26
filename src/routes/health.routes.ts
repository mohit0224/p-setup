import { Router } from "express";
import healthController from "../controllers/health.controller";
import rateLimiter from "../middlewares/rateLimiter.middleware";
const healthRouter = Router();

healthRouter.get("/", rateLimiter(10), healthController.healthCheck);

export default healthRouter;

