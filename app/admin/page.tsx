'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboardPage() {
  const [username, setUsername] = useState<string | null>(null);
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    // 🔐 À remplacer plus tard par une vraie session/login
    const stored = localStorage.getItem("vh_username");
    setUsername(stored);
    setAccessGranted(stored === "sebastien"); // ✅ temporaire
  }, []);

  if (!accessGranted) {
    return (
      <main style={{ padding: 40, textAlign: "center", color: "#f5f5f5" }}>
        <h1 style={{ fontSize: 24, color: "#FFD700" }}>🔒 Access Denied</h1>
        <p>This page is reserved for the Velvet House founder only.</p>
      </main>
    );
  }

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 28, color: "#D4AF37", marginBottom: 24 }}>
        👑 Velvet House Admin Panel
      </h1>

      <p style={{ color: "#f5f5f5", marginBottom: 32 }}>
        Welcome back {username}! Manage everything from here.
      </p>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        <a href="/admin/streamers" className="card" style={cardStyle}>
          🧠 Streamer Mental Health
        </a>
        <a href="/admin/earnings" className="card" style={cardStyle}>
          💰 Earnings Overview
        </a>
        <a href="/admin/identity" className="card" style={cardStyle}>
          👤 Admin Identity
        </a>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#2e0d0d",
  border: "1px solid rgba(212,175,55,0.2)",
  padding: 20,
  borderRadius: 12,
  color: "#f5f5f5",
  fontWeight: 600,
  textDecoration: "none",
  transition: "all 0.2s ease",
};
