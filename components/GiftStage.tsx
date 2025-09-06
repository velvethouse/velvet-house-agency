"use client";

import { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
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
    }, ms + 150); // petite marge
    return () => clearTimeout(t);
  }, [queue, shift]);

  if (!current) return null;

  const isLottie = (src?: string) => !!src && src.endsWith(".json");
  const isVideo = (src?: string) =>
    !!src && (src.endsWith(".webm") || src.endsWith(".mp4"));

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
        ) : isVideo(current.src) ? (
          <video
            src={current.src}
            autoPlay
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
