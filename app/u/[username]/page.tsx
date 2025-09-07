// /app/u/[username]/page.tsx

import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";

export default function CreatorProfile() {
  const lotusEarned = 216000; // valeur mock pour test
  const isVip = false; // à true si le profil est VIP/VIP Gold
  const isLocked = false; // 🔓 profil déverrouillé par défaut

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
        <div className="schedule-table">
          <div className="row header">
            <div>Time</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>
          {Array.from({ length: 16 }, (_, i) => {
            const hour = `${8 + i}:00`;
            return (
              <div className="row" key={hour}>
                <div>{hour}</div>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
