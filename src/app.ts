import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import userRoutes from "./api/v1/routes/userRoutes";
import adminRoutes from "./api/v1/routes/adminRoutes";
import charRoutes from "./api/v1/routes/charRoutes";
import campaignRoutes from "./api/v1/routes/campaignRoutes";
import errorHandler from "./api/v1/middleware/errorHandler";
import {
    // accessLogger,
    // errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";
import setupSwagger from "./config/swagger";
import cors from "cors";


const app: Express = express();

app.use(helmet());

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
};

// app.use(accessLogger);
// app.use(errorLogger);
app.use(consoleLogger);

const corsOptions: cors.CorsOptions = {
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
};

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

// Optimized configuration for JSON APIs
const apiHelmetConfig = helmet({
    // Disable unnecessary middleware for API-only apps
    contentSecurityPolicy: false, // Not needed for JSON APIs
    crossOriginEmbedderPolicy: false,

    // Keep essential security headers
    hsts: {
        maxAge: 31536000, // 1 year
        includeSubDomains: true,
        preload: true,
    },

    // Remove server information from responses
    hidePoweredBy: true,

    // Prevent MIME type sniffing
    noSniff: true,

    // Prevent clickjacking
    frameguard: { action: "deny" },
});

app.use(apiHelmetConfig);

app.use(cors(corsOptions));
app.use("/api/v1/auth/admin", adminRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/chars", charRoutes);
app. use("/api/v1/campaigns", campaignRoutes);

setupSwagger(app);

app.use(errorHandler);

export default app;