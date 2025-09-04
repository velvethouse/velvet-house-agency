// components/GiftButton.tsx  (REMPLACEMENT COMPLET)
"use client";

import Image from "next/image";

type GiftButtonProps = {
  // === Mode BOUTON (utilisé par MediaCard) ===
  target?: string;         // ex: slug créatrice
  className?: string;      // ex: "btn3d btn3d--gold"
  label?: string;          // ex: "Unlock with Lotus ✨"
  onClick?: () => void;    // action onClick (optionnel)

  // === Mode CARTE (catalogue / page /gifts) ===
  name?: string;           // ex: "Lotus"
  lotus?: number;          // prix en Lotus
  animated?: boolean;      // true si gift animé
  file?: string;           // /gifts/xxx.mp4|.webm|.gif|.webp|.png|.svg
  emoji?: string;          // fallback si pas de fichier
  onPreview?: () => void;  // action prévisualiser (optionnel)
  onSend?: () => void;     // action envoyer (optionnel)
};

function isVideo(path?: string) {
  if (!path) return false;
  const e = path.toLowerCase();
  return e.endsWith(".mp4") || e.endsWith(".webm");
}

/**
 * Composant polyvalent :
 * - si "label" est fourni (ou pas de name/lotus) -> rend un BOUTON (utilisé dans MediaCard).
 * - sinon -> rend une CARTE cadeau (catalogue /gifts).
 */
export default function GiftButton(props: GiftButtonProps) {
  const {
    // bouton
    target,
    className,
    label,
    onClick,
    // carte
    name,
    lotus,
    animated,
    file,
    emoji = "🎁",
    onPreview,
    onSend,
  } = props;

  // ======= MODE BOUTON (utilisé dans MediaCard) =======
  const isButtonMode = !!label || (!name && !lotus);

  if (isButtonMode) {
    return (
      <button
        type="button"
        className={className ?? "btn3d btn3d--gold"}
        onClick={onClick ?? onSend}
        // on peut utiliser "target" si tu veux logger/envoyer le gift vers une créatrice
        data-target={target ?? ""}
      >
        {label ?? "Send gift"}
      </button>
    );
  }

  // ======= MODE CARTE (catalogue) =======
  const Media = () => {
    if (file) {
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
      return (
        <Image
          src={file}
          alt={`${name} animation`}
          width={120}
          height={120}
          unoptimized
          style={{ borderRadius: 8, objectFit: "contain" }}
        />
      );
    }
    if (animated && (name || "").toLowerCase() === "lotus") {
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
          {typeof lotus === "number" ? lotus.toLocaleString("en-US") : "--"}{" "}
          <span style={{ fontSize: 12, color: "#d7c9b3" }}>Lotus</span>
        </div>
      </div>

      {/* badges */}
      <div style={{ fontSize: 13, color: "#d7c9b3" }}>
        {animated ? "Animated ✨" : "Static"}
      </div>

      {/* actions */}
      <div className="btn-row-2" style={{ marginTop: 4 }}>
        <button onClick={onPreview} className="btn3d btn3d--velvet" type="button">
          Preview
        </button>
        <button onClick={onSend} className="btn3d btn3d--gold" type="button">
          Send
        </button>
      </div>
    </article>
  );
}
