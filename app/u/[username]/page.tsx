import ButterflyRank from "./components/ButterflyRank";

export default function UserProfilePage() {
  const lotusEarned = 216000; // à remplacer plus tard par une vraie valeur dynamique

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
      <h1 className="gold-gradient-text">demo</h1>
      <p>Welcome to my world.</p>

      {/* 🦋 Affichage du rang Butterfly */}
      <div style={{ margin: "24px 0" }}>
        <ButterflyRank lotusEarned={lotusEarned} />
      </div>

      <h2 className="gold-gradient-text">Gallery</h2>
      <div className="media-grid">
        <div className="media-card" />
        <div className="media-card" />
        <div className="media-card" />
      </div>

      <h2 className="gold-gradient-text" style={{ marginTop: 32 }}>
        Weekly Schedule
      </h2>
      <div style={{ overflowX: "auto", marginTop: 12 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
          <thead>
            <tr>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Time</th>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Mon</th>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Tue</th>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Wed</th>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Thu</th>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Fri</th>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Sat</th>
              <th style={{ padding: 8, textAlign: "left", color: "#D4AF37" }}>Sun</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 16 }).map((_, i) => {
              const hour = 8 + i;
              return (
                <tr key={hour} style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
                  <td style={{ padding: 8 }}>{`${hour}:00`}</td>
                  {Array.from({ length: 7 }).map((_, j) => (
                    <td key={j} style={{ padding: 8 }}></td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
