// components/GiftButton.tsx  (REMPLACEMENT COMPLET)

import Image from "next/image";

type GiftButtonProps = {
  id?: string;
  name: string;           // ex: "Lotus"
  lotus: number;          // prix en Lotus (affichage)
  animated?: boolean;     // true si le gift est animé
  file?: string;          // chemin vers un fichier animé (ex: "/gifts/lotus.gif" ou ".webp" / ".png")
  emoji?: string;         // fallback si pas de fichier (ex: "🪷")
  onPreview?: () => void; // action au clic sur Preview
  onSend?: () => void;    // action au clic sur Send
};

function isVideo(path?: string) {
  if (!path) return false;
  const e = path.toLowerCase();
  return e.endsWith(".mp4") || e.endsWith(".webm");
}

export default function GiftButton({
  name,
  lotus,
  animated,
  file,
  emoji = "🎁",
  onPreview,
  onSend,
}: GiftButtonProps) {
  // Media à afficher (priorité: file > cas Lotus > emoji)
  const Media = () => {
    if (file) {
      // vidéo
      if (isVideo(file)) {
        return (
          <video
            src={file}
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: 120, maxHeight: 120, display: "block", borderRadius: 8 }}
          />
        );
      }
      // image (gif / webp / png / svg / jpg)
      return (
        <Image
          src={file}
          alt={`${name} animation`}
          width={120}
          height={120}
          unoptimized
          style={{ borderRadius: 8 }}
        />
      );
    }

    // Démo : si c'est Lotus et que "animated" est true, on affiche /gifts/lotus.gif
    if (animated && name.toLowerCase() === "lotus") {
      return (
        <Image
          src="/gifts/lotus.gif"
          alt="Lotus animation"
          width={120}
          height={120}
          unoptimized
          style={{ borderRadius: 8 }}
        />
      );
    }

    // Fallback emoji
    return <span style={{ fontSize: 42, lineHeight: 1 }}>{emoji}</span>;
  };

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
      {/* zone media */}
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
        <Media />
      </div>

      {/* titre + prix */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
        <div style={{ fontWeight: 800, color: "#D4AF37" }}>{name}</div>
        <div style={{ fontWeight: 700 }}>
          {lotus.toLocaleString("en-US")}{" "}
          <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
        </div>
      </div>

      {/* badges */}
      <div style={{ fontSize: 13, color: "#d7c9b3" }}>
        {animated ? "Animated ✨" : "Static"}
      </div>

      {/* actions */}
      <div className="btn-row-2" style={{ marginTop: 4 }}>
        <button
          onClick={onPreview}
          className="btn3d btn3d--velvet"
          type="button"
        >
          Preview
        </button>
        <button
          onClick={onSend}
          className="btn3d btn3d--gold"
          type="button"
        >
          Send
        </button>
      </div>
    </article>
  );
}
