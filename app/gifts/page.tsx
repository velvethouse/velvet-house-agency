// app/gifts/page.tsx
"use client";

import { useMemo, useState } from "react";
import GiftButton from "../../components/GiftButton";

type Gift = {
  id: string;
  name: string;
  lotus: number;
  emoji: string;
  animated?: boolean;
  note?: string;
};

const GIFTS: Gift[] = [
  { id: "lotus",      name: "Lotus",        lotus: 1000,  emoji: "🪷", animated: true,  note: "Signature Velvet House" },
  { id: "butterfly",  name: "Butterfly",    lotus: 2000,  emoji: "🦋", animated: true  },
  { id: "star",       name: "Star",         lotus: 500,   emoji: "⭐",  animated: true  },
  { id: "rose",       name: "Rose",         lotus: 1500,  emoji: "🌹",  animated: true  },
  { id: "diamond",    name: "Diamond",      lotus: 10000, emoji: "💎",  animated: true  },
  { id: "fireworks",  name: "Fireworks",    lotus: 8000,  emoji: "🎆",  animated: true  },
  { id: "champagne",  name: "Champagne",    lotus: 3000,  emoji: "🥂" },
  { id: "heart",      name: "Heart",        lotus: 800,   emoji: "❤️",  animated: true  },
  { id: "crown",      name: "Crown",        lotus: 7000,  emoji: "👑" },
  { id: "music",      name: "Music Notes",  lotus: 1200,  emoji: "🎶",  animated: true  },
  { id: "lightning",  name: "Lightning",    lotus: 2500,  emoji: "⚡",  animated: true  },
  { id: "velvetbox",  name: "Velvet Box",   lotus: 5000,  emoji: "🎁",  animated: true  },
];

export default function GiftsCatalogPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const results = useMemo(() => {
    const filtered = GIFTS.filter(g =>
      (g.name + " " + g.id).toLowerCase().includes(q.toLowerCase())
    );
    return filtered.sort((a, b) =>
      sort === "asc" ? a.lotus - b.lotus : b.lotus - a.lotus
    );
  }, [q, sort]);

  const wrapStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
    color: "#f5f5f5",
    fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
  };

  const cardStyle: React.CSSProperties = {
    display: "grid",
    gap: 10,
    padding: 16,
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
    border: "1px solid rgba(212,175,55,0.22)",
    boxShadow: "0 10px 26px rgba(0,0,0,.30)",
    textDecoration: "none",
    color: "#f5f5f5",
  };

  const emojiWrap: React.CSSProperties = {
    height: 90,
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
    background: "rgba(0,0,0,.25)",
    border: "1px solid rgba(212,175,55,.22)",
  };

  return (
    <main style={wrapStyle}>
      {/* Styles d’animation locaux */}
      <style>{`
        @keyframes floatY { 0%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } 100%{ transform: translateY(0) } }
        @keyframes pulse { 0%{ transform: scale(1) } 50%{ transform: scale(1.08) } 100%{ transform: scale(1) } }
        .anim-float { animation: floatY 2s ease-in-out infinite; }
        .anim-pulse { animation: pulse 1.8s ease-in-out infinite; }
      `}</style>

      {/* Titre */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          Gifts — Internal Catalog (Phase 1)
        </h1>
        <p style={{ margin: "6px 0 0", color: "#e9dfcf" }}>
          This page is for internal review (not in the public menu). Gifts are used in Live, Chat & Profiles.
        </p>
      </section>

      {/* Filtres */}
      <section style={{ maxWidth: 1100, margin: "10px auto 6px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <input
            className="input-velvet"
            placeholder="Search gifts…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select
            className="select-velvet"
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
          >
            <option value="asc">Price ↑ (Lotus)</option>
            <option value="desc">Price ↓ (Lotus)</option>
          </select>
          <div
            className="card"
            style={{ padding: 12, fontSize: 13, color: "#d7c9b3", display: "grid", gap: 6 }}
          >
            <div><b>Note:</b> prices are in <b>Lotus</b>. Sending is wired in-context (Live/Chat/Profile).</div>
            <div>Use <b>Send test</b> to simulate the button wiring (no payment here).</div>
          </div>
        </div>
      </section>

      {/* Grille des gifts */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {results.map((g) => {
            const animClass =
              g.animated && (g.id === "star" || g.id === "heart" || g.id === "music")
                ? "anim-pulse"
                : g.animated
                ? "anim-float"
                : "";
            return (
              <article key={g.id} className="card" style={cardStyle}>
                <div style={emojiWrap}>
                  <div style={{ fontSize: 42, lineHeight: 1 }} className={animClass}>
                    {g.emoji}
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                  <div style={{ fontWeight: 800, color: "#D4AF37" }}>{g.name}</div>
                  <div style={{ fontWeight: 700 }}>
                    {g.lotus.toLocaleString("en-US")} <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
                  </div>
                </div>
                {g.note && <div style={{ color: "#d7c9b3", fontSize: 13 }}>{g.note}</div>}

                <div className="btn-row-2" style={{ marginTop: 4 }}>
                  <a className="btn3d btn3d--velvet" href={`/u/alice?gift=${g.id}`}>Preview</a>
                  <GiftButton target="demo" className="btn3d btn3d--gold" label="Send test" />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
        }
