import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimiter from "./middleware/rateLimiter";
import errorHandler from "./middleware/errorHandler";
import { PORT, CORS_ORIGIN } from "./configs";
import { router } from "./routes";
import mongooseConnector from "./lib";

const app: Express = express();
app.use(cors());
const port = PORT || 3001;
const corsOrigin = CORS_ORIGIN || "";
mongooseConnector();

app.use(helmet());
app.use(rateLimiter);

//app.use(errorHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use("/api", router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
