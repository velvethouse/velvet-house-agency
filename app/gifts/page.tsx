// app/gifts/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import GiftButton from "../../components/GiftButton";

type Gift = {
  id: string;
  name: string;
  lotus: number;
  animated?: boolean;
  file?: string;
  emoji?: string;
};

// ====== 50 gifts luxe ======
const GIFTS: Gift[] = [
  { id: "lotus",       name: "Lotus",        lotus: 1000,   animated: true,  file: "/gifts/lotus.webm", emoji: "🌸" },
  { id: "rose",        name: "Rose",         lotus: 1500,   animated: true,  file: "/gifts/rose.webm", emoji: "🌹" },
  { id: "heart",       name: "Heart",        lotus: 2000,   animated: true,  file: "/gifts/heart.webm", emoji: "❤️" },
  { id: "butterfly",   name: "Butterfly",    lotus: 2500,   animated: true,  file: "/gifts/butterfly.webm", emoji: "🦋" },
  { id: "star",        name: "Star",         lotus: 3000,   animated: true,  file: "/gifts/star.webm", emoji: "⭐" },
  { id: "diamond",     name: "Diamond",      lotus: 4000,   animated: true,  file: "/gifts/diamond.webm", emoji: "💎" },
  { id: "crown",       name: "Crown",        lotus: 5000,   animated: true,  file: "/gifts/crown.webm", emoji: "👑" },
  { id: "champagne",   name: "Champagne",    lotus: 6000,   animated: true,  file: "/gifts/champagne.webm", emoji: "🥂" },
  { id: "velvetbox",   name: "Velvet Box",   lotus: 7000,   animated: true,  file: "/gifts/velvetbox.webm", emoji: "🎁" },
  { id: "fireworks",   name: "Fireworks",    lotus: 8000,   animated: true,  file: "/gifts/fireworks.webm", emoji: "🎆" },
  { id: "lightning",   name: "Lightning",    lotus: 9000,   animated: true,  file: "/gifts/lightning.webm", emoji: "⚡" },
  { id: "musicnotes",  name: "Music Notes",  lotus: 10000,  animated: true,  file: "/gifts/musicnotes.webm", emoji: "🎶" },
  { id: "ring",        name: "Ring",         lotus: 12000,  animated: true,  file: "/gifts/ring.webm", emoji: "💍" },
  { id: "car",         name: "Luxury Car",   lotus: 15000,  animated: true,  file: "/gifts/car.webm", emoji: "🏎️" },
  { id: "yacht",       name: "Yacht",        lotus: 20000,  animated: true,  file: "/gifts/yacht.webm", emoji: "🛥️" },
  { id: "castle",      name: "Castle",       lotus: 25000,  animated: true,  file: "/gifts/castle.webm", emoji: "🏰" },
  { id: "jet",         name: "Private Jet",  lotus: 30000,  animated: true,  file: "/gifts/jet.webm", emoji: "✈️" },
  { id: "candle",      name: "Candlelight",  lotus: 1200,   animated: true,  file: "/gifts/candle.webm", emoji: "🕯️" },
  { id: "kiss",        name: "Kiss",         lotus: 1800,   animated: true,  file: "/gifts/kiss.webm", emoji: "💋" },
  { id: "bear",        name: "Teddy Bear",   lotus: 2200,   animated: true,  file: "/gifts/bear.webm", emoji: "🧸" },
  { id: "pearl",       name: "Pearl",        lotus: 2600,   animated: true,  file: "/gifts/pearl.webm", emoji: "🦪" },
  { id: "lipstick",    name: "Lipstick",     lotus: 2800,   animated: true,  file: "/gifts/lipstick.webm", emoji: "💄" },
  { id: "mirror",      name: "Mirror",       lotus: 3200,   animated: true,  file: "/gifts/mirror.webm", emoji: "🪞" },
  { id: "piano",       name: "Piano",        lotus: 3500,   animated: true,  file: "/gifts/piano.webm", emoji: "🎹" },
  { id: "violin",      name: "Violin",       lotus: 3600,   animated: true,  file: "/gifts/violin.webm", emoji: "🎻" },
  { id: "guitar",      name: "Guitar",       lotus: 3700,   animated: true,  file: "/gifts/guitar.webm", emoji: "🎸" },
  { id: "dragon",      name: "Dragon",       lotus: 40000,  animated: true,  file: "/gifts/dragon.webm", emoji: "🐉" },
  { id: "phoenix",     name: "Phoenix",      lotus: 45000,  animated: true,  file: "/gifts/phoenix.webm", emoji: "🔥" },
  { id: "lion",        name: "Lion",         lotus: 48000,  animated: true,  file: "/gifts/lion.webm", emoji: "🦁" },
  { id: "tiger",       name: "Tiger",        lotus: 49000,  animated: true,  file: "/gifts/tiger.webm", emoji: "🐅" },
  { id: "money",       name: "Money Rain",   lotus: 1500,   animated: true,  file: "/gifts/money.webm", emoji: "💵" },
  { id: "rosebouquet", name: "Bouquet",      lotus: 1700,   animated: true,  file: "/gifts/rosebouquet.webm", emoji: "💐" },
  { id: "perfume",     name: "Perfume",      lotus: 2000,   animated: true,  file: "/gifts/perfume.webm", emoji: "🌸" },
  { id: "heels",       name: "High Heels",   lotus: 2200,   animated: true,  file: "/gifts/heels.webm", emoji: "👠" },
  { id: "bag",         name: "Luxury Bag",   lotus: 3000,   animated: true,  file: "/gifts/bag.webm", emoji: "👜" },
  { id: "watch",       name: "Watch",        lotus: 3500,   animated: true,  file: "/gifts/watch.webm", emoji: "⌚" },
  { id: "necklace",    name: "Necklace",     lotus: 5000,   animated: true,  file: "/gifts/necklace.webm", emoji: "📿" },
  { id: "champion",    name: "Champion Cup", lotus: 5500,   animated: true,  file: "/gifts/champion.webm", emoji: "🏆" },
  { id: "dance",       name: "Dance",        lotus: 6000,   animated: true,  file: "/gifts/dance.webm", emoji: "💃" },
  { id: "wine",        name: "Wine",         lotus: 7000,   animated: true,  file: "/gifts/wine.webm", emoji: "🍷" },
  { id: "cigar",       name: "Cigar",        lotus: 7500,   animated: true,  file: "/gifts/cigar.webm", emoji: "🚬" },
  { id: "goldbar",     name: "Gold Bar",     lotus: 9000,   animated: true,  file: "/gifts/goldbar.webm", emoji: "🏅" },
  { id: "crownjewel",  name: "Crown Jewel",  lotus: 12000,  animated: true,  file: "/gifts/crownjewel.webm", emoji: "👑" },
  { id: "unicorn",     name: "Unicorn",      lotus: 13000,  animated: true,  file: "/gifts/unicorn.webm", emoji: "🦄" },
  { id: "galaxy",      name: "Galaxy",       lotus: 15000,  animated: true,  file: "/gifts/galaxy.webm", emoji: "🌌" },
  { id: "volcano",     name: "Volcano",      lotus: 18000,  animated: true,  file: "/gifts/volcano.webm", emoji: "🌋" },
  { id: "island",      name: "Island",       lotus: 20000,  animated: true,  file: "/gifts/island.webm", emoji: "🏝️" },
  { id: "worldtour",   name: "World Tour",   lotus: 500000, animated: true, file: "/gifts/worldtour.webm", emoji: "🌍" },
];

function isVideo(path?: string) {
  if (!path) return false;
  const p = path.toLowerCase();
  return p.endsWith(".mp4") || p.endsWith(".webm");
}
function isImage(path?: string) {
  if (!path) return false;
  const p = path.toLowerCase();
  return (
    p.endsWith(".gif") ||
    p.endsWith(".webp") ||
    p.endsWith(".png") ||
    p.endsWith(".jpg") ||
    p.endsWith(".jpeg") ||
    p.endsWith(".svg")
  );
}

export default function GiftsPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = useMemo(() => {
    const filtered = GIFTS.filter(g =>
      (g.name + " " + g.id).toLowerCase().includes(q.toLowerCase())
    );
    return filtered.sort((a, b) =>
      sort === "asc" ? a.lotus - b.lotus : b.lotus - a.lotus
    );
  }, [q, sort]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Header */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          Gifts — Internal Catalog
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Drop your animated files in <b>/public/gifts/</b> (e.g. <i>lotus.webm</i>).  
          If a file exists, it will play; otherwise emoji fallback 🎁.
        </p>
      </section>

      {/* Filters */}
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
            <b>Tip :</b> use short loop videos (webm/mp4), ≤ 1 MB.  
            Images (gif/webp/png/svg) also work.
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {list.map((g) => (
            <article
              key={g.id}
              className="card"
              style={{
                display: "grid",
                gap: 10,
                padding: 16,
                borderRadius: 14,
                background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
                border: "1px solid rgba(212,175,55,0.22)",
                boxShadow: "0 10px 26px rgba(0,0,0,.30)",
              }}
            >
              {/* Media */}
              <div
                style={{
                  height: 120,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 12,
                  background: "rgba(0,0,0,.25)",
                  border: "1px solid rgba(212,175,55,.22)",
                  overflow: "hidden",
                }}
              >
                {g.file ? (
                  isVideo(g.file) ? (
                    <video
                      src={g.file}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ maxWidth: 140, maxHeight: 120 }}
                    />
                  ) : isImage(g.file) ? (
                    <Image
                      src={g.file}
                      alt={g.name}
                      width={140}
                      height={120}
                      unoptimized
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <div style={{ fontSize: 42 }}>{g.emoji || "🎁"}</div>
                  )
                ) : (
                  <div style={{ fontSize: 42 }}>{g.emoji || "🎁"}</div>
                )}
              </div>

              {/* Infos */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontWeight: 800, color: "#D4AF37" }}>{g.name}</div>
                <div style={{ fontWeight: 700 }}>
                  {g.lotus.toLocaleString("en-US")}{" "}
                  <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#d7c9b3" }}>
                {g.animated ? "Animated ✨" : "Static"}
              </div>

              {/* Actions */}
              <div className="btn-row-2" style={{ marginTop: 4 }}>
                <a className="btn3d btn3d--velvet" href={`/u/alice?gift=${g.id}`}>Preview</a>
                <GiftButton className="btn3d btn3d--gold" label="Send test" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
  }
