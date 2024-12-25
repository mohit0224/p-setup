import jwt, { JwtPayload } from "jsonwebtoken";
import { apiError } from "./httpResponse.utils";

const verifyToken = (token: string, secret: string): JwtPayload | string => {
    try {
        return jwt.verify(token, secret);
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new apiError(400, `Something went wrong, while verifying token. :: ${err.message}`);
        } else {
            throw new apiError(400, "Something went wrong, while verifying token.");
        }
    }
};

export default verifyToken;

