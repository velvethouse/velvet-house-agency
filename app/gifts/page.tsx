// app/gifts/page.tsx
"use client";

import { useMemo, useState, useRef, useEffect, useState as useReactState } from "react";
import Image from "next/image";
import { useGiftStore } from "@/stores/giftStore";

type Gift = {
  id: string;
  name: string;
  lotus: number;
  file?: string;   // URL d’un média existant dans /public (webm/mp4/gif/png/svg…)
  emoji?: string;  // fallback visuel
};

// === 50 gifts (tous pointent vers /public/gifts/*.webm) ===
const GIFTS: Gift[] = [
  { id: "lotus",       name: "Lotus",        lotus: 1000,   file: "/gifts/lotus.webm",       emoji: "🌸" },
  { id: "rose",        name: "Rose",         lotus: 1500,   file: "/gifts/rose.webm",        emoji: "🌹" },
  { id: "heart",       name: "Heart",        lotus: 2000,   file: "/gifts/heart.webm",       emoji: "❤️" },
  { id: "butterfly",   name: "Butterfly",    lotus: 2500,   file: "/gifts/butterfly.webm",   emoji: "🦋" },
  { id: "star",        name: "Star",         lotus: 3000,   file: "/gifts/star.webm",        emoji: "⭐" },
  { id: "diamond",     name: "Diamond",      lotus: 4000,   file: "/gifts/diamond.webm",     emoji: "💎" },
  { id: "crown",       name: "Crown",        lotus: 5000,   file: "/gifts/crown.webm",       emoji: "👑" },
  { id: "champagne",   name: "Champagne",    lotus: 6000,   file: "/gifts/champagne.webm",   emoji: "🥂" },
  { id: "velvetbox",   name: "Velvet Box",   lotus: 7000,   file: "/gifts/velvetbox.webm",   emoji: "🎁" },
  { id: "fireworks",   name: "Fireworks",    lotus: 8000,   file: "/gifts/fireworks.webm",   emoji: "🎆" },
  { id: "lightning",   name: "Lightning",    lotus: 9000,   file: "/gifts/lightning.webm",   emoji: "⚡" },
  { id: "musicnotes",  name: "Music Notes",  lotus: 10000,  file: "/gifts/musicnotes.webm",  emoji: "🎶" },
  { id: "ring",        name: "Ring",         lotus: 12000,  file: "/gifts/ring.webm",        emoji: "💍" },
  { id: "car",         name: "Luxury Car",   lotus: 15000,  file: "/gifts/car.webm",         emoji: "🏎️" },
  { id: "yacht",       name: "Yacht",        lotus: 20000,  file: "/gifts/yacht.webm",       emoji: "🛥️" },
  { id: "castle",      name: "Castle",       lotus: 25000,  file: "/gifts/castle.webm",      emoji: "🏰" },
  { id: "jet",         name: "Private Jet",  lotus: 30000,  file: "/gifts/jet.webm",         emoji: "✈️" },
  { id: "candle",      name: "Candlelight",  lotus: 1200,   file: "/gifts/candle.webm",      emoji: "🕯️" },
  { id: "kiss",        name: "Kiss",         lotus: 1800,   file: "/gifts/kiss.webm",        emoji: "💋" },
  { id: "bear",        name: "Teddy Bear",   lotus: 2200,   file: "/gifts/bear.webm",        emoji: "🧸" },
  { id: "pearl",       name: "Pearl",        lotus: 2600,   file: "/gifts/pearl.webm",       emoji: "🦪" },
  { id: "lipstick",    name: "Lipstick",     lotus: 2800,   file: "/gifts/lipstick.webm",    emoji: "💄" },
  { id: "mirror",      name: "Mirror",       lotus: 3200,   file: "/gifts/mirror.webm",      emoji: "🪞" },
  { id: "piano",       name: "Piano",        lotus: 3500,   file: "/gifts/piano.webm",       emoji: "🎹" },
  { id: "violin",      name: "Violin",       lotus: 3600,   file: "/gifts/violin.webm",      emoji: "🎻" },
  { id: "guitar",      name: "Guitar",       lotus: 3700,   file: "/gifts/guitar.webm",      emoji: "🎸" },
  { id: "dragon",      name: "Dragon",       lotus: 40000,  file: "/gifts/dragon.webm",      emoji: "🐉" },
  { id: "phoenix",     name: "Phoenix",      lotus: 45000,  file: "/gifts/phoenix.webm",     emoji: "🔥" },
  { id: "lion",        name: "Lion",         lotus: 48000,  file: "/gifts/lion.webm",        emoji: "🦁" },
  { id: "tiger",       name: "Tiger",        lotus: 49000,  file: "/gifts/tiger.webm",       emoji: "🐅" },
  { id: "money",       name: "Money Rain",   lotus: 1500,   file: "/gifts/money.webm",       emoji: "💵" },
  { id: "rosebouquet", name: "Bouquet",      lotus: 1700,   file: "/gifts/rosebouquet.webm", emoji: "💐" },
  { id: "perfume",     name: "Perfume",      lotus: 2000,   file: "/gifts/perfume.webm",     emoji: "🌸" },
  { id: "heels",       name: "High Heels",   lotus: 2200,   file: "/gifts/heels.webm",       emoji: "👠" },
  { id: "bag",         name: "Luxury Bag",   lotus: 3000,   file: "/gifts/bag.webm",         emoji: "👜" },
  { id: "watch",       name: "Watch",        lotus: 3500,   file: "/gifts/watch.webm",       emoji: "⌚" },
  { id: "necklace",    name: "Necklace",     lotus: 5000,   file: "/gifts/necklace.webm",    emoji: "📿" },
  { id: "champion",    name: "Champion Cup", lotus: 5500,   file: "/gifts/champion.webm",    emoji: "🏆" },
  { id: "dance",       name: "Dance",        lotus: 6000,   file: "/gifts/dance.webm",       emoji: "💃" },
  { id: "wine",        name: "Wine",         lotus: 7000,   file: "/gifts/wine.webm",        emoji: "🍷" },
  { id: "cigar",       name: "Cigar",        lotus: 7500,   file: "/gifts/cigar.webm",       emoji: "🚬" },
  { id: "goldbar",     name: "Gold Bar",     lotus: 9000,   file: "/gifts/goldbar.webm",     emoji: "🏅" },
  { id: "crownjewel",  name: "Crown Jewel",  lotus: 12000,  file: "/gifts/crownjewel.webm",  emoji: "👑" },
  { id: "unicorn",     name: "Unicorn",      lotus: 13000,  file: "/gifts/unicorn.webm",     emoji: "🦄" },
  { id: "galaxy",      name: "Galaxy",       lotus: 15000,  file: "/gifts/galaxy.webm",      emoji: "🌌" },
  { id: "volcano",     name: "Volcano",      lotus: 18000,  file: "/gifts/volcano.webm",     emoji: "🌋" },
  { id: "island",      name: "Island",       lotus: 20000,  file: "/gifts/island.webm",      emoji: "🏝️" },
  { id: "worldtour",   name: "World Tour",   lotus: 500000, file: "/gifts/worldtour.webm",   emoji: "🌍" }
];

// Détecteurs simples
const isVideo = (p?: string) => !!p && (p.endsWith(".webm") || p.endsWith(".mp4"));
const isImage = (p?: string) =>
  !!p && (p.endsWith(".gif") || p.endsWith(".webp") || p.endsWith(".png") || p.endsWith(".jpg") || p.endsWith(".jpeg") || p.endsWith(".svg"));

// Composant media avec fallback si erreur de chargement
function GiftMedia({ file, name, emoji }: { file?: string; name: string; emoji?: string }) {
  const [failed, setFailed] = useReactState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setFailed(false); // reset si file change
  }, [file]);

  if (!file || failed) {
    return <div style={{ fontSize: 42 }}>{emoji || "🎁"}</div>;
  }

  if (isVideo(file)) {
    return (
      <video
        ref={videoRef}
        src={file}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setFailed(true)}
        style={{ maxWidth: 140, maxHeight: 120 }}
      />
    );
  }

  if (isImage(file)) {
    return (
      <Image
        src={file}
        alt={name}
        width={140}
        height={120}
        unoptimized
        onError={() => setFailed(true)}
        style={{ objectFit: "contain" }}
      />
    );
  }

  return <div style={{ fontSize: 42 }}>{emoji || "🎁"}</div>;
}

export default function GiftsPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const push = useGiftStore((s) => s.push);

  const list = useMemo(() => {
    const filtered = GIFTS.filter((g) =>
      (g.name + " " + g.id).toLowerCase().includes(q.toLowerCase())
    );
    return filtered.sort((a, b) => (sort === "asc" ? a.lotus - b.lotus : b.lotus - a.lotus));
  }, [q, sort]);

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)", color: "#f5f5f5" }}>
      {/* En-tête */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>Gifts — Internal Catalog</h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Les médias doivent être dans <code>/public/gifts/</code>. Si un fichier manque, l’emoji s’affiche.
        </p>
      </section>

      {/* Filtres */}
      <section style={{ maxWidth: 1100, margin: "10px auto 6px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <input className="input-velvet" placeholder="Search gifts…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="select-velvet" value={sort} onChange={(e) => setSort(e.target.value as "asc" | "desc")}>
            <option value="asc">Price ↑ (Lotus)</option>
            <option value="desc">Price ↓ (Lotus)</option>
          </select>
        </div>
      </section>

      {/* Grille */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {list.map((g) => (
            <article key={g.id} className="card" style={{
              display: "grid", gap: 10, padding: 16, borderRadius: 14,
              background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
              border: "1px solid rgba(212,175,55,0.22)", boxShadow: "0 10px 26px rgba(0,0,0,.30)"
            }}>
              {/* Media */}
              <div style={{
                height: 120, display: "grid", placeItems: "center",
                borderRadius: 12, background: "rgba(0,0,0,.25)",
                border: "1px solid rgba(212,175,55,.22)", overflow: "hidden"
              }}>
                <GiftMedia file={g.file} name={g.name} emoji={g.emoji} />
              </div>

              {/* Infos */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontWeight: 800, color: "#D4AF37" }}>{g.name}</div>
                <div style={{ fontWeight: 700 }}>
                  {g.lotus.toLocaleString("en-US")} <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
                </div>
              </div>

              {/* Actions */}
              <div className="btn-row-2" style={{ marginTop: 4 }}>
                <a className="btn3d btn3d--velvet" href={`/u/alice?gift=${g.id}`}>Preview</a>
                <button
                  className="btn3d btn3d--gold"
                  type="button"
                  onClick={() => push({
                    id: g.id,
                    name: g.name,
                    kind: "static",
                    src: g.file ?? "/hero.png", // fallback sûr pour l’overlay
                    durationMs: 2000
                  })}
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
