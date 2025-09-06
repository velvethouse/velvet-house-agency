// components/GiftStage.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useGiftStore, type Gift } from "@/stores/giftStore";
import dynamic from "next/dynamic";

// react-lottie-player supporte <Player src="...json" />
const Player = dynamic(() => import("react-lottie-player").then(m => m.default), {
  ssr: false,
});

function isLottie(path?: string) {
  return !!path && (path.endsWith(".json") || path.endsWith(".lottie"));
}

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

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 60,
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
        {isLottie(current.src) ? (
          <Player
            src={current.src}
            play
            loop={false}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          // Fallback image (si jamais on pousse une image au lieu d'un json)
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
