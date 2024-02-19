import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
export const MONGOOSE_URI = process.env.MONGOOSE_URI || "";
