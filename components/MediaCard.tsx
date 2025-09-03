"use client";

import { useState } from "react";
import GiftButton from "./GiftButton";

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
  watermark?: string;      // base du filigrane
  username?: string;       // @username dans le filigrane
  locked?: boolean;
  requiredGiftLabel?: string;
  target?: string;
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
            e.currentTarget.src = "/avatars/default.jpg";
            e.currentTarget.onerror = null;
          }}
        />
      )}

      {/* Filigrane diagonal (3 lignes) */}
      <div className="wm-tiles">
        <span>{wmText}</span>
        <span>{wmText}</span>
        <span>{wmText}</span>
      </div>

      {/* Overlay de verrouillage */}
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
            {/* DEMO: retire ce bouton quand on branchera le backend */}
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
