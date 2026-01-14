---
to: <%= projectName %>/backend/db/queries/cpu_usage.sql
---
SELECT
  date_trunc('second', timestamp) AS time,
  ROUND(
    (SUM(cpu_used) / NULLIF(SUM(cpu_total), 0)) * 100,
    2
  ) AS value
FROM metrics_cpu
WHERE timestamp >= NOW() - INTERVAL '30 seconds'
GROUP BY time
ORDER BY time;
