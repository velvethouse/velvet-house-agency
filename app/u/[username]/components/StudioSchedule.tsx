"use client";

const hours = Array.from({ length: 14 }, (_, i) => `${8 + i}:00`);
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Exemples de créneaux live planifiés
const planned = [
  { day: "Mon", hour: "20:00" },
  { day: "Wed", hour: "21:00" },
  { day: "Fri", hour: "22:00" },
];

export default function StudioSchedule() {
  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>📅 Live Schedule</h2>

      <div style={{ overflowX: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(8, 100px)` }}>
          <div style={{ fontWeight: "bold", padding: "6px 4px" }}>Hour</div>
          {days.map((d) => (
            <div key={d} style={{ fontWeight: "bold", padding: "6px 4px", color: "#FFD700" }}>
              {d}
            </div>
          ))}
        </div>

        {hours.map((hour) => (
          <div
            key={hour}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(8, 100px)`,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div style={{ padding: "4px 6px", fontSize: 12 }}>{hour}</div>
            {days.map((day) => {
              const isPlanned = planned.find((p) => p.day === day && p.hour === hour);
              return (
                <div
                  key={`${day}-${hour}`}
                  style={{
                    padding: 4,
                    textAlign: "center",
                    background: isPlanned ? "rgba(212,175,55,0.2)" : "transparent",
                    borderRadius: 6,
                    fontSize: 11,
                    color: isPlanned ? "#FFD700" : "#999",
                  }}
                >
                  {isPlanned ? "✅ Live" : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
