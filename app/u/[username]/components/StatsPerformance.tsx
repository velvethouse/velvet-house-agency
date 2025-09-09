"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const mockData = {
  hourly: [
    { time: "10h", lotus: 200 },
    { time: "11h", lotus: 450 },
    { time: "12h", lotus: 300 },
    { time: "13h", lotus: 600 },
    { time: "14h", lotus: 400 },
    { time: "15h", lotus: 800 },
    { time: "16h", lotus: 500 },
  ],
  daily: [
    { time: "Mon", lotus: 1200 },
    { time: "Tue", lotus: 1600 },
    { time: "Wed", lotus: 1800 },
    { time: "Thu", lotus: 1400 },
    { time: "Fri", lotus: 2200 },
    { time: "Sat", lotus: 2400 },
    { time: "Sun", lotus: 2000 },
  ],
};

export default function StatsPerformance() {
  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 10 }}>
        📊 Performance Analysis
      </h2>

      <div style={{ height: 240, background: "#111", borderRadius: 12, padding: 12 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData.hourly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" stroke="#D4AF37" />
            <YAxis stroke="#D4AF37" />
            <Tooltip />
            <Line type="monotone" dataKey="lotus" stroke="#FFD700" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ fontSize: 12, color: "#ccc", marginTop: 10 }}>
        🔥 Best hour: <b>15h–16h</b> • Daily avg: <b>1750 Lotus</b> • Weekly total: <b>11 900 Lotus</b>
      </div>
    </section>
  );
}
