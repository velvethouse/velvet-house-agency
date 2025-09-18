"use client";

import React from "react";
import dragon from "@/../public/gifts/dragon.json";
import phoenix from "@/../public/gifts/phoenix.json";
import worldtour from "@/../public/gifts/worldtour.json";

interface Gift {
  name: string;
  file: any;
}

const gifts: Gift[] = [
  { name: "dragon", file: dragon },
  { name: "phoenix", file: phoenix },
  { name: "worldtour", file: worldtour },
  // Ajoute ici les autres gifts si tu veux les afficher dans ce panel
];

export default function LiveGiftPanel() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold mb-4">🎁 Premium Gifts</h2>
      <ul className="space-y-2">
        {gifts.map((gift) => (
          <li key={gift.name} className="flex items-center space-x-2">
            <span className="font-medium">{gift.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
              }
