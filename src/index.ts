import "dotenv-flow/config";
import app from "./app";
import envConfig from "./configs/envConfig";
import { error, log } from "console";

const PORT: number = envConfig.PORT;

(() => {
    try {
        app.listen(PORT, () => {
            log(`Server is running...`, {
                meta: {
                    port: PORT,
                    Uri: envConfig.BACKEND_URI,
                },
            });
        });
    } catch (err) {
        error("Error occurred: ", err);
        process.exit(1);
    }
})();

