// 📄 /app/admin/page.tsx

"use client";

import { useState } from "react";

export default function AdminPage() {
  // 🔢 Simulé : revenus générés (en Lotus) et reversés
  const totalLotusBought = 12_500_000;
  const totalLotusPaidToCreators = 8_750_000;
  const netProfit = totalLotusBought - totalLotusPaidToCreators;

  // 👩‍🎤 Streameuses en moral critique
  const lowMoralStreamers = [
    { id: 1, name: "LunaFire", level: "critical" },
    { id: 2, name: "RedVelvet", level: "warning" },
    { id: 3, name: "AngelKiss", level: "critical" },
  ];

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 28, color: "#D4AF37", marginBottom: 16 }}>
        👑 Velvet House Admin Panel
      </h1>

      {/* 👤 Identité admin */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ color: "#f5f5f5", marginBottom: 8 }}>🧾 Your Admin Identity</h2>
        <div
          style={{
            background: "#2e0d0d",
            border: "1px solid rgba(212,175,55,0.2)",
            padding: 16,
            borderRadius: 12,
            color: "#f5f5f5",
          }}
        >
          <strong>Name:</strong> Velvet King<br />
          <strong>Badge:</strong> 👑 Appears automatically in live & messages
        </div>
      </section>

      {/* 💰 Revenus nets */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ color: "#f5f5f5", marginBottom: 8 }}>💰 Velvet House Earnings</h2>
        <div
          style={{
            background: "#2e0d0d",
            border: "1px solid rgba(212,175,55,0.2)",
            padding: 16,
            borderRadius: 12,
            color: "#f5f5f5",
          }}
        >
          <p><strong>Total Lotus bought:</strong> {totalLotusBought.toLocaleString()} ♢</p>
          <p><strong>Total paid to creators:</strong> {totalLotusPaidToCreators.toLocaleString()} ♢</p>
          <p style={{ marginTop: 12, color: "#D4AF37", fontSize: 18 }}>
            <strong>Net profit:</strong> {netProfit.toLocaleString()} ♢
          </p>
        </div>
      </section>

      {/* 🧠 Moral des streameuses */}
      <section>
        <h2 style={{ color: "#f5f5f5", marginBottom: 8 }}>🧠 Streamer Mental Health Check</h2>
        <div
          style={{
            background: "#2e0d0d",
            border: "1px solid rgba(212,175,55,0.2)",
            padding: 16,
            borderRadius: 12,
            color: "#f5f5f5",
          }}
        >
          {lowMoralStreamers.length === 0 ? (
            <p>✅ All streamers are currently doing well.</p>
          ) : (
            <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
              {lowMoralStreamers.map((s) => (
                <li key={s.id}>
                  {s.name} —{" "}
                  <span style={{ color: s.level === "critical" ? "#ff6c6c" : "#FFD700" }}>
                    {s.level === "critical" ? "⚠️ Critical" : "⚠️ Warning"}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <p style={{ fontSize: 13, color: "#aaa", marginTop: 12 }}>
            * Reach out manually if needed. No automatic bonus is sent.
          </p>
        </div>
      </section>
    </main>
  );
}
