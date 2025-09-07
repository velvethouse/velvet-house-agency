import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";

export default function CreatorPage() {
  const lotusEarned = 216000;
  const isVip = false;

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ color: "#FFD700", marginBottom: "12px" }}>
        🦋 Welcome to your Creator Studio
      </h1>

      <ButterflyRank lotusEarned={lotusEarned} />
      <StreamAccessNotice isVip={isVip} />

      <h2 style={{ color: "#FFD700", marginTop: "32px" }}>Gallery</h2>
      <div className="media-grid">
        <div className="media-card" />
        <div className="media-card" />
        <div className="media-card" />
      </div>

      <h2 style={{ color: "#FFD700", marginTop: "32px" }}>Weekly Schedule</h2>
      <div style={{ overflowX: "auto", marginTop: "12px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead style={{ background: "#3d0e0e", color: "#FFD700" }}>
            <tr>
              <th style={{ padding: "8px", textAlign: "left" }}>Time</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Mon</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Tue</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Wed</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Thu</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Fri</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Sat</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Sun</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 16 }).map((_, i) => {
              const hour = 8 + i;
              const label = `${hour}:00`;
              return (
                <tr key={i}>
                  <td style={{ padding: "6px", color: "#f5f5f5" }}>{label}</td>
                  {Array.from({ length: 7 }).map((_, j) => (
                    <td
                      key={j}
                      style={{
                        padding: "6px",
                        border: "1px solid rgba(212,175,55,0.1)",
                      }}
                    ></td>
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
