import isProduction from "../utils/isProduction.utils";
import os from "os";
import { apiResponse } from "../utils/httpResponse.utils";
import asyncHandler from "../utils/asyncHandler.utils";
import axios, { AxiosResponse } from "axios";

interface DummyJsonResponse {
    status: string;
}

class healthController {
    static healthCheck = asyncHandler(async (req, res) => {
        const result: AxiosResponse<DummyJsonResponse> = await axios.get("https://dummyjson.com/test");

        const statics = {
            applicationHealth: {
                uptime: `${process.uptime().toFixed(2)}s`,
                environment: isProduction ? "Production" : "Development",
                nodeVersion: process.version,
                apiStatus: result.data?.status,
                memoryUsage: {
                    total: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
                    used: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                },
            },

            systemHealth: {
                platform: process.platform,
                totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
                freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
                cpuUsage: os.loadavg(),
            },
        };

        res.status(200).json(new apiResponse(200, "Health status check-up !!", req, statics));
    });
}

export default healthController;

