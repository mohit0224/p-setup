import csurf from "csurf";
import cookieConfig from "../configs/cookie.config";

const csrfProtection = csurf({
    cookie: cookieConfig(3600 * 1000),
});

export default csrfProtection;

