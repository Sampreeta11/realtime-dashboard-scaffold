---
to: <%= projectName %>/backend/scheduler.js
---
import fs from "fs";
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "metrics"
});

function loadSQL(file) {
  return fs.readFileSync(
    new URL(`./db/queries/${file}`, import.meta.url),
    "utf8"
  );
}

export function startScheduler(io, config) {
  config.metrics.forEach(metric => {
    setInterval(async () => {
      const sql = loadSQL(metric.query);
      const result = await pool.query(sql);
      io.emit(metric.id, result.rows);
    }, config.refreshIntervalMs);
  });
}
