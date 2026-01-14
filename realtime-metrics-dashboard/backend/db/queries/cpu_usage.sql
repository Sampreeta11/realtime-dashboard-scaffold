SELECT
  date_trunc('second', timestamp) AS time,
  (
    (
      SUM(cpu_used)::numeric
      / NULLIF(SUM(cpu_total), 0)
    ) * 100
  )::numeric(5,2) AS value
FROM metrics_cpu
WHERE timestamp >= NOW() - INTERVAL '10 minutes'
GROUP BY time
ORDER BY time;
