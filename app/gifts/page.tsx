// app/gifts/page.tsx  (REMPLACEMENT COMPLET)
"use client";

import { useMemo, useState } from "react";
import GiftCard from "@/components/GiftCard";
import { GIFTS } from "@/data/gifts";

export default function GiftsPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = useMemo(() => {
    const filtered = GIFTS.filter(g =>
      (g.name + " " + g.id).toLowerCase().includes(q.toLowerCase())
    );
    return filtered.sort((a, b) => sort === "asc" ? a.lotus - b.lotus : b.lotus - a.lotus);
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
      {/* Titre */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          Gifts Catalog (internal)
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Drop your animated files in <b>/public/gifts/</b> (e.g. <i>lotus.mp4</i>, <i>rose.gif</i>).  
          This page will auto-render them if present, otherwise it shows a fallback 🎁.
        </p>
      </section>

      {/* Filtres */}
      <section style={{ maxWidth: 1100, margin: "10px auto 6px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <input className="input-velvet" placeholder="Search gifts…" value={q} onChange={(e)=>setQ(e.target.value)} />
          <select className="select-velvet" value={sort} onChange={(e)=>setSort(e.target.value as "asc"|"desc")}>
            <option value="asc">Price ↑ (Lotus)</option>
            <option value="desc">Price ↓ (Lotus)</option>
          </select>
          <div className="card" style={{ padding: 12, fontSize: 13, color: "#d7c9b3" }}>
            <b>Tip :</b> prefer short loop videos (mp4/webm), muted, ≤ 1 MB.
          </div>
        </div>
      </section>

      {/* Grille */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {list.map(g => (
            <GiftCard key={g.id} id={g.id} name={g.name} lotus={g.lotus} animated={g.animated} note={g.note} />
          ))}
        </div>
      </section>
    </main>
  );
}
