import isProduction from "../utils/isProduction.utils";

interface CookieConfig {
    maxAge: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: "none" | "strict" | "lax";
    path: string;
    signed: boolean;
}

const cookieConfig = (cookieExpiry: number): CookieConfig => ({
    maxAge: cookieExpiry,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "strict",
    path: "/",
    signed: true,
});

export default cookieConfig;

