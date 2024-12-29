import { Router } from "express";
import { setCSRFToken } from "../controllers/csrf.controller";
const csrfRouter = Router();

csrfRouter.get("/", setCSRFToken);

export default csrfRouter;

