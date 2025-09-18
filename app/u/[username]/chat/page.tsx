"use client";

import { useState } from "react";
import GiftPlayer from "@/app/components/GiftPlayer";

export default function ChatPage({ params }: { params: { username: string } }) {
  const [activeGift, setActiveGift] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">@{params.username} – Chat</h1>
      </header>

      <main className="flex-1 p-4">
        <p>Chat messages will go here...</p>

        {/* Bloc affichage du gift actif */}
        {activeGift && (
          <div className="mt-4 flex justify-center">
            <GiftPlayer
              name={activeGift}
              size={200}
              autoPlay
              loop={false}
            />
          </div>
        )}
      </main>

      <footer className="p-4 border-t border-gray-700">
        <button
          className="bg-yellow-500 text-black font-bold px-4 py-2 rounded"
          onClick={() => setActiveGift("lotus1")}
        >
          🎁 Send Lotus
        </button>
      </footer>
    </div>
  );
}
