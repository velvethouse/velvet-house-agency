// /app/u/[username]/components/PlanningBlock.tsx
"use client";

export default function PlanningBlock() {
  const mockSchedule = [
    { day: "Monday", time: "18:00 – 21:00" },
    { day: "Wednesday", time: "20:00 – 23:00" },
    { day: "Friday", time: "22:00 – 01:00" },
    { day: "Sunday", time: "16:00 – 18:00" },
  ];

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>🗓️ Weekly Planning</h2>
      <div className="card" style={{ padding: 16 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {mockSchedule.map((slot, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ fontWeight: 600 }}>{slot.day}</span>
              <span style={{ fontFamily: "monospace", color: "#FFD700" }}>
                {slot.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
