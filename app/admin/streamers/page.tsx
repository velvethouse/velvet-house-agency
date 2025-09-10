// 📄 /app/admin/streamers/page.tsx

"use client";

const lowMoralStreamers = [
  { id: 1, name: "LunaFire", level: "critical" },
  { id: 2, name: "RedVelvet", level: "warning" },
  { id: 3, name: "AngelKiss", level: "critical" },
];

export default function AdminStreamersPage() {
  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 26, color: "#D4AF37", marginBottom: 24 }}>
        🧠 Streamer Mental Health
      </h1>

      <div
        style={{
          background: "#2e0d0d",
          border: "1px solid rgba(212,175,55,0.2)",
          padding: 20,
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
    </main>
  );
}
