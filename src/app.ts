import express, { Express } from "express";
import userRoutes from "./api/v1/routes/userRoutes";
import adminRoutes from "./api/v1/routes/adminRoutes"
import charRoutes from "./api/v1/routes/charRoutes"
import errorHandler from "./api/v1/middleware/errorHandler";
import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";

const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
};

app.use(accessLogger);
app.use(errorLogger);
app.use(consoleLogger);


app.use(express.json());

/**
 * Health check endpoint that returns server status information
 * @returns JSON response with server health metrics
 */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

app.use("/api/v1/auth/admin", adminRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/chars", charRoutes);

app.use(errorHandler);

export default app;