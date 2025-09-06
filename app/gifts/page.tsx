// app/gifts/page.tsx
"use client";

import { useMemo, useState } from "react";
import { useGiftStore } from "@/stores/giftStore";

type GiftRow = {
  id: string;
  name: string;
  lotus: number;
  file?: string;        // /gifts/xxx.json (Lottie)
  emoji?: string;       // fallback visuel si le fichier manque
  durationMs?: number;  // durée d’affichage overlay
};

const GIFTS: GiftRow[] = [
  { id: "lotus",       name: "Lotus",        lotus: 1000,   file: "/gifts/lotus.json",       emoji: "🌸", durationMs: 2200 },
  { id: "rose",        name: "Rose",         lotus: 1500,   file: "/gifts/rose.json",        emoji: "🌹", durationMs: 2000 },
  { id: "heart",       name: "Heart",        lotus: 2000,   file: "/gifts/heart.json",       emoji: "❤️", durationMs: 2000 },
  { id: "butterfly",   name: "Butterfly",    lotus: 2500,   file: "/gifts/butterfly.json",   emoji: "🦋", durationMs: 2200 },
  { id: "star",        name: "Star",         lotus: 3000,   file: "/gifts/star.json",        emoji: "⭐",  durationMs: 1800 },
  { id: "diamond",     name: "Diamond",      lotus: 4000,   file: "/gifts/diamond.json",     emoji: "💎", durationMs: 2000 },
  { id: "crown",       name: "Crown",        lotus: 5000,   file: "/gifts/crown.json",       emoji: "👑", durationMs: 2000 },
  { id: "champagne",   name: "Champagne",    lotus: 6000,   file: "/gifts/champagne.json",   emoji: "🥂", durationMs: 2000 },
  { id: "velvetbox",   name: "Velvet Box",   lotus: 7000,   file: "/gifts/velvetbox.json",   emoji: "🎁", durationMs: 2000 },
  { id: "fireworks",   name: "Fireworks",    lotus: 8000,   file: "/gifts/fireworks.json",   emoji: "🎆", durationMs: 2200 },
  { id: "lightning",   name: "Lightning",    lotus: 9000,   file: "/gifts/lightning.json",   emoji: "⚡",  durationMs: 2000 },
  { id: "musicnotes",  name: "Music Notes",  lotus: 10000,  file: "/gifts/musicnotes.json",  emoji: "🎶", durationMs: 2000 },
  { id: "ring",        name: "Ring",         lotus: 12000,  file: "/gifts/ring.json",        emoji: "💍", durationMs: 2000 },
  { id: "car",         name: "Luxury Car",   lotus: 15000,  file: "/gifts/car.json",         emoji: "🏎️", durationMs: 2200 },
  { id: "yacht",       name: "Yacht",        lotus: 20000,  file: "/gifts/yacht.json",       emoji: "🛥️", durationMs: 2200 },
  { id: "castle",      name: "Castle",       lotus: 25000,  file: "/gifts/castle.json",      emoji: "🏰", durationMs: 2200 },
  { id: "jet",         name: "Private Jet",  lotus: 30000,  file: "/gifts/jet.json",         emoji: "✈️",  durationMs: 2200 },
  { id: "candle",      name: "Candlelight",  lotus: 1200,   file: "/gifts/candle.json",      emoji: "🕯️", durationMs: 1800 },
  { id: "kiss",        name: "Kiss",         lotus: 1800,   file: "/gifts/kiss.json",        emoji: "💋", durationMs: 1800 },
  { id: "bear",        name: "Teddy Bear",   lotus: 2200,   file: "/gifts/bear.json",        emoji: "🧸", durationMs: 2000 },
  { id: "pearl",       name: "Pearl",        lotus: 2600,   file: "/gifts/pearl.json",       emoji: "🦪", durationMs: 2000 },
  { id: "lipstick",    name: "Lipstick",     lotus: 2800,   file: "/gifts/lipstick.json",    emoji: "💄", durationMs: 2000 },
  { id: "mirror",      name: "Mirror",       lotus: 3200,   file: "/gifts/mirror.json",      emoji: "🪞",  durationMs: 2000 },
  { id: "piano",       name: "Piano",        lotus: 3500,   file: "/gifts/piano.json",       emoji: "🎹", durationMs: 2000 },
  { id: "violin",      name: "Violin",       lotus: 3600,   file: "/gifts/violin.json",      emoji: "🎻", durationMs: 2000 },
  { id: "guitar",      name: "Guitar",       lotus: 3700,   file: "/gifts/guitar.json",      emoji: "🎸", durationMs: 2000 },
  { id: "dragon",      name: "Dragon",       lotus: 40000,  file: "/gifts/dragon.json",      emoji: "🐉", durationMs: 2400 },
  { id: "phoenix",     name: "Phoenix",      lotus: 45000,  file: "/gifts/phoenix.json",     emoji: "🔥", durationMs: 2400 },
  { id: "lion",        name: "Lion",         lotus: 48000,  file: "/gifts/lion.json",        emoji: "🦁", durationMs: 2200 },
  { id: "tiger",       name: "Tiger",        lotus: 49000,  file: "/gifts/tiger.json",       emoji: "🐅", durationMs: 2200 },
  { id: "money",       name: "Money Rain",   lotus: 1500,   file: "/gifts/money.json",       emoji: "💵", durationMs: 2000 },
  { id: "rosebouquet", name: "Bouquet",      lotus: 1700,   file: "/gifts/rosebouquet.json", emoji: "💐", durationMs: 2000 },
  { id: "perfume",     name: "Perfume",      lotus: 2000,   file: "/gifts/perfume.json",     emoji: "🌸", durationMs: 2000 },
  { id: "heels",       name: "High Heels",   lotus: 2200,   file: "/gifts/heels.json",       emoji: "👠", durationMs: 2000 },
  { id: "bag",         name: "Luxury Bag",   lotus: 3000,   file: "/gifts/bag.json",         emoji: "👜", durationMs: 2000 },
  { id: "watch",       name: "Watch",        lotus: 3500,   file: "/gifts/watch.json",       emoji: "⌚",  durationMs: 2000 },
  { id: "necklace",    name: "Necklace",     lotus: 5000,   file: "/gifts/necklace.json",    emoji: "📿", durationMs: 2000 },
  { id: "champion",    name: "Champion Cup", lotus: 5500,   file: "/gifts/champion.json",    emoji: "🏆", durationMs: 2000 },
  { id: "dance",       name: "Dance",        lotus: 6000,   file: "/gifts/dance.json",       emoji: "💃", durationMs: 2000 },
  { id: "wine",        name: "Wine",         lotus: 7000,   file: "/gifts/wine.json",        emoji: "🍷", durationMs: 2000 },
  { id: "cigar",       name: "Cigar",        lotus: 7500,   file: "/gifts/cigar.json",       emoji: "🚬", durationMs: 2000 },
  { id: "goldbar",     name: "Gold Bar",     lotus: 9000,   file: "/gifts/goldbar.json",     emoji: "🏅", durationMs: 2000 },
  { id: "crownjewel",  name: "Crown Jewel",  lotus: 12000,  file: "/gifts/crownjewel.json",  emoji: "👑", durationMs: 2000 },
  { id: "unicorn",     name: "Unicorn",      lotus: 13000,  file: "/gifts/unicorn.json",     emoji: "🦄", durationMs: 2200 },
  { id: "galaxy",      name: "Galaxy",       lotus: 15000,  file: "/gifts/galaxy.json",      emoji: "🌌", durationMs: 2200 },
  { id: "volcano",     name: "Volcano",      lotus: 18000,  file: "/gifts/volcano.json",     emoji: "🌋", durationMs: 2200 },
  { id: "island",      name: "Island",       lotus: 20000,  file: "/gifts/island.json",      emoji: "🏝️", durationMs: 2200 },
  { id: "worldtour",   name: "World Tour",   lotus: 500000, file: "/gifts/worldtour.json",   emoji: "🌍", durationMs: 2400 }
];

export default function GiftsPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const push = useGiftStore((s) => s.push);

  const list = useMemo(() => {
    const filtered = GIFTS.filter((g) =>
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
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif'
      }}
    >
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          Gifts — Internal Catalog (Lottie)
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Dépose les fichiers <code>.json</code> dans <code>/public/gifts/</code> avec les noms indiqués.
        </p>
      </section>

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
        </div>
      </section>

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
                boxShadow: "0 10px 26px rgba(0,0,0,.30)"
              }}
            >
              {/* Vignette simple : emoji (l’animation complète se voit en overlay) */}
              <div
                style={{
                  height: 120,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 12,
                  background: "rgba(0,0,0,.25)",
                  border: "1px solid rgba(212,175,55,.22)",
                  overflow: "hidden",
                  fontSize: 42
                }}
              >
                {g.emoji || "🎁"}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontWeight: 800, color: "#D4AF37" }}>{g.name}</div>
                <div style={{ fontWeight: 700 }}>
                  {g.lotus.toLocaleString("en-US")} <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
                </div>
              </div>

              <div className="btn-row-2" style={{ marginTop: 4 }}>
                <button
                  className="btn3d btn3d--velvet"
                  type="button"
                  onClick={() => window.alert(`Preview: ${g.name}`)}
                >
                  Preview
                </button>
                <button
                  className="btn3d btn3d--gold"
                  type="button"
                  onClick={() =>
                    push({
                      id: g.id,
                      name: g.name,
                      kind: "lottie",
                      src: g.file ?? "/hero.png",
                      durationMs: g.durationMs ?? 2000
                    })
                  }
                >
                  Send test
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
                         }
