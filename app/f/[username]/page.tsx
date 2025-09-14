'use client';

import CancelSubscription from "./components/CancelSubscription";
import FavoriteCreators from "./components/FavoriteCreators";

type Props = {
  params: {
    username: string;
  };
};

export default function FollowerProfile({ params }: Props) {
  const username = params.username;

  // 🟡 Ces données seront récupérées via API ou backend plus tard
  const lotusBalance = 0;
  const isVip = false;
  const isGold = false;

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      {/* Header */}
      <h1 style={{ fontSize: "28px", marginBottom: 20 }}>
        🙋‍♂️ Welcome, {username}
      </h1>

      {/* Status + Lotus */}
      <p style={{ marginBottom: 10 }}>
        Status: <b>{isGold ? "VIP Gold" : isVip ? "VIP" : "Standard"}</b>
        <br />
        Lotus Balance:{" "}
        <span style={{ color: "#D4AF37", fontWeight: 600 }}>
          {lotusBalance.toLocaleString()} ♢
        </span>
      </p>

      {/* Avatar (placeholder) */}
      <div
        className="avatar-ring"
        style={{ marginBottom: 20, textAlign: "center" }}
      >
        <img
          src="/avatar-default.png"
          alt="Profile"
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "2px solid #D4AF37",
          }}
        />
      </div>

      {/* Favorite creators */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>
          Your Favorite Streamers
        </h2>
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
