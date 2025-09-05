// app/gifts/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useGiftStore } from "@/stores/giftStore";

type Gift = {
  id: string;
  name: string;
  lotus: number;
  file?: string;          // URL d’un média dans /public (image/vidéo)
  emoji?: string;         // fallback si pas de fichier
};

const GIFTS: Gift[] = [
  // ✅ Lotus pointe vers un fichier qui existe déjà dans /public
  { id: "lotus", name: "Lotus", lotus: 1000, file: "/hero.png", emoji: "🌸" },

  // Exemples supplémentaires (utilisent l’emoji par défaut tant que les fichiers ne sont pas uploadés dans /public/gifts/)
  { id: "rose",  name: "Rose",  lotus: 1500, /* file: "/gifts/rose.webm" */,  emoji: "🌹" },
  { id: "heart", name: "Heart", lotus: 2000, /* file: "/gifts/heart.webm" */, emoji: "❤️" },
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
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* En-tête */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          Gifts — Internal Catalog
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Pour tester maintenant, <b>Lotus</b> utilise <code>/hero.png</code>.
          Quand tu auras uploadé tes médias, mets-les dans <code>/public/gifts/</code> (ex. <i>/gifts/rose.webm</i>).
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
            Uploads : <code>/public/gifts/</code> (vidéos .webm/.mp4 ou images .gif/.png/.svg).
          </div>
        </div>
      </section>

      {/* Grille */}
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

              {/* Actions */}
              <div className="btn-row-2" style={{ marginTop: 4 }}>
                <a className="btn3d btn3d--velvet" href={`/u/alice?gift=${g.id}`}>Preview</a>
                <button
                  className="btn3d btn3d--gold"
                  type="button"
                  onClick={() =>
                    push({
                      id: g.id,
                      name: g.name,
                      kind: "static",
                      src: g.file ?? "/hero.png", // fallback sûr
                      durationMs: 2000,
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
