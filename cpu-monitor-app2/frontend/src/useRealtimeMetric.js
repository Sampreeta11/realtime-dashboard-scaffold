import { useEffect, useState } from "react";
import { socket } from "./socket";

export function useRealtimeMetric(metricId) {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on(metricId, setData);
    return () => socket.off(metricId);
  }, [metricId]);

  return data;
}
