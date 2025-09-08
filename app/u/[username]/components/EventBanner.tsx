// /app/u/[username]/components/EventBanner.tsx
"use client";

type Event = {
  id: string;
  title: string;
  description: string;
  fromVelvet?: boolean; // true = Velvet House global event
};

export default function EventBanner({
  events = [],
}: {
  events?: Event[];
}) {
  if (events.length === 0) return null;

  return (
    <section style={{ marginTop: 32 }}>
      <h2
        style={{
          color: "#D4AF37",
          marginBottom: 12,
          fontSize: "clamp(20px, 5vw, 26px)",
        }}
      >
        🎉 Events
      </h2>
      <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        {events.map((e) => (
          <article
            key={e.id}
            className="card"
            style={{
              padding: 14,
              borderColor: e.fromVelvet ? "rgba(212,175,55,0.6)" : "rgba(212,175,55,0.3)",
              background: e.fromVelvet
                ? "linear-gradient(180deg, rgba(212,175,55,0.15), rgba(0,0,0,0.35))"
                : "rgba(0,0,0,0.25)",
            }}
          >
            <h3 style={{ margin: "0 0 6px 0", color: "#FFD700", fontSize: 18 }}>
              {e.fromVelvet ? "🏛️ " : "🦋 "}
              {e.title}
            </h3>
            <p style={{ margin: 0, color: "#e9dfcf", fontSize: 14, lineHeight: 1.5 }}>
              {e.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
