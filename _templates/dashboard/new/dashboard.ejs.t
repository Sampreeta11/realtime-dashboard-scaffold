---
to: <%= projectName %>/dashboard.config.json
---
<%
const projectName = locals.projectName || "realtime-metrics-dashboard"
const refreshInterval = locals.refreshInterval || 2000
%>
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
