// /app/components/GlobalEventNotice.tsx
"use client";

export default function GlobalEventNotice() {
  const event = {
    title: "🎃 Halloween Special",
    message: "Spooky rewards, surprise gifts & secret VIP lives — October 30–31 only!",
  };

  if (!event) return null;

  return (
    <div
      style={{
        background: "linear-gradient(90deg, rgba(212,175,55,.18), rgba(212,175,55,.06))",
        border: "1px solid rgba(212,175,55,.35)",
        borderRadius: 12,
        padding: "12px 18px",
        margin: "24px auto",
        maxWidth: 720,
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 700, color: "#FFD700", marginBottom: 6 }}>
        {event.title}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.5, color: "#e9dfcf" }}>
        {event.message}
      </div>
    </div>
  );
}
