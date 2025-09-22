"use client";

import { useState } from "react";
import GiftPlayer from "@/app/components/GiftPlayer";
import gifts from "@/public/data/gifts.json";

export default function LiveGiftPanel() {
  const [activeGift, setActiveGift] = useState<string | null>(null);

  const handleSendGift = (giftName: string) => {
    setActiveGift(giftName);
    setTimeout(() => setActiveGift(null), 5000); // reset après 5s
  };

  return (
    <div className="w-full bg-black text-white p-4 border-t border-gray-700">
      <div className="mb-3 text-center text-lg font-bold">🎁 Send a Gift</div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {gifts.map((gift) => (
          <button
            key={gift.name}
            onClick={() => handleSendGift(gift.name)}
            className="flex flex-col items-center justify-center bg-white text-black px-2 py-1 rounded hover:bg-yellow-200 transition text-xs font-semibold"
          >
            <span className="text-lg">{gift.symbol}</span>
            <span>{gift.price} ♢</span>
          </button>
        ))}
      </div>

      {activeGift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <GiftPlayer name={activeGift} size={220} autoPlay loop={false} />
        </div>
      )}
    </div>
  );
}
