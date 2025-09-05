"use client";
import { useEffect, useRef, useState } from "react";
import { useGiftStore, type Gift } from "@/stores/giftStore";

export default function GiftStage() {
  const { queue, shift } = useGiftStore();
  const [current, setCurrent] = useState<Gift | null>(null);
  const playing = useRef(false);

  useEffect(() => {
    if (playing.current) return;
    if (queue.length === 0) return;
    const next = shift();
    if (!next) return;
    setCurrent(next);
    playing.current = true;
    const ms = next.durationMs ?? 2000;
    const t = setTimeout(() => {
      playing.current = false;
      setCurrent(null);
    }, ms + 120);
    return () => clearTimeout(t);
  }, [queue, shift]);

  if (!current) return null;

  const isVideo = (p?: string) => !!p && (p.endsWith(".webm") || p.endsWith(".mp4"));

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 60, // au-dessus du header (zIndex 50)
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          width: "min(92vw, 720px)",
          aspectRatio: "16/9",
          background: "rgba(0,0,0,.35)",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {isVideo(current.src) ? (
          <video
            src={current.src}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <img
            src={current.src}
            alt={current.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </div>
    </div>
  );
}
