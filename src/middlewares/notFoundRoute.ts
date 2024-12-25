import { NextFunction, Request, Response } from "express";
import { apiError } from "../utils/httpResponse.utils";

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
    throw new apiError(404, "The requested resource was not found", req);
};

export default notFoundRoute;
