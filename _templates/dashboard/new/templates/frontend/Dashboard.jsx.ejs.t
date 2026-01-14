---
to: <%= projectName %>/frontend/src/Dashboard.jsx
---
import { useRealtimeMetric } from "./useRealtimeMetric";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const data = useRealtimeMetric("cpu_usage");

  return (
    <LineChart width={800} height={300} data={data}>
      <XAxis dataKey="time" />
      <YAxis unit="%" />
      <Tooltip />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
}
