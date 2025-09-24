"use client";

import { useState } from "react";
import { gifts } from "@/data/gifts";

export default function UserLivePage({ params }: { params: { username: string } }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [goalProgress, setGoalProgress] = useState(14350); // exemple Lotus déjà reçus
  const goalTarget = 20000;

  const handleSend = (msg: string) => {
    if (msg.trim() === "") return;
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <main className="relative w-full h-screen bg-black text-white">
      {/* 🎥 Vidéo Live */}
      <div className="absolute inset-0">
        <video
          src="/gifts/lotus.webm" // à remplacer par le flux réel
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🎯 Barre objectif */}
      <div className="absolute top-2 left-2 bg-black/60 rounded-full px-4 py-1 text-sm flex items-center gap-2">
        <span>🎯 Goal</span>
        <div className="w-40 h-2 bg-gray-600 rounded-full overflow-hidden">
          <div
            className="h-2 bg-yellow-400"
            style={{ width: `${(goalProgress / goalTarget) * 100}%` }}
          ></div>
        </div>
        <span>{goalProgress} / {goalTarget} Lotus</span>
      </div>

      {/* 💬 Chat public */}
      <div className="absolute bottom-20 left-0 w-full max-h-40 overflow-y-auto px-2 space-y-1 text-sm">
        {messages.map((m, i) => (
          <p key={i}>💬 {m}</p>
        ))}
      </div>

      {/* ✍️ Input chat */}
      <div className="absolute bottom-2 left-0 w-full flex px-2 gap-2">
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 rounded-full px-4 py-2 text-black"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend(e.currentTarget.value);
          }}
        />
      </div>

      {/* 🎁 Menu gifts */}
      <div className="absolute bottom-20 right-2 bg-black/70 rounded-xl p-2 max-h-48 overflow-y-auto w-40">
        <h3 className="font-bold mb-2">🎁 Gifts</h3>
        <div className="space-y-1">
          {gifts.slice(0, 10).map((g) => (
            <button
              key={g.name}
              className="w-full flex justify-between items-center bg-neutral-800 rounded px-2 py-1 text-sm hover:bg-neutral-700"
            >
              <span>{g.symbol} {g.name}</span>
              <span>{g.price} ♢</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
                }
