"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const mockData = {
  hourly: [
    { hour: "08h", lotus: 100 },
    { hour: "10h", lotus: 350 },
    { hour: "12h", lotus: 220 },
    { hour: "14h", lotus: 480 },
    { hour: "16h", lotus: 160 },
    { hour: "18h", lotus: 800 },
    { hour: "20h", lotus: 1300 },
    { hour: "22h", lotus: 1100 },
  ],
  daily: [
    { day: "Mon", lotus: 2800 },
    { day: "Tue", lotus: 4100 },
    { day: "Wed", lotus: 3600 },
    { day: "Thu", lotus: 5000 },
    { day: "Fri", lotus: 6200 },
    { day: "Sat", lotus: 4300 },
    { day: "Sun", lotus: 2400 },
  ],
  weekly: [
    { week: "W31", lotus: 14800 },
    { week: "W32", lotus: 18500 },
    { week: "W33", lotus: 21200 },
    { week: "W34", lotus: 19400 },
  ],
  monthly: [
    { month: "June", lotus: 62000 },
    { month: "July", lotus: 74500 },
    { month: "August", lotus: 80200 },
    { month: "September", lotus: 19600 },
  ],
};

export default function StatsPerformance() {
  const [view, setView] = useState<"hourly" | "daily" | "weekly" | "monthly">("daily");

  const data = mockData[view];
  const best =
    view === "hourly"
      ? mockData.hourly.reduce((top, curr) => (curr.lotus > top.lotus ? curr : top))
      : null;

  return (
    <section style={{ marginTop: 24 }}>
      <h3 style={{ color: "#D4AF37", fontSize: 18, marginBottom: 8 }}>📊 Performance Stats</h3>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {["hourly", "daily", "weekly", "monthly"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v as any)}
            className={`btn3d ${
              view === v ? "btn3d--gold" : "btn3d--outline-gold"
            }`}
            style={{ minWidth: 90 }}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis
              dataKey={
                view === "hourly"
                  ? "hour"
                  : view === "daily"
                  ? "day"
                  : view === "weekly"
                  ? "week"
                  : "month"
              }
              stroke="#ccc"
            />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#222",
                border: "1px solid #D4AF37",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="lotus"
              stroke="#FFD700"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {best && (
        <div
          style={{
            marginTop: 14,
            fontSize: 14,
            color: "#ccc",
            textAlign: "center",
          }}
        >
          🔥 Best hour: <strong>{best.hour}</strong> — {best.lotus.toLocaleString()} Lotus
        </div>
      )}
    </section>
  );
    }
