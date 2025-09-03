"use client";

import { useState } from "react";
import GiftButton from "./GiftButton";

export default function MediaCard({
  src,
  type = "image",           // "image" | "video"
  alt = "media",
  watermark = "Velvet House",
  locked = false,
  requiredGiftLabel = "Gift",
  target = "",
}: {
  src: string;
  type?: "image" | "video";
  alt?: string;
  watermark?: string;
  locked?: boolean;
  requiredGiftLabel?: string;  // ex: "Lotus ✨"
  target?: string;             // slug / id créatrice
}) {
  const [isLocked, setLocked] = useState(locked);

  return (
    <div className="media-card">
      {type === "video" ? (
        <video src={src} muted playsInline controls={!isLocked} className={isLocked ? "media-blur" : ""} />
      ) : (
        <img
          src={src}
          alt={alt}
          className={isLocked ? "media-blur" : ""}
          onError={(e)=>{ e.currentTarget.src="/avatars/default.jpg"; e.currentTarget.onerror=null; }}
        />
      )}

      {/* watermark */}
      <span className="media-wm">{watermark}</span>

      {/* overlay lock */}
      {isLocked && (
        <div className="media-lock">
          <div style={{ display:"grid", gap:10, width:"80%", maxWidth:260 }}>
            <div style={{ textAlign:"center", color:"#f5f5f5", fontWeight:700 }}>
              Locked content
            </div>
            <GiftButton
              target={target}
              className="btn3d btn3d--gold"
              label={`Unlock with ${requiredGiftLabel}`}
            />
            <button className="btn3d btn3d--outline-gold"
              onClick={()=>setLocked(false)} // DEMO: simule l’unlock après gift
            >
              (Demo) Unlock now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
