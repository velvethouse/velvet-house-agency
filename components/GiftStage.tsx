// components/GiftStage.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useGiftStore, type Gift } from "@/stores/giftStore";
import Player from "react-lottie-player";

const isVideo = (p?: string) => !!p && (p.endsWith(".webm") || p.endsWith(".mp4"));
const isLottie = (p?: string) => !!p && (p.endsWith(".json") || p.endsWith(".lottie"));
const isImage = (p?: string) =>
  !!p &&
  (p.endsWith(".gif") ||
    p.endsWith(".webp") ||
    p.endsWith(".png") ||
    p.endsWith(".jpg") ||
    p.endsWith(".jpeg") ||
    p.endsWith(".svg"));

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
            src={current.src}   // URL du .json Lottie (pas besoin de fetch à la main)
            play
            loop={false}
            style={{ width: "100%", height: "100%" }}
          />
        ) : isVideo(current.src) ? (
          <video
            src={current.src}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : isImage(current.src) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current.src}
            alt={current.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              color: "#D4AF37",
              fontWeight: 800,
            }}
          >
            {current.name}
          </div>
        )}
      </div>
    </div>
  );
}
