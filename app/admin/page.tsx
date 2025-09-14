"use client";

export default function AdminDashboardPage() {
  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 28, color: "#D4AF37", marginBottom: 8 }}>
        👑 Welcome back, Velvet King
      </h1>
      <p style={{ color: "#f5f5f5", marginBottom: 32 }}>
        This is your official admin panel. You can manage the platform, monitor
        earnings, and support streamers in need.
      </p>

      {/* 🧾 Résumé rapide */}
      <div
        style={{
          background: "#2e0d0d",
          border: "1px solid rgba(212,175,55,0.2)",
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: 32,
          color: "#f5f5f5",
          lineHeight: 1.6,
        }}
      >
        <p>🧠 Streamers to monitor: <b>3</b></p>
        <p>💰 Net earnings: <b>1 350 €</b></p>
        <p>🪙 Total Lotus sold: <b>2 400 000 ♢</b></p>
      </div>

      {/* 🧭 Navigation admin */}
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
