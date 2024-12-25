import logger from "../utils/logger.utils";

export const morganFormat = ":remote-addr :method :url :status :response-time ms";

export const morganFnc = {
    stream: {
        write: (message: unknown) => {
            if (typeof message === "string") {
                const logObject = {
                    method: message.split(" ")[1],
                    url: message.split(" ")[2],
                    status: message.split(" ")[3],
                    responseTime: message.split(" ")[4] + " " + message.split(" ")[5],
                    ip: message.split(" ")[0],
                };

                const statusCode = Number(logObject.status);
                if (statusCode > 400) {
                    logger.error(JSON.stringify(logObject));
                } else {
                    logger.info(JSON.stringify(logObject));
                }
            }
        },
    },
};

