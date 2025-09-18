"use client";

import React, { useState } from "react";
import LiveGiftOverlay from "../components/LiveGiftOverlay";
import PrivateLiveToggle from "../components/PrivateLiveToggle";
import GiftPlayer from "@/components/GiftPlayer";

export default function PrivateLivePage({ params }: { params: { username: string } }) {
  const { username } = params;
  const [participants, setParticipants] = useState<number>(0); // compteur dynamique
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [activeGift, setActiveGift] = useState<string | null>(null);

  const handleGiftUnlock = (gift: string) => {
    if (participants >= 20) {
      alert("❌ This private live is full (20/20 viewers).");
      return;
    }
    setHasAccess(true);
    setParticipants((prev) => Math.min(prev + 1, 20));
    setActiveGift(gift);
    setTimeout(() => setActiveGift(null), 4000);
  };

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Bouton retour au public */}
      <div className="absolute top-4 right-4">
        <PrivateLiveToggle username={username} isPrivate={true} />
      </div>

      {!hasAccess ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <p className="text-gray-300 mb-4">
            🔒 This private live requires a gift to join ({participants}/20 viewers)
          </p>
          <button
            onClick={() => handleGiftUnlock("champagne")}
            className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded text-white font-bold"
          >
            🎁 Send Gift to Unlock
          </button>
        </div>
      ) : (
        <>
          {/* Zone vidéo live privé */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-400">
              🔒 Private live with {username} ({participants}/20 viewers)
            </p>
          </div>

          {/* Overlay gifts */}
          <LiveGiftOverlay username={username} />

          {/* Animation cadeau d’accès */}
          {activeGift && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <GiftPlayer name={activeGift} size={300} play loop={false} />
            </div>
          )}
        </>
      )}
    </div>
  );
                            }
