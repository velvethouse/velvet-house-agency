"use client";

export default function GlobalEventNotice() {
  const message =
    "🏛️ Velvet House Global Event: Friday 22:00 — Golden Night Show across all channels. Don't miss it ✨";

  return (
    <section style={{ marginTop: 20 }}>
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(212,175,55,0.4)",
          borderRadius: 12,
          padding: 16,
          color: "#d7c9b3",
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        <strong>🏛️ Velvet House Event:</strong>
        <p style={{ marginTop: 6 }}>{message}</p>
      </div>
    </section>
  );
}
