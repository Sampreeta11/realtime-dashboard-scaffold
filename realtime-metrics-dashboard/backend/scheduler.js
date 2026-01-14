import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Load SQL safely */
function loadSQL(file) {
  return fs.readFileSync(
    path.join(__dirname, "db", "queries", file),
    "utf8"
  );
}

/* Scheduler */
export function startScheduler(io, db, config) {
  config.metrics.forEach(metric => {
    setInterval(async () => {
      try {
        const sql = loadSQL(metric.query);
        const result = await db.query(sql);

        io.emit(metric.id, result.rows);
      } catch (err) {
        console.error(
          `Scheduler error for ${metric.id}:`,
          err.message
        );
      }
    }, config.refreshIntervalMs);
  });
}
