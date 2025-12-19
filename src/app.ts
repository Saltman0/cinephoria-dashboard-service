import cors from "cors";
import express, { Express } from "express";
import dashboardRoutes from "./routes/dashboard.routes.ts";
import { subscribeToMessages } from "./rabbitmq";

export const port: number = parseInt(process.env.PORT as string) || 3006;

export const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(dashboardRoutes);
await subscribeToMessages("bookingHistory");