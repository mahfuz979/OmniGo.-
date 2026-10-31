import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

export function createApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: (process.env.CORS_ORIGINS ?? "").split(",").filter(Boolean) }));
  app.use(express.json({ limit: "100kb" }));
  app.use(rateLimit({ windowMs: 60_000, limit: 120 }));

  app.get("/v1/health", (_req, res) => {
    res.json({ status: "ok", service: "omnigo-api", mode: process.env.APP_MODE ?? "demo" });
  });

  app.use((_req, res) =>
    res.status(404).json({ error: { code: "not_found", message: "Route not found" } }),
  );
  return app;
}
