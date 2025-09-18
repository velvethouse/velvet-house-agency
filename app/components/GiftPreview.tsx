"use client";

import React from "react";
import GiftPlayer from "./GiftPlayer";

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

export default function GiftPreview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🎁 Velvet House – Gifts Preview</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {giftList.map((gift) => (
          <div key={gift} className="flex flex-col items-center">
            <GiftPlayer name={gift} size={120} loop />
            <span className="mt-2 text-sm text-gray-700">{gift}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
