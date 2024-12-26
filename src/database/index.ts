import mongoose, { Connection } from "mongoose";
import envConfig from "../configs/envConfig";
import logger from "../utils/logger.utils";

const dbConnect = async (): Promise<void> => {
    try {
        const { connection }: { connection: Connection } = await mongoose.connect(envConfig.MONGODB_URI, {
            dbName: envConfig.MONGODB_DBNAME,
        });

        if (connection.readyState === mongoose.STATES.connected) {
            logger.info("Database is connected to server");
        }

        connection.on("disconnected", () => {
            logger.error("MongoDB disconnected! Attempting to reconnect...");
        });

        connection.on("reconnected", () => {
            logger.info("MongoDB reconnected successfully");
        });

        connection.on("error", (err) => {
            logger.error("MongoDB error:", err);
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error("Error while connecting to MongoDB:", err);
            throw err;
        } else {
            logger.error("Unknown error while connecting to MongoDB");
            throw new Error("Unknown error while connecting to MongoDB");
        }
    }
};

export default dbConnect;

