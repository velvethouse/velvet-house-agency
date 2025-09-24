"use client";

import { useState } from "react";
import GiftPlayer from "@/components/GiftPlayer";
import gifts from "@/public/data/gifts.json";
import { toast } from "sonner";
import { useGiftStore } from "@/stores/giftStore";

export default function LiveGiftPanel() {
  const [lotus, setLotus] = useState(3000); // TEMP: simulate balance
  const { setGift, clearGift } = useGiftStore();

  const handleSendGift = (giftName: string, giftPrice: number) => {
    if (lotus < giftPrice) {
      toast.error("Insufficient Lotus 💸");
      return;
    }

    setLotus((prev) => Math.max(prev - giftPrice, 0));
    setGift({
      id: giftName,
      name: giftName,
      animation: giftName + ".json",
      amount: giftPrice,
      duration: 5, // seconds
    });

    setTimeout(() => clearGift(), 5000); // 5s
  };

  return (
    <div className="w-full bg-black text-white p-4 rounded-xl">
      <div className="mb-3 text-center text-lg font-bold">🎁 Send a Gift</div>

      <div className="grid grid-cols-4 gap-3">
        {gifts.map((gift) => (
          <button
            key={gift.name}
            onClick={() => handleSendGift(gift.name, gift.price)}
            className="flex flex-col items-center justify-center bg-white/10 p-2 rounded-xl hover:bg-white/20 transition"
          >
            <img src={gift.icon} alt={gift.name} className="w-10 h-10 mb-1" />
            <span className="text-xs">{gift.name}</span>
            <span className="text-xs text-yellow-400">{gift.price} ♢</span>
          </button>
        ))}
      </div>
    </div>
  );
}
