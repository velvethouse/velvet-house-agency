"use client";

import React, { useState } from "react";
import GiftPlayer from "@/components/GiftPlayer";

export default function ChatPage({ params }: { params: { username: string } }) {
  const { username } = params;
  const [activeGift, setActiveGift] = useState<string | null>(null);

  const handleSendGift = (gift: string) => {
    setActiveGift(gift);
    setTimeout(() => setActiveGift(null), 4000);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-gray-600">💬 Private chat with {username}</p>
        {activeGift && (
          <div className="mt-4 flex justify-center">
            <GiftPlayer name={activeGift} size={200} play loop={false} />
          </div>
        )}
      </div>
      <div className="p-4 bg-white flex items-center space-x-2 border-t">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={() => handleSendGift("rose")}
          className="px-3 py-2 bg-pink-500 text-white rounded"
        >
          🌹 Send Gift
        </button>
      </div>
    </div>
  );
}
