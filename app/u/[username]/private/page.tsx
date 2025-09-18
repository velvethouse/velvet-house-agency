"use client";

import React, { useState } from "react";
import LiveGiftOverlay from "../components/LiveGiftOverlay";

export default function PrivateLivePage({ params }: { params: { username: string } }) {
  const { username } = params;
  const [participants] = useState<number>(5); // simulation: 5 connectés, limite 20
  const [activeGift, setActiveGift] = useState<string | null>(null);

  const handleSendGift = (gift: string) => {
    setActiveGift(gift);
    setTimeout(() => setActiveGift(null), 4000);
  };

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Placeholder vidéo live privé */}
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-400">
          🔒 Private live with {username} ({participants}/20 viewers)
        </p>
      </div>

      {/* Gifts overlay */}
      <LiveGiftOverlay username={username} />

      {/* Chat privé du groupe */}
      <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-3 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Message the private group..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={() => handleSendGift("champagne")}
          className="px-3 py-2 bg-yellow-500 text-white rounded"
        >
          🍾 Send Gift
        </button>
      </div>

      {/* Gift affiché si envoyé */}
      {activeGift && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <LiveGiftOverlay username={username} />
        </div>
      )}
    </div>
  );
    }
