"use client";

import LiveGiftOverlay from "../components/LiveGiftOverlay";

export default function LivePage({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Zone du live */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p>🎥 Live stream for @{username}</p>
      </div>

      {/* Gifts overlay */}
      <LiveGiftOverlay activeGift={null} />

      {/* Panel premium */}
      <div className="absolute bottom-4 right-4 w-64">
        <div className="bg-yellow-500 text-black p-4 rounded">
          <p className="font-bold">VIP Panel</p>
          <p>Exclusive features for @{username}</p>
        </div>
      </div>
    </div>
  );
}
