// /app/f/[username]/page.tsx
"use client";

import CancelSubscription from "./components/CancelSubscription";

export default function FollowerProfile() {
  const isVip = true;    // simule un utilisateur VIP
  const isGold = false;  // simule un VIP Gold

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      {/* Header */}
      <h1 style={{ fontSize: "28px", marginBottom: 20 }}>
        🙋‍♂️ Welcome back, <br />
        <span style={{ color: "#D4AF37" }}>Follower</span>
      </h1>

      {/* Avatar */}
      <div className="avatar-ring" style={{ marginBottom: 20 }}>
        <img src="/hero.png" alt="Profile" />
      </div>

      {/* Photo gallery (max 5) */}
      <section style={{ marginTop: 20 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Your Photos</h2>
        <div className="media-grid">
          <div className="media-card" />
          <div className="media-card" />
          <div className="media-card" />
          <div className="media-card" />
          <div className="media-card" />
        </div>
      </section>

      {/* VIP Status */}
      {(isVip || isGold) && (
        <section style={{ marginTop: 30 }}>
          <div
            style={{
              padding: "14px",
              border: "1px solid rgba(212,175,55,0.35)",
              borderRadius: 14,
              background: "rgba(0,0,0,0.25)",
              color: "#f5f5f5",
            }}
          >
            <h3 style={{ marginTop: 0, color: "#FFD700" }}>💎 Subscription</h3>
            <p style={{ marginBottom: 0 }}>
              You're currently a <b>{isGold ? "VIP Gold" : "VIP"}</b> member.
            </p>
          </div>
        </section>
      )}

      {/* Cancel button */}
      <CancelSubscription />
    </main>
  );
}
