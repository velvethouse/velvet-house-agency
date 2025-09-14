"use client";

import React from "react";

type Streamer = {
  id: string;
  name: string;
  rank: "Butterfly" | "Golden" | "Fire";
  lotusEarned: number;
  agencyRate: number;
  status: "paid" | "pending";
};

type Props = {
  streamers: Streamer[];
};

export default function AgencyStreamerTable({ streamers }: Props) {
  const getRankEmoji = (rank: Streamer["rank"]) => {
    switch (rank) {
      case "Butterfly":
        return "🦋";
      case "Golden":
        return "💛";
      case "Fire":
        return "🔥";
      default:
        return "";
    }
  };

  const getStatusColor = (status: Streamer["status"]) =>
    status === "paid" ? "#6cc66c" : "#FFD700";

  const calculateDollar = (lotus: number, rate: number) =>
    ((lotus * rate * 0.00465).toFixed(2));

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 16 }}>
        👯 Streamers linked to your agency
      </h2>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#fff" }}>
        <thead>
          <tr style={{ background: "#3a1515" }}>
            <th style={th}>Streamer</th>
            <th style={th}>Rank</th>
            <th style={th}>Lotus Earned</th>
            <th style={th}>Agency %</th>
            <th style={th}>Commission ($)</th>
            <th style={th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {streamers.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ padding: 16, textAlign: "center", color: "#ccc" }}>
                No streamers connected yet.
              </td>
            </tr>
          ) : (
            streamers.map((s) => (
              <tr key={s.id} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={td}>{s.name}</td>
                <td style={td}>{getRankEmoji(s.rank)} {s.rank}</td>
                <td style={td}>{s.lotusEarned.toLocaleString()} ♢</td>
                <td style={td}>{s.agencyRate} %</td>
                <td style={td}>${calculateDollar(s.lotusEarned, s.agencyRate)}</td>
                <td style={{ ...td, color: getStatusColor(s.status) }}>
                  {s.status === "paid" ? "✅ Paid" : "🕓 Pending"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 8px",
  color: "#FFD700",
};

const td: React.CSSProperties = {
  padding: "8px 8px",
};
