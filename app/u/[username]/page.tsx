// /app/u/[username]/page.tsx
import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";
import QrInvite from "./components/QrInvite";
import GoalWidget from "./components/GoalWidget";
import NovaAssistant from "./components/NovaAssistant";

export default function CreatorProfile({ params }: { params: { username: string } }) {
  const username = params.username;
  const lotusEarned = 216000; // mock
  const isVip = false;        // mock
  const isLocked = false;     // 🔓 default open

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      {/* Header */}
      <h1 style={{ fontSize: "28px", marginBottom: 12 }}>
        🦋 Welcome to your <br />
        <span style={{ color: "#D4AF37" }}>Creator Studio</span>
      </h1>

      {/* Rank + access notice */}
      <ButterflyRank lotusEarned={lotusEarned} />
      <StreamAccessNotice isLocked={isLocked} isVip={isVip} />

      {/* Objective (daily/weekly + bonus +2%) */}
      <GoalWidget />

      {/* Nova copilot */}
      <NovaAssistant username={username} />

      {/* QR individual invite */}
      <QrInvite username={username} />

      {/* Gallery */}
      <section style={{ marginTop: 32 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Gallery</h2>
        <div className="media-grid">
          <div className="media-card" />
          <div className="media-card" />
          <div className="media-card" />
        </div>
      </section>

      {/* Schedule (placeholder) */}
      <section style={{ marginTop: 32 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Weekly Schedule</h2>
        <div className="schedule-table">
          <div className="row header">
            <div>Time</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
          </div>
          {Array.from({ length: 16 }, (_, i) => {
            const hour = `${8 + i}:00`;
            return (
              <div className="row" key={hour}>
                <div>{hour}</div><div /><div /><div /><div /><div /><div /><div />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
