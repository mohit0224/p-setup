import "winston-mongodb";
import { createLogger, format, transports } from "winston";
const { combine, timestamp, json } = format;
import * as sourceMapSupport from "source-map-support";
import isProduction from "./isProduction.utils";
import envConfig from "../configs/envConfig";

sourceMapSupport.install();

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => {
        const msg = typeof message === "string" ? message : JSON.stringify(message);
        const time = typeof timestamp === "string" ? timestamp : JSON.stringify(timestamp);
        return `${time} ${level}: ${msg}`;
    })
);

// Create a Winston logger

const transportsArray: (transports.ConsoleTransportInstance | transports.FileTransportInstance | any)[] = [
    new transports.Console({
        format: consoleLogFormat,
    }),
    new transports.File({ filename: isProduction ? "logs/Production.log" : "logs/Development.log" }),
];

if (isProduction) {
    transportsArray.push(
        new transports.MongoDB({
            db: `${envConfig.MONGODB_URI}/${envConfig.MONGODB_DBNAME}`,
            collection: "logs",
            level: "info",
            format: combine(timestamp(), json()),
        })
    );
}

const logger = createLogger({
    level: "info",
    format: combine(
        timestamp(),
        json(),
        format((info) => {
            info.environment = isProduction ? "Production" : "Development";
            return info;
        })()
    ),
    transports: transportsArray,
});

export default logger;

