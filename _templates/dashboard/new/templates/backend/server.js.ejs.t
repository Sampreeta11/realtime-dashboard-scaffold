---
to: <%= projectName %>/backend/server.js
---
import express from "express";
import http from "http";
import { initWebSocket } from "./websocket.js";
import { startScheduler } from "./scheduler.js";
import dashboardConfig from "../dashboard.config.json" assert { type: "json" };

const app = express();
const server = http.createServer(app);

const io = initWebSocket(server);
startScheduler(io, dashboardConfig);

server.listen(3001, () => {
  console.log("Backend running on port 3001");
});
