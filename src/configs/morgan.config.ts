import logger from "../utils/logger.utils";

export const morganFormat = ":method :url :status :response-time ms";

export const morganFnc = {
    stream: {
        write: (message: unknown) => {
            if (typeof message === "string") {
                const logObject = {
                    method: message.split(" ")[0],
                    url: message.split(" ")[1],
                    status: message.split(" ")[2],
                    responseTime: message.split(" ")[3],
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

