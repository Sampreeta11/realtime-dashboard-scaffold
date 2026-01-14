import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function LiveCpuChart({ data }) {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis unit="%" domain={[0, 100]} />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#2563eb"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
}
