import { NextFunction, Request, Response } from "express";
import { apiError } from "../utils/httpResponse.utils";

const globalErrorHandler = (err: apiError | Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof apiError) {
        res.status(err.status).json({
            status: err.status,
            message: err.message,
            success: err.success,
            errors: err.errors,
        });
    } else {
        res.status(500).json({
            status: 500,
            message: err.message,
            success: false,
            errors: [],
        });
    }
};

export default globalErrorHandler;

