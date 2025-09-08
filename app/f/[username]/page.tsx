// /app/f/[username]/page.tsx
"use client";

import CancelSubscription from "./components/CancelSubscription";
import FavoriteCreators from "./components/FavoriteCreators";

export default function FollowerProfile() {
  const isVip = true;    // Simule un utilisateur VIP
  const isGold = true;   // Simule un VIP Gold
  const lotusBalance = 12345;

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      {/* Header */}
      <h1 style={{ fontSize: "28px", marginBottom: 20 }}>
        🙋‍♂️ Welcome, JohnDoe
      </h1>

      {/* Status + Lotus */}
      <p style={{ marginBottom: 10 }}>
        Status: <b>{isGold ? "VIP Gold" : isVip ? "VIP" : "Standard"}</b><br />
        Lotus Balance: <span style={{ color: "#D4AF37", fontWeight: 600 }}>{lotusBalance.toLocaleString()}</span>
      </p>

      {/* Avatar */}
      <div className="avatar-ring" style={{ marginBottom: 20 }}>
        <img src="/hero.png" alt="Profile" />
      </div>

      {/* Photo gallery (max 5) */}
      <section style={{ marginTop: 20 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Your Profile Photos</h2>
        <div className="media-grid">
          <div className="media-card">+ Add Photo</div>
          <div className="media-card">+ Add Photo</div>
          <div className="media-card">+ Add Photo</div>
          <div className="media-card">+ Add Photo</div>
          <div className="media-card">+ Add Photo</div>
        </div>
      </section>

      {/* Favorite creators */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Your Favorite Streamers</h2>
        <FavoriteCreators />
      </section>

      {/* Subscription status */}
      {(isVip || isGold) && (
        <section style={{ marginTop: 40 }}>
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

      {/* Cancel VIP subscription */}
      {(isVip || isGold) && (
        <section style={{ marginTop: 20 }}>
          <CancelSubscription />
        </section>
      )}
    </main>
  );
}
