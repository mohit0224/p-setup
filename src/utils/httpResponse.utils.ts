import { Request } from "express";

export class apiResponse<T> {
    status: number;
    message: string;
    success: boolean;
    data?: T;
    request?: {
        ip: string;
        method: string;
        url: string;
    };

    constructor(statusCode: number, message = "Success", data?: T, req?: Request) {
        this.status = statusCode;
        this.message = message;
        this.success = statusCode < 400;
        this.data = data;
        this.request = {
            ip: req?.ip || "",
            method: req?.method || "",
            url: req?.originalUrl || "",
        };
    }
}

export class apiError extends Error {
    status: number;
    success: boolean;
    data: null;
    errors: string[];

    constructor(statusCode: number, message = "Something went wrong", errors: string[] = [], stack: string = "") {
        super(message);
        this.status = statusCode;
        this.message = message;
        this.success = false;
        this.data = null;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

