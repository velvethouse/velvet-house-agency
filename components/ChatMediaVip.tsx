// components/ChatMediaVip.tsx
"use client";

import { useState } from "react";

type Props = {
  url: string;             // média (image ou vidéo)
  label?: string;          // ex: "Photo"
  price: number;           // en Lotus
  isGold?: boolean;        // statut user
  isVip?: boolean;         // statut user
};

export default function ChatMediaVip({ url, label = "Media", price, isGold = false, isVip = true }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);

  function unlock() {
    if (isGold) {
      setUnlocked(true);
      setExpiresAt(null); // lifetime
    } else {
      const exp = new Date(Date.now() + 3 * 24 * 3600 * 1000);
      setUnlocked(true);
      setExpiresAt(exp);
    }
  }

  const remaining =
    expiresAt && expiresAt.getTime() > Date.now()
      ? Math.ceil((expiresAt.getTime() - Date.now()) / (24 * 3600 * 1000))
      : null;

  return (
    <div
      className="card"
      style={{
        padding: 8,
        borderRadius: 12,
        background: "linear-gradient(180deg, rgba(15,15,15,.25), rgba(15,15,15,.18))",
        border: "1px solid rgba(212,175,55,.22)",
      }}
    >
      {/* Media */}
      <div
        style={{
          width: 220,
          height: 140,
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(0,0,0,.25)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Locked / Unlocked state */}
      {!unlocked ? (
        <button
          className="btn3d btn3d--gold"
          style={{ width: "100%", marginTop: 8 }}
          onClick={unlock}
        >
          Unlock for {price.toLocaleString("en-US")} Lotus
        </button>
      ) : (
        <div style={{ marginTop: 8, fontSize: 13, color: "#d7c9b3" }}>
          {isGold ? (
            <b style={{ color: "#D4AF37" }}>Saved to Library+ (lifetime)</b>
          ) : remaining ? (
            <span>
              Access granted — <b style={{ color: "#D4AF37" }}>{remaining} days left</b>
            </span>
          ) : (
            <b style={{ color: "#e67e22" }}>Expired</b>
          )}
        </div>
      )}
    </div>
  );
}
