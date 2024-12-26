import "dotenv-flow/config";
import app from "./app";
import envConfig from "./configs/envConfig";
import logger from "./utils/logger.utils";
import dbConnect from "./database";

const PORT: number = envConfig.PORT;

(async () => {
    try {
        await dbConnect();
        app.listen(PORT, () => logger.info(`Server is running on ${envConfig.BACKEND_URI} `));
    } catch (err) {
        logger.error("Error occurred: ", err);
        // process.exit(1);
    }
})().catch((err) => {
    logger.error("Unhandled error in async function: ", err);
    process.exit(1);
});

