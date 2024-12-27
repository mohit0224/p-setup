import isProduction from "../utils/isProduction.utils.js";

const cookieConfig = (cookieExpiry: number) => ({
    maxAge: cookieExpiry,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Strict",
    path: "/",
    signed: true,
});

export default cookieConfig;

