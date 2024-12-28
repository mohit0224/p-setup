import { NextFunction, Request, Response } from "express";
import whitelist from "../constant/whiteListQuery.constant";

const filterQuery = (req: Request, res: Response, next: NextFunction) => {
    for (const key in req.query) {
        if (!whitelist.includes(key) && Array.isArray(req.query[key])) {
            req.query[key] = req.query[key][0];
        }
    }
    next();
};

export default filterQuery;

