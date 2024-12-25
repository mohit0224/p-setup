import asyncHandler from "../utils/asyncHandler.utils";
import isProduction from "../utils/isProduction.utils";

const isHttps = asyncHandler((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https" && isProduction) {
        return res.redirect(`https://${req.hostname}${req.url}`);
    }
    next();
});

export default isHttps;

