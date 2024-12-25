import { model, Schema } from "mongoose";

const logSchema = new Schema(
    {
        timestamp: { type: Date, required: true },
        level: { type: String, required: true },
        message: { type: String, required: true },
        metadata: {
            timestamp: { type: Date, required: true },
            environment: { type: String, required: true },
        },
    },
    { strict: false }
);

const LOGS = model("LOGS", logSchema);

export default LOGS;

