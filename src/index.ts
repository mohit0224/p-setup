import "dotenv-flow/config";
import app from "./app";
import envConfig from "./configs/envConfig";
import logger from "./utils/logger.utils";

const PORT: number = envConfig.PORT;

(() => {
    try {
        app.listen(PORT, () => logger.info(`Server is running on ${envConfig.BACKEND_URI} `));
    } catch (err) {
        logger.error("Error occurred: ", err);
        process.exit(1);
    }
})();

