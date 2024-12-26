import rateLimit from "express-rate-limit";

interface RateLimiterOptions {
    statusCode: number;
    message: string;
}

const limiter = (max: number = 5) =>
    rateLimit({
        windowMs: 10 * 1000,
        max,
        statusCode: 429,
        message: "Too many requests, please try again later.",
        headers: true,
        handler: (req, res, next, options: RateLimiterOptions) => {
            res.status(options.statusCode).json({
                message: options.message,
                status: options.statusCode,
                success: false,
            });
        },
    });

export default limiter;

