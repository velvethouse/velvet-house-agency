'use client'

import { useState } from 'react'
import GiftPlayer from '@/app/components/GiftPlayer'
import NovaAssistant from '../components/NovaAssistant'

const gifts = [
  { name: 'lotus', symbol: '🪷', price: 100 },
  { name: 'rose', symbol: '🌹', price: 200 },
  { name: 'heart', symbol: '💖', price: 300 },
  { name: 'kiss', symbol: '💋', price: 500 },
  { name: 'giftbox', symbol: '🎁', price: 750 },
  { name: 'star', symbol: '⭐', price: 1000 },
  { name: 'fire', symbol: '🔥', price: 1500 },
  { name: 'rain', symbol: '🌧️', price: 2000 },
  { name: 'lightning', symbol: '⚡', price: 2500 },
  { name: 'music', symbol: '🎵', price: 3000 },
  { name: 'cake', symbol: '🎂', price: 3500 },
  { name: 'candle', symbol: '🕯️', price: 4000 },
  { name: 'ring', symbol: '💍', price: 5000 },
  { name: 'crown', symbol: '👑', price: 6000 },
  { name: 'fireworks', symbol: '🎆', price: 7000 },
  { name: 'rainbow', symbol: '🌈', price: 8000 },
  { name: 'moneybag', symbol: '💰', price: 9000 },
  { name: 'diamond', symbol: '💎', price: 10000 },
  { name: 'car', symbol: '🚗', price: 12000 },
  { name: 'yacht', symbol: '🛥️', price: 15000 },
  { name: 'castle', symbol: '🏰', price: 18000 },
  { name: 'jet', symbol: '🛩️', price: 20000 },
  { name: 'lion', symbol: '🦁', price: 25000 },
  { name: 'tiger', symbol: '🐯', price: 30000 },
  { name: 'temple', symbol: '⛩️', price: 35000 },
  { name: 'bird', symbol: '🐦', price: 40000 },
  { name: 'wave', symbol: '🌊', price: 45000 },
  { name: 'wind', symbol: '🌬️', price: 50000 },
  { name: 'angel', symbol: '👼', price: 60000 },
  { name: 'butterfly', symbol: '🦋', price: 70000 },
  { name: 'crystalball', symbol: '🔮', price: 80000 },
  { name: 'galaxy', symbol: '🌠', price: 90000 },
  { name: 'aurora', symbol: '🌌', price: 100000 },
  { name: 'comet', symbol: '☄️', price: 120000 },
  { name: 'champagne', symbol: '🍾', price: 150000 },
  { name: 'phoenix', symbol: '🕊️', price: 200000 },
  { name: 'explosion', symbol: '💥', price: 250000 },
  { name: 'dragon', symbol: '🐉', price: 400000 },
  { name: 'worldtour', symbol: '🌍', price: 1000000 }
]

export default function ChatPage({ params }: { params: { username: string } }) {
  const [activeGift, setActiveGift] = useState<string | null>(null)

  const handleSendGift = (giftName: string) => {
    setActiveGift(giftName)
    setTimeout(() => setActiveGift(null), 5000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">@{params.username} – Chat</h1>
      </header>

      {/* Nova Assistant context live */}
      <div className="px-4 mt-2">
        <NovaAssistant context="live" />
      </div>

      <main className="flex-1 p-4">
        {/* Chat messages ici */}
        <div className="mb-4">💬 Chat en cours...</div>

        {/* 🎁 Animation du gift actif */}
        {activeGift && (
          <div className="mt-4 flex justify-center">
            <GiftPlayer name={activeGift} size={200} autoPlay loop={false} />
          </div>
        )}
      </main>

      <footer className="p-4 border-t border-gray-700">
        <div className="grid grid-cols-4 gap-2">
          {gifts.map((gift) => (
            <button
              key={gift.name}
              onClick={() => handleSendGift(gift.name)}
              className="flex items-center justify-center bg-white text-black font-semibold px-2 py-1 rounded text-sm hover:bg-yellow-200"
            >
              {gift.symbol} <span className="ml-1 text-xs">{gift.price} ♢</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
  }
