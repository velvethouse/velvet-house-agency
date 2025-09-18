"use client";

import React, { useState } from "react";
import GiftPlayer from "@/components/GiftPlayer";

interface LiveGiftOverlayProps {
  username: string;
}

export default function LiveGiftOverlay({ username }: LiveGiftOverlayProps) {
  const [activeGift, setActiveGift] = useState<string | null>(null);

  // Liste officielle des 48 gifts
  const giftList = [
    "lotus", "rose", "heart", "champagne", "crown", "star", "diamond",
    "butterfly", "fireworks", "lightning", "music", "ring", "car",
    "yacht", "castle", "jet", "lion", "tiger", "dragon", "phoenix",
    "worldtour", "chocolate", "kiss", "cake", "giftbox", "clover",
    "bow", "candle", "flower", "cocktail", "panda", "penguin", "bear",
    "koala", "fox", "panther", "horse", "dog", "cat", "giraffe", "monkey",
    "elephant", "dolphin", "unicorn", "crownjewel", "rainbow", "starfall",
    "sun", "moon", "galaxy",
  ];

  // Simulation → quand un gift est cliqué, il s'affiche en overlay
  const handleGiftClick = (gift: string) => {
    setActiveGift(gift);
    setTimeout(() => setActiveGift(null), 4000); // disparaît après 4s
  };

  return (
    <div className="relative w-full h-full">
      {/* Zone de test rapide pour cliquer sur un gift */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-80 p-2 rounded shadow">
        <h3 className="font-bold mb-2 text-sm">🎁 Gifts</h3>
        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
          {giftList.map((gift) => (
            <button
              key={gift}
              onClick={() => handleGiftClick(gift)}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
            >
              {gift}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay animé */}
      {activeGift && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <GiftPlayer name={activeGift} size={300} play loop={false} />
        </div>
      )}
    </div>
  );
      }
