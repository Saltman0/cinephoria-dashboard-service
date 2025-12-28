import cors from "cors";
import express, { Express } from "express";
import pino from "pino";
import dashboardRoutes from "./routes/dashboard.routes.ts";
import { subscribeToMessages } from "./rabbitmq.ts";

export const port: number = parseInt(process.env.PORT as string) || 3006;

export const app: Express = express();

export const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true
        }
    }
});

app.use(cors());
app.use(express.json());
app.use(dashboardRoutes);

await subscribeToMessages("bookingHistory");