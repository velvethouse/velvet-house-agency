// app/gifts/page.tsx  (REMPLACEMENT COMPLET)
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import GiftButton from "../../components/GiftButton";

type Gift = {
  id: string;
  name: string;
  lotus: number;
  animated?: boolean;
  file?: string;     // /public/gifts/xxx.(mp4|webm|gif|webp|png|svg)
  poster?: string;   // /public/gifts/xxx.jpg (facultatif)
  emoji?: string;    // fallback si pas de fichier
  note?: string;
};

// ——— DEMO LIST (tu peux compléter jusqu’à 50) ———
// Ajoute "file" si tu poses un fichier dans /public/gifts/.
const GIFTS: Gift[] = [
  { id: "lotus",      name: "Lotus",       lotus: 1000,  animated: true,  file: "/gifts/lotus.gif",      poster: "/gifts/lotus.jpg",      note: "Signature" },
  { id: "butterfly",  name: "Butterfly",   lotus: 2000,  animated: true,  file: "/gifts/butterfly.gif" },
  { id: "star",       name: "Star",        lotus: 500,   animated: true,  emoji: "⭐" },
  { id: "rose",       name: "Rose",        lotus: 1500,  animated: true,  file: "/gifts/rose.gif" },
  { id: "diamond",    name: "Diamond",     lotus: 10000, animated: true,  file: "/gifts/diamond.mp4" },
  { id: "fireworks",  name: "Fireworks",   lotus: 8000,  animated: true,  file: "/gifts/fireworks.mp4" },
  { id: "champagne",  name: "Champagne",   lotus: 3000,  animated: false, emoji: "🥂" },
  { id: "heart",      name: "Heart",       lotus: 800,   animated: true,  emoji: "❤️" },
  { id: "crown",      name: "Crown",       lotus: 7000,  animated: false, emoji: "👑" },
  { id: "music",      name: "Music Notes", lotus: 1200,  animated: true,  emoji: "🎶" },
  { id: "lightning",  name: "Lightning",   lotus: 2500,  animated: true,  emoji: "⚡" },
  { id: "velvetbox",  name: "Velvet Box",  lotus: 5000,  animated: true,  file: "/gifts/velvetbox.mp4" },
];

function isVideo(path?: string) {
  if (!path) return false;
  const p = path.toLowerCase();
  return p.endsWith(".mp4") || p.endsWith(".webm");
}
function isImage(path?: string) {
  if (!path) return false;
  const p = path.toLowerCase();
  return p.endsWith(".gif") || p.endsWith(".webp") || p.endsWith(".png") || p.endsWith(".jpg") || p.endsWith(".jpeg") || p.endsWith(".svg");
}

export default function GiftsPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = useMemo(() => {
    const filtered = GIFTS.filter(g =>
      (g.name + " " + g.id).toLowerCase().includes(q.toLowerCase())
    );
    return filtered.sort((a, b) => (sort === "asc" ? a.lotus - b.lotus : b.lotus - a.lotus));
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
    color: "#f5f5f5",
    textDecoration: "none",
  };

  const mediaWrap: React.CSSProperties = {
    height: 120,
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
          Gifts — Internal Catalog
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Drop your animated files in <b>/public/gifts/</b> (e.g. <i>lotus.mp4</i>, <i>butterfly.gif</i>).  
          This page auto-renders video/image if present; otherwise shows a fallback 🎁.
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
            onChange={(e) => setSort(e.target.value as "asc" | "desc")}
          >
            <option value="asc">Price ↑ (Lotus)</option>
            <option value="desc">Price ↓ (Lotus)</option>
          </select>
          <div className="card" style={{ padding: 12, fontSize: 13, color: "#d7c9b3" }}>
            <b>Tip :</b> prefer short loop videos (mp4/webm), muted, ≤ 1 MB.  
            Images (gif/webp/png/svg) also work.
          </div>
        </div>
      </section>

      {/* Grille */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {list.map((g) => (
            <article key={g.id} className="card" style={cardStyle}>
              {/* Media */}
              <div style={mediaWrap}>
                {g.file ? (
                  isVideo(g.file) ? (
                    <video
                      src={g.file}
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={g.poster}
                      style={{ maxWidth: 140, maxHeight: 120, display: "block", borderRadius: 8 }}
                      onError={(ev) => {
                        (ev.currentTarget as HTMLVideoElement).outerHTML =
                          `<div style="font-size:42px;line-height:1">${g.emoji || "🎁"}</div>`;
                      }}
                    />
                  ) : isImage(g.file) ? (
                    <Image
                      src={g.file}
                      alt={g.name}
                      width={140}
                      height={120}
                      unoptimized
                      style={{ objectFit: "contain", borderRadius: 8 }}
                      onError={(ev) => {
                        (ev.currentTarget as any).outerHTML =
                          `<div style="font-size:42px;line-height:1">${g.emoji || "🎁"}</div>`;
                      }}
                    />
                  ) : (
                    <div style={{ fontSize: 42, lineHeight: 1 }}>{g.emoji || "🎁"}</div>
                  )
                ) : (
                  <div style={{ fontSize: 42, lineHeight: 1 }}>{g.emoji || "🎁"}</div>
                )}
              </div>

              {/* Infos */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                <div style={{ fontWeight: 800, color: "#D4AF37" }}>{g.name}</div>
                <div style={{ fontWeight: 700 }}>
                  {g.lotus.toLocaleString("en-US")}{" "}
                  <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#d7c9b3" }}>
                {g.animated ? "Animated ✨" : "Static"} {g.note ? `• ${g.note}` : ""}
              </div>

              {/* Actions */}
              <div className="btn-row-2" style={{ marginTop: 4 }}>
                <a className="btn3d btn3d--velvet" href={`/u/alice?gift=${g.id}`}>
                  Preview
                </a>
                {/* ⚠️ Pas de prop 'target' ici (pour éviter l'erreur TS) */}
                <GiftButton className="btn3d btn3d--gold" label="Send test" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
      }
