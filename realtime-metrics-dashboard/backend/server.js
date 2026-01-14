import express from "express";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pkg from "pg";

import { initWebSocket } from "./websocket.js";
import { startScheduler } from "./scheduler.js";

const { Pool } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------- DB CONNECTION -------------------- */
const db = new Pool({
  host: "127.0.0.1",
  port: 5433,
  user: "postgres",
  password: "postgres",
  database: "metrics"
});

/* -------------------- LOAD DASHBOARD CONFIG -------------------- */
const dashboardConfig = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../dashboard.config.json"),
    "utf8"
  )
);

/* -------------------- EXPRESS + HTTP -------------------- */
const app = express();
const server = http.createServer(app);

/* -------------------- WEBSOCKET -------------------- */
const io = initWebSocket(server);

/* -------------------- REALTIME SCHEDULER -------------------- */
startScheduler(io, db, dashboardConfig);

/* -------------------- DEMO MODE: AUTO INSERT -------------------- */
/* This simulates live CPU metrics (Grafana-style agent) */
setInterval(async () => {
  try {
    await db.query(`
      INSERT INTO metrics_cpu (timestamp, cpu_used, cpu_total, blocked_calls)
      VALUES (NOW(), floor(random()*80)+10, 100, floor(random()*10))
    `);
  } catch (err) {
    console.error("Auto insert failed:", err.message);
  }
}, 2000);

/* -------------------- START SERVER -------------------- */
server.listen(3001, () => {
  console.log("Backend running on port 3001");
});
