---
to: <%= projectName %>/dashboard.config.json
---
{
  "realtime": true,
  "transport": "websocket",
  "refreshIntervalMs": <%= refreshInterval %>,
  "metrics": [
    {
      "id": "cpu_usage",
      "query": "cpu_usage.sql",
      "chart": "line",
      "unit": "%"
    }
  ]
}
