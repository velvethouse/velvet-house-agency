"use client";

import { useState } from "react";
import GiftPlayer from "@/components/GiftPlayer";
import gifts from "@/public/data/gifts.json";
import { useFollowerStore } from "@/stores/followerStore"; // Hypothèse : store avec solde
import { toast } from "sonner"; // Pour message d'erreur ou confirmation

export default function LiveGiftPanel() {
  const [activeGift, setActiveGift] = useState<string | null>(null);
  const { lotus, deductLotus } = useFollowerStore(); // solde + méthode déduction

  const handleSendGift = (giftName: string, giftPrice: number) => {
    if (lotus < giftPrice) {
      toast.error("Insufficient Lotus 💸");
      return;
    }

    // Déduire le montant du solde
    deductLotus(giftPrice);
    setActiveGift(giftName);

    // Réinitialiser l'animation après 4 secondes
    setTimeout(() => setActiveGift(null), 4000);
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

      {/* Zone animation */}
      {activeGift && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <GiftPlayer giftName={activeGift} />
        </div>
      )}
    </div>
  );
      }
