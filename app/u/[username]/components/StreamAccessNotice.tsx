"use client";

export default function StreamAccessNotice({ isVip }: { isVip: boolean }) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: "16px 20px",
        borderRadius: 16,
        background: "linear-gradient(180deg, #3d0e0e, #2e0d0d)",
        border: "1px solid rgba(212,175,55,0.25)",
        color: "#f5f5f5",
      }}
    >
      {isVip ? (
        <>
          <h3 style={{ color: "#D4AF37", marginBottom: 8 }}>🔓 VIP Access Granted</h3>
          <p style={{ margin: 0 }}>
            Your stream is currently unlocked for VIP viewers. You can adjust your access settings anytime.
          </p>
        </>
      ) : (
        <>
          <h3 style={{ color: "#D4AF37", marginBottom: 8 }}>🔐 Stream Locked</h3>
          <p style={{ marginBottom: 8 }}>
            Your stream is locked by default. Viewers must send gifts to unlock it.
          </p>
          <p style={{ margin: 0 }}>
            Upgrade to <strong>VIP</strong> or <strong>VIP Gold</strong> to offer exclusive access and earn faster.
          </p>
        </>
      )}
    </div>
  );
}
