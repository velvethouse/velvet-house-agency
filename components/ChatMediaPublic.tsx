// components/ChatMediaPublic.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  thumbUrl: string;                 // URL du média (on l'affiche flouté)
  label?: string;                   // ex: "Photo", "Video"
  from?: string;                    // contexte (ex: "chat-public")
};

export default function ChatMediaPublic({ thumbUrl, label = "Media", from = "chat-public" }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function goVip() {
    const qp = new URLSearchParams({ reason: "vip-or-gold", from });
    router.push(`/vip?${qp.toString()}`);
  }

  return (
    <div style={{ position: "relative" }}>
      {/* thumb floutée */}
      <div
        onClick={() => setOpen(true)}
        title="VIP only — click for details"
        style={{
          width: 220,
          height: 140,
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(0,0,0,.25)",
          cursor: "pointer",
          position: "relative",
          border: "1px solid rgba(212,175,55,.22)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbUrl}
          alt={label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(10px) grayscale(30%)",
            transform: "scale(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            color: "#f5f5f5",
            fontWeight: 800,
            textShadow: "0 2px 8px rgba(0,0,0,.6)",
          }}
        >
          🔒 VIP only
        </div>
      </div>

      {/* modal simple */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(0,0,0,.55)",
            display: "grid",
            placeItems: "center",
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card"
            style={{
              width: "min(92vw, 420px)",
              padding: 16,
              borderRadius: 16,
              background: "linear-gradient(180deg, rgba(15,15,15,.85), rgba(15,15,15,.65))",
              border: "1px solid rgba(212,175,55,.35)",
              boxShadow: "0 10px 34px rgba(0,0,0,.5)",
              display: "grid",
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 900, color: "#D4AF37", fontSize: 18 }}>VIP only</div>
            <div style={{ color: "#e9dfcf", lineHeight: 1.6 }}>
              This media is available in <b>VIP chat</b>. Become VIP or VIP Gold to unlock and view it.
            </div>

            <div
              style={{
                width: "100%",
                height: 150,
                borderRadius: 12,
                overflow: "hidden",
                background: "rgba(0,0,0,.25)",
                border: "1px solid rgba(212,175,55,.22)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbUrl}
                alt={label}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(8px) grayscale(20%)" }}
              />
            </div>

            <div className="btn-row-2">
              <button className="btn3d btn3d--gold" onClick={goVip}>See VIP plans</button>
              <button className="btn3d btn3d--velvet" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
              }
