// /app/u/[username]/page.tsx
import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";

export default function CreatorProfilePage() {
  const lotusEarned = 216000;
  const isVip = false;

  return (
    <main style={{ padding: "20px", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>
        🦋 Welcome to your <br />
        <span style={{ color: "#D4AF37" }}>Creator Studio</span>
      </h1>

      <ButterflyRank lotusEarned={lotusEarned} />
      <StreamAccessNotice isVip={isVip} />

      {/* Galerie visible ici */}
      <h2 style={{ fontSize: "20px", marginTop: 40 }}>Gallery</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gap: "12px",
        marginTop: "10px"
      }}>
        <div style={{ background: "#2e0d0d", height: 100, borderRadius: 10 }} />
        <div style={{ background: "#2e0d0d", height: 100, borderRadius: 10 }} />
        <div style={{ background: "#2e0d0d", height: 100, borderRadius: 10 }} />
      </div>

      {/* Planning (planning.tsx) */}
      <h2 style={{ fontSize: "20px", marginTop: 40 }}>Weekly Schedule</h2>
      <div style={{
        border: "1px solid rgba(212,175,55,0.2)",
        borderRadius: 16,
        padding: 10,
        marginTop: 10,
        overflowX: "auto"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff" }}>
          <thead>
            <tr>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Time</th>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Mon</th>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Tue</th>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Wed</th>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Thu</th>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Fri</th>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Sat</th>
              <th style={{ padding: "8px", color: "#D4AF37" }}>Sun</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 16 }, (_, i) => {
              const hour = 8 + i;
              return (
                <tr key={hour}>
                  <td style={{ padding: "6px", fontWeight: 600 }}>
                    {hour}:00
                  </td>
                  {Array.from({ length: 7 }, (_, j) => (
                    <td key={j} style={{ padding: "6px", textAlign: "center" }}>—</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
