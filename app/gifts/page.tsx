// app/gifts/page.tsx
"use client";

import { useGiftStore } from "@/stores/giftStore";

export default function GiftsPage() {
  const setGift = useGiftStore((state) => state.setGift);

  const handleSendLotus = () => {
    setGift({
      id: "lotus",
      name: "Lotus Gift 🌸",
      animation: "lotus.json",
      amount: 100,
      duration: 3000, // 3 secondes
    });
  };

  return (
    <main
      style={{
        padding: 40,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleSendLotus}
        style={{
          padding: "16px 32px",
          fontSize: 18,
          backgroundColor: "#D4AF37",
          color: "black",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Envoyer le gift Lotus 🌸
      </button>
    </main>
  );
}
