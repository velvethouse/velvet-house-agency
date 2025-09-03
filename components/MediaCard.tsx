"use client";

import { useState } from "react";
import GiftButton from "./GiftButton";

export default function MediaCard({
  src,
  type = "image",           // "image" | "video"
  alt = "media",
  watermark = "VELVET HOUSE",
  username = "",
  // Règles d'accès
  isNSFW = false,           // 🔴 dénudé ?
  giftUnlocked = false,     // ← à true après paiement du gift
  requiredGiftLabel = "Lotus ✨",
  target = "",              // slug/id de la créatrice
}: {
  src: string;
  type?: "image" | "video";
  alt?: string;
  watermark?: string;
  username?: string;
  isNSFW?: boolean;
  giftUnlocked?: boolean;
  requiredGiftLabel?: string;
  target?: string;
}) {
  // Démo : bouton "(Demo) Unlock now" pour tester sans backend
  const [manualUnlock, setManualUnlock] = useState(false);

  // 🔒 Règle: si NSFW et pas giftUnlocked → lock, même pour VIP
  const effectiveLocked = isNSFW && !giftUnlocked && !manualUnlock;

  const wmText = `${watermark} @${username || "creator"}`;

  return (
    <div className="media-card">
      {type === "video" ? (
        <video
          src={src}
          muted
          playsInline
          controls={!effectiveLocked}
          className={effectiveLocked ? "media-blur" : ""}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={effectiveLocked ? "media-blur" : ""}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/avatars/default.jpg";
            (e.currentTarget as HTMLImageElement).onerror = null;
          }}
        />
      )}

      {/* Filigrane unique centré en diagonale */}
      <div className="wm-tiles">
        <span>{wmText}</span>
      </div>

      {/* Badge 18+ si NSFW */}
      {isNSFW && (
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            padding: "4px 8px",
            borderRadius: 999,
            background: "#2c0d0d",
            color: "#f5f5f5",
            border: "1px solid rgba(212,175,55,.35)",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          18+
        </div>
      )}

      {/* Overlay lock: toujours gift pour NSFW */}
      {effectiveLocked && (
        <div className="media-lock">
          <div style={{ display: "grid", gap: 10, width: "80%", maxWidth: 260 }}>
            <div style={{ textAlign: "center", color: "#f5f5f5", fontWeight: 800 }}>
              NSFW — Locked content
            </div>

            {/* 🔑 Gift obligatoire */}
            <GiftButton
              target={target}
              className="btn3d btn3d--gold"
              label={`Unlock with ${requiredGiftLabel}`}
            />

            {/* DEMO : enlever quand backend branché */}
            <button className="btn3d btn3d--outline-gold" onClick={() => setManualUnlock(true)}>
              (Demo) Unlock now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
