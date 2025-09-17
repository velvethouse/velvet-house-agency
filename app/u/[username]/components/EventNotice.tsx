'use client';

type Props = {
  username: string; // même si pas utilisé, on le déclare
};

export default function EventNotice({ username }: Props) {
  const message =
    "🦋 This Saturday at 9 PM — special live with surprises. Join me, I’ll be waiting 💋";

  return (
    <section style={{ marginTop: 24 }}>
      <div
        style={{
          background: "rgba(212, 175, 55, 0.1)",
          border: "1px solid rgba(212,175,55,0.5)",
          borderRadius: 12,
          padding: 16,
          color: "#f8d7a0",
          fontSize: 15,
          lineHeight: 1.6,
        }}
      >
        <strong>🦋 Streameuse Event:</strong>
        <p style={{ marginTop: 8 }}>{message}</p>
      </div>
    </section>
  );
}
