// components/GiftStage.tsx
"use client";

import { useEffect, useRef } from "react";
import { useGiftStore } from "@/stores/giftStore";

export default function GiftStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const current = useGiftStore((state) => state.current);

  useEffect(() => {
    if (!current || !containerRef.current) return;

    const gift = document.createElement("div");
    gift.textContent = current.name;
    gift.style.position = "absolute";
    gift.style.top = "50%";
    gift.style.left = "50%";
    gift.style.transform = "translate(-50%, -50%)";
    gift.style.padding = "20px 40px";
    gift.style.background = "#D4AF37";
    gift.style.color = "#2e0d0d";
    gift.style.fontWeight = "bold";
    gift.style.fontSize = "28px";
    gift.style.borderRadius = "12px";
    gift.style.boxShadow = "0 0 20px rgba(0,0,0,0.4)";
    gift.style.zIndex = "999";

    containerRef.current.appendChild(gift);

    const timeout = setTimeout(() => {
      containerRef.current?.removeChild(gift);
    }, current.duration || 2000);

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
      }}
    />
  );
}
