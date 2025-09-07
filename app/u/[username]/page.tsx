// /app/u/[username]/page.tsx

import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";

export default function CreatorProfile() {
  const lotusEarned = 216000; // valeur mock pour test
  const isVip = false;        // true si le profil est VIP/VIP Gold
  const isLocked = false;     // 🔓 profil ouvert par défaut

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 20 }}>
        🦋 Welcome to your <br />
        <span style={{ color: "#D4AF37" }}>Creator Studio</span>
      </h1>

      <ButterflyRank lotusEarned={lotusEarned} />

      <StreamAccessNotice isLocked={isLocked} isVip={isVip} />

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Gallery</h2>
        <div className="media-grid">
          <div className="media-card" />
          <div className="media-card" />
          <div className="media-card" />
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Weekly Schedule</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: "1px",
          background: "#D4AF37",
          fontSize: 14,
          textAlign: "center",
        }}>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Time</div>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Mon</div>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Tue</div>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Wed</div>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Thu</div>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Fri</div>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Sat</div>
          <div style={{ background: "#2e0d0d", padding: "6px" }}>Sun</div>

          {Array.from({ length: 16 }, (_, i) => {
            const hour = `${8 + i}:00`;
            return (
              <>
                <div style={{ background: "#3d0e0e", padding: "6px" }}>{hour}</div>
                {Array.from({ length: 7 }).map((_, j) => (
                  <div key={`${hour}-${j}`} style={{ background: "#3d0e0e", padding: "6px" }} />
                ))}
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
}
