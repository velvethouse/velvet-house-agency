// app/gifts/page.tsx
"use client";

import { useMemo, useState } from "react";
import GiftButton from "../../components/GiftButton";

type Gift = {
  id: string;
  name: string;
  lotus: number;
  // un des deux (ou les deux si tu veux un poster)
  file?: string;   // /gifts/xxx.mp4 | .webm | .gif | .svg | .png
  poster?: string; // /gifts/xxx.jpg (image de couverture facultative)
  emoji?: string;  // fallback si le fichier n'existe pas encore
  note?: string;
};

// 🔸 DEMO : 12 items prêts à être remplacés par tes vrais fichiers.
// Ajoute/édite librement jusqu’à tes 50 gifts.
const GIFTS: Gift[] = [
  { id: "lotus",      name: "Lotus",       lotus: 1000,  file: "/gifts/lotus.mp4",      poster: "/gifts/lotus.jpg",      emoji: "🪷", note: "Signature Velvet House" },
  { id: "butterfly",  name: "Butterfly",   lotus: 2000,  file: "/gifts/butterfly.mp4",  poster: "/gifts/butterfly.jpg",  emoji: "🦋" },
  { id: "star",       name: "Star",        lotus: 500,   file: "/gifts/star.mp4",       poster: "/gifts/star.jpg",       emoji: "⭐"  },
  { id: "rose",       name: "Rose",        lotus: 1500,  file: "/gifts/rose.mp4",       poster: "/gifts/rose.jpg",       emoji: "🌹"  },
  { id: "diamond",    name: "Diamond",     lotus: 10000, file: "/gifts/diamond.mp4",    poster: "/gifts/diamond.jpg",    emoji: "💎"  },
  { id: "fireworks",  name: "Fireworks",   lotus: 8000,  file: "/gifts/fireworks.mp4",  poster: "/gifts/fireworks.jpg",  emoji: "🎆"  },
  { id: "champagne",  name: "Champagne",   lotus: 3000,  file: "/gifts/champagne.mp4",  poster: "/gifts/champagne.jpg",  emoji: "🥂"  },
  { id: "heart",      name: "Heart",       lotus: 800,   file: "/gifts/heart.mp4",      poster: "/gifts/heart.jpg",      emoji: "❤️"  },
  { id: "crown",      name: "Crown",       lotus: 7000,  file: "/gifts/crown.mp4",      poster: "/gifts/crown.jpg",      emoji: "👑"  },
  { id: "music",      name: "Music Notes", lotus: 1200,  file: "/gifts/music.mp4",      poster: "/gifts/music.jpg",      emoji: "🎶"  },
  { id: "lightning",  name: "Lightning",   lotus: 2500,  file: "/gifts/lightning.mp4",  poster: "/gifts/lightning.jpg",  emoji: "⚡"  },
  { id: "velvetbox",  name: "Velvet Box",  lotus: 5000,  file: "/gifts/velvetbox.mp4",  poster: "/gifts/velvetbox.jpg",  emoji: "🎁"  },
];

// util : détecter l’extension pour choisir le rendu
function ext(path?: string) {
  if (!path) return "";
  const i = path.lastIndexOf(".");
  return i >= 0 ? path.slice(i + 1).toLowerCase() : "";
}

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

  const mediaWrap: React.CSSProperties = {
    height: 110,
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
    background: "rgba(0,0,0,.25)",
    border: "1px solid rgba(212,175,55,.22)",
    overflow: "hidden",
  };

  return (
    <main style={wrapStyle}>
      {/* Titre */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          Gifts — Internal Catalog (Animated)
        </h1>
        <p style={{ margin: "6px 0 0", color: "#e9dfcf" }}>
          Drop your real animated files in <b>/public/gifts/</b> — this page renders videos/images directly.
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
            <div><b>Note:</b> This is an internal preview. Video files should be short & loopable (mp4/webm), muted, and optimized.</div>
            <div>Fallback to emoji is automatic if file is missing.</div>
          </div>
        </div>
      </section>

      {/* Grille des gifts */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {results.map((g) => {
            const e = ext(g.file);
            const isVideo = e === "mp4" || e === "webm";
            const isImage = e === "gif" || e === "svg" || e === "png" || e === "jpg" || e === "jpeg" || e === "webp";

            return (
              <article key={g.id} className="card" style={cardStyle}>
                <div style={mediaWrap}>
                  {/* Rend l'animation si le fichier est là, sinon emoji */}
                  {g.file ? (
                    isVideo ? (
                      <video
                        src={g.file}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={g.poster}
                        style={{ maxWidth: 120, maxHeight: 110, display: "block" }}
                        onError={(ev) => {
                          // si la vidéo ne se charge pas -> fallback emoji
                          const el = ev.currentTarget as HTMLVideoElement;
                          el.outerHTML = `<div style="font-size:42px;line-height:1">${g.emoji || "🎁"}</div>`;
                        }}
                      />
                    ) : isImage ? (
                      <img
                        src={g.file}
                        alt={g.name}
                        style={{ maxWidth: 120, maxHeight: 110, display: "block" }}
                        onError={(ev) => {
                          const el = ev.currentTarget as HTMLImageElement;
                          el.outerHTML = `<div style="font-size:42px;line-height:1">${g.emoji || "🎁"}</div>`;
                        }}
                      />
                    ) : (
                      <div style={{ fontSize: 42 }}>{g.emoji || "🎁"}</div>
                    )
                  ) : (
                    <div style={{ fontSize: 42 }}>{g.emoji || "🎁"}</div>
                  )}
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
