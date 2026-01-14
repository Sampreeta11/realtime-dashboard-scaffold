---
to: <%= projectName %>/backend/websocket.js
---
import { Server } from "socket.io";

export function initWebSocket(server) {
  return new Server(server, {
    cors: { origin: "*" }
  });
}
