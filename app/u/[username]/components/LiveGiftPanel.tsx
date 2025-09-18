"use client";

import React from "react";
import GiftPlayer from "@/components/GiftPlayer";

const premiumGifts = ["dragon", "phoenix", "worldtour"];

export default function LiveGiftPanel() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold mb-4">🎁 Premium Gifts</h2>
      <div className="grid grid-cols-3 gap-4">
        {premiumGifts.map((gift) => (
          <div key={gift} className="flex flex-col items-center">
            <GiftPlayer name={gift} size={150} loop={false} />
            <span className="mt-2 text-sm text-gray-700">{gift}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
