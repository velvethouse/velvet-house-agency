// components/GiftStage.tsx
"use client";

import { useEffect, useRef } from "react";
import { useGiftStore } from "@/stores/giftStore";

export default function GiftStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const current = useGiftStore((state) => state.current);
  const clearGift = useGiftStore((state) => state.clearGift);

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
    gift.style.color = "black";
    gift.style.borderRadius = "12px";
    gift.style.fontSize = "20px";
    gift.style.fontWeight = "bold";
    gift.style.zIndex = "9999";
    gift.style.opacity = "0.95";

    containerRef.current.appendChild(gift);

    const timeout = setTimeout(() => {
      containerRef.current?.removeChild(gift);
      clearGift(); // Nettoyage du store
    }, current.duration || 2000); // Par défaut 2 secondes

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
