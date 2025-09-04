// /components/GiftCard.tsx  (CREATION)
"use client";

import Image from "next/image";

export type GiftCardProps = {
  id: string;
  name: string;
  lotus: number;
  animated: boolean;
  note?: string;
};

function pickFile(id: string): { src?: string; kind: "video" | "image" | "none" } {
  // on teste par ordre de préférence sans requête réseau (chemins connus)
  const exts = [".mp4", ".webm", ".gif", ".webp", ".png", ".svg"];
  for (const ext of exts) {
    // on suppose que si le fichier existe, il s'affichera; sinon on tombera sur "onError" fallback (géré côté rendu)
    return { src: `/gifts/${id}${ext}`, kind: ext === ".mp4" || ext === ".webm" ? "video" : "image" };
  }
  return { kind: "none" };
}

export default function GiftCard({ id, name, lotus, animated, note }: GiftCardProps) {
  const guess = pickFile(id);

  return (
    <article
      className="card"
      style={{
        display: "grid",
        gap: 10,
        padding: 16,
        borderRadius: 14,
        background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
        border: "1px solid rgba(212,175,55,0.22)",
        boxShadow: "0 10px 26px rgba(0,0,0,.30)",
        color: "#f5f5f5",
      }}
    >
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
        {/* rendu média : on tente la source devinée; si erreur -> fallback icône */}
        {guess.src && guess.kind === "video" ? (
          <video
            src={guess.src}
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: 140, maxHeight: 120, display: "block", borderRadius: 8 }}
            onError={(e) => {
              // fallback si le fichier n'existe pas encore
              (e.currentTarget as HTMLVideoElement).outerHTML =
                `<div style="font-size:42px;line-height:1">🎁</div>`;
            }}
          />
        ) : guess.src && guess.kind === "image" ? (
          <Image
            src={guess.src}
            alt={name}
            width={140}
            height={120}
            unoptimized
            style={{ objectFit: "contain", borderRadius: 8 }}
            onError={(e) => {
              (e.currentTarget as any).outerHTML =
                `<div style="font-size:42px;line-height:1">🎁</div>`;
            }}
          />
        ) : (
          <div style={{ fontSize: 42, lineHeight: 1 }}>🎁</div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
        <div style={{ fontWeight: 800, color: "#D4AF37" }}>{name}</div>
        <div style={{ fontWeight: 700 }}>
          {lotus.toLocaleString("en-US")} <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
        </div>
      </div>

      <div style={{ fontSize: 13, color: "#d7c9b3" }}>
        {animated ? "Animated ✨" : "Static"} {note ? `• ${note}` : ""}
      </div>

      <div className="btn-row-2" style={{ marginTop: 4 }}>
        <a className="btn3d btn3d--velvet" href={`/u/alice?gift=${id}`}>Preview</a>
        <a className="btn3d btn3d--gold"   href={`/checkout/lotus?gift=${id}`}>Buy & send</a>
      </div>
    </article>
  );
}
