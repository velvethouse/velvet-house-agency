// /app/u/[username]/components/NovaAssistant.tsx
"use client";

import { useMemo, useState } from "react";

export default function NovaAssistant({ username = "demo" }: { username?: string }) {
  const [open, setOpen] = useState(true);
  const [msg, setMsg] = useState("");

  // Suggestions simples (mock) — à brancher plus tard
  const now = new Date();
  const hour = now.getHours();
  const tip = useMemo(() => {
    if (hour >= 20 && hour <= 23) return "Peak time now — go live for higher visibility.";
    if (hour >= 12 && hour <= 14) return "Lunch time: 20–30min live boosts retention.";
    return "Plan a 45min live this evening (21:00–21:45).";
  }, [hour]);

  function sendToNova() {
    if (!msg.trim()) return alert("Type your question first.");
    // TODO: appeler l'API Nova plus tard
    alert("Nova received your message. She'll analyze and reply here (demo).");
    setMsg("");
  }

  return (
    <section style={{ marginTop: 24 }}>
      <div
        className="card"
        style={{
          padding: 14,
          border: "1px solid rgba(212,175,55,.35)",
          background: "linear-gradient(180deg, rgba(212,175,55,.10), rgba(0,0,0,.25))",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <h2 style={{ margin: 0, color: "#D4AF37", fontSize: "clamp(18px,4.5vw,22px)" }}>🧠 Nova — your studio copilot</h2>
          <button
            className="btn3d btn3d--outline-gold"
            onClick={() => setOpen((s) => !s)}
            style={{ minHeight: 36, padding: "6px 12px" }}
          >
            {open ? "Hide" : "Show"}
          </button>
        </div>

        {open && (
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            {/* Quick tip */}
            <div
              style={{
                padding: 10,
                borderRadius: 12,
                background: "rgba(0,0,0,.35)",
                border: "1px dashed rgba(212,175,55,.35)",
                color: "#e9dfcf",
              }}
            >
              <b>Quick tip:</b> {tip}
            </div>

            {/* Quick actions */}
            <div className="btn-row-3" style={{ maxWidth: 760 }}>
              <button
                className="btn3d btn3d--gold"
                onClick={() => alert("Best live window today: 21:00–23:00 (demo).")}
              >
                Best live time today
              </button>
              <button
                className="btn3d btn3d--velvet"
                onClick={() => alert("Profile checklist sent (demo): avatar, bio, 6 photos, 2 short clips.")}
              >
                Optimize profile
              </button>
              <button
                className="btn3d btn3d--outline-gold"
                onClick={() => alert("Safety rules recap sent (demo).")}
              >
                Safety reminder
              </button>
            </div>

            {/* Message to Nova */}
            <div style={{ display: "grid", gap: 8 }}>
              <label style={{ color: "#d7c9b3", fontSize: 13 }}>
                Ask Nova anything (planning, content ideas, gifts, pricing…)
              </label>
              <textarea
                className="input-velvet"
                rows={3}
                placeholder={`Hi Nova, it’s ${username}. I need help with…`}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                style={{ resize: "vertical" }}
              />
              <div className="btn-row-2" style={{ maxWidth: 320 }}>
                <button className="btn3d btn3d--gold" onClick={sendToNova}>
                  Send to Nova
                </button>
                <button
                  className="btn3d btn3d--outline-gold"
                  onClick={() => setMsg("")}
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Rules */}
            <div style={{ fontSize: 12, color: "#d7c9b3" }}>
              <b>Reminder:</b> No explicit nudity on previews. NSFW is gift-unlock only. Keep one rest day weekly, max 10h/day.  
              Report harassment immediately via Contact.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
