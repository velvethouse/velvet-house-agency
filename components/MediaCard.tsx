"use client";

import { useState } from "react";
import GiftButton from "./GiftButton";

/**
 * Tuile média avec :
 * - image/vidéo
 * - filigrane unique centré en diagonale (watermark + @username)
 * - flou si verrouillé + overlay "Unlock with ..."
 * - bouton demo pour déverrouiller sans paiement
 */
export default function MediaCard({
  src,
  type = "image",         // "image" | "video"
  alt = "media",
  watermark = "VELVET HOUSE",
  username = "",
  locked = false,
  requiredGiftLabel = "Lotus ✨",
  target = "",
}: {
  src: string;
  type?: "image" | "video";
  alt?: string;
  watermark?: string;      // texte principal du filigrane
  username?: string;       // @username dans le filigrane
  locked?: boolean;
  requiredGiftLabel?: string;
  target?: string;         // slug/id de la créatrice
}) {
  const [isLocked, setLocked] = useState(locked);

  const wmText = `${watermark} @${username || "creator"}`;

  return (
    <div className="media-card">
      {type === "video" ? (
        <video
          src={src}
          muted
          playsInline
          controls={!isLocked}
          className={isLocked ? "media-blur" : ""}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={isLocked ? "media-blur" : ""}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/avatars/default.jpg";
            (e.currentTarget as HTMLImageElement).onerror = null;
          }}
        />
      )}

      {/* ✅ Filigrane unique centré */}
      <div className="wm-tiles">
        <span>{wmText}</span>
      </div>

      {/* Overlay lock si verrouillé */}
      {isLocked && (
        <div className="media-lock">
          <div style={{ display: "grid", gap: 10, width: "80%", maxWidth: 260 }}>
            <div style={{ textAlign: "center", color: "#f5f5f5", fontWeight: 800 }}>
              Locked content
            </div>
            <GiftButton
              target={target}
              className="btn3d btn3d--gold"
              label={`Unlock with ${requiredGiftLabel}`}
            />
            {/* DEMO : retrait quand backend branché */}
            <button
              className="btn3d btn3d--outline-gold"
              onClick={() => setLocked(false)}
            >
              (Demo) Unlock now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
