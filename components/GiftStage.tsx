// components/GiftStage.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useGiftStore, type Gift } from "@/stores/giftStore";
import Lottie from "lottie-react";

const isVideo = (p?: string) =>
  !!p && (p.endsWith(".webm") || p.endsWith(".mp4"));
const isLottie = (p?: string) =>
  !!p && (p.endsWith(".json") || p.endsWith(".lottie"));

export default function GiftStage() {
  const { queue, shift } = useGiftStore();
  const [current, setCurrent] = useState<Gift | null>(null);
  const [lottieData, setLottieData] = useState<any | null>(null);
  const playing = useRef(false);

  // Lire la file d'attente
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
      setLottieData(null);
    }, ms + 120);

    return () => clearTimeout(t);
  }, [queue, shift]);

  // Charger le JSON Lottie quand nécessaire
  useEffect(() => {
    let cancelled = false;
    async function loadLottie(path: string) {
      try {
        const res = await fetch(path, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        const json = await res.json();
        if (!cancelled) setLottieData(json);
      } catch {
        if (!cancelled) setLottieData(null);
      }
    }
    if (current && isLottie(current.src)) {
      loadLottie(current.src!);
    } else {
      setLottieData(null);
    }
    return () => { cancelled = true; };
  }, [current]);

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
          lottieData ? (
            <Lottie
              animationData={lottieData}
              loop={false}
              style={{ width: "100%", height: "100%" }}
            />
          ) : null
        ) : isVideo(current.src) ? (
          <video
            src={current.src}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
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
