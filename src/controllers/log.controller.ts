import LOGS from "../model/logs.model";
import asyncHandler from "../utils/asyncHandler.utils";

class logsController {
    static getAllLogs = asyncHandler(async (req, res) => {
        const { environment } = req.body;
        const logs = await LOGS.find(
            {
                "metadata.environment": environment,
            },
        )
            .limit(100)
            .exec();

        res.status(200).json({
            message: "Logs fetched successfully",
            success: true,
            data: logs,
        });
    });
}

export default logsController;

