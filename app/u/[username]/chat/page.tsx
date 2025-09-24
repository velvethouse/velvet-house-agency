'use client'

import { useState } from 'react'
import { gifts } from '@/data/gifts'
import GiftPlayer from '@/components/GiftPlayer'
import NovaAssistant from '@/components/NovaAssistant'

export default function ChatPage({ params }: { params: { username: string } }) {
  const [activeGift, setActiveGift] = useState<string | null>(null)

  const handleSendGift = (giftName: string) => {
    setActiveGift(giftName)
    setTimeout(() => setActiveGift(null), 5000)
    // TODO: Déduire du solde Lotus
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">@{params.username} – Private Chat</h1>
      </header>

      {/* 🧠 Nova assistant */}
      <div className="px-4 mt-2">
        <NovaAssistant context="chat" />
      </div>

      <main className="flex-1 p-4">
        <div className="mb-4">💬 Chat en cours...</div>

        {/* 🎁 Animation du gift */}
        {activeGift && (
          <div className="mt-4 flex justify-center">
            <GiftPlayer name={activeGift} size={240} autoPlay loop={false} />
          </div>
        )}
      </main>

      <footer className="p-4 border-t border-gray-700">
        <div className="grid grid-cols-4 gap-2">
          {gifts.slice(0, 16).map((gift) => (
            <button
              key={gift.name}
              onClick={() => handleSendGift(gift.name)}
              className="flex items-center justify-center bg-white text-black font-semibold px-2 py-1 rounded text-sm hover:bg-yellow-300"
            >
              {gift.symbol} <span className="ml-1 text-xs">{gift.price} ♢</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
    }
