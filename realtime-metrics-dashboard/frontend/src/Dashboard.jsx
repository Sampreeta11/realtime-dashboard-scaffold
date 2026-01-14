import { useRealtimeMetric } from "./useRealtimeMetric";
import LiveCpuChart from "./LiveCpuChart";

export default function Dashboard() {
  const rawData = useRealtimeMetric("cpu_usage");

  // Convert value to number (VERY IMPORTANT)
  const cpuData = rawData.map(d => ({
    ...d,
    value: Number(d.value)
  }));

  return (
    <div style={{ padding: 20 }}>
      <h1>CPU Usage (Real-Time)</h1>

      {cpuData.length === 0 ? (
        <p>Waiting for data…</p>
      ) : (
        <LiveCpuChart data={cpuData} />
      )}
    </div>
  );
}
