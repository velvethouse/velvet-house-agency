'use client';

type Props = {
  isVip: boolean;
  isGold: boolean;
};

export default function CancelSubscription({ isVip, isGold }: Props) {
  if (!isVip && !isGold) return null;

  return (
    <div
      style={{
        marginTop: 30,
        padding: "16px",
        border: "1px solid rgba(212,175,55,0.35)",
        borderRadius: 14,
        background: "rgba(0,0,0,0.25)",
        color: "#f5f5f5",
      }}
    >
      <h3 style={{ color: "#FFD700", marginTop: 0 }}>
        🛑 Cancel Subscription
      </h3>
      <p style={{ marginBottom: 12 }}>
        You're currently subscribed to <b>{isGold ? "VIP Gold" : "VIP"}</b>.<br />
        You can stop your subscription anytime from your payment settings.
      </p>

      <button
        className="btn3d btn3d--outline-gold"
        style={{ padding: "8px 16px", fontSize: 14 }}
        onClick={() => {
          // 🔴 À relier plus tard à l’API d’annulation
          alert("Your subscription will be canceled (feature coming soon).");
        }}
      >
        Cancel subscription
      </button>
    </div>
  );
}
