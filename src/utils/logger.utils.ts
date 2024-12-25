import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;
import * as sourceMapSupport from "source-map-support";
import isProduction from "./isProduction.utils";

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
const logger = createLogger({
    level: "info",
    format: combine(colorize(), timestamp(), json()),
    transports: [
        new transports.Console({
            format: consoleLogFormat,
        }),
        new transports.File({ filename: isProduction ? "logs/Production.log" : "logs/Development.log" }),
    ],
});

export default logger;

