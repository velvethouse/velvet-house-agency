'use client'

import { useState } from 'react'
import { gifts } from '@/data/gifts'
import GiftPlayer from '@/components/GiftPlayer'

export default function LiveGiftOverlay() {
  const [activeGift, setActiveGift] = useState<string | null>(null)

  const sendGift = (giftName: string) => {
    setActiveGift(giftName)
    setTimeout(() => setActiveGift(null), 4000) // reset après 4s
    // TODO: déduire Lotus du solde user
  }

  return (
    <div className="absolute bottom-4 right-4 bg-black/70 rounded-xl p-3 w-56 max-h-72 overflow-y-auto">
      <h3 className="text-white font-bold mb-2">🎁 Send a Gift</h3>
      <div className="space-y-1">
        {gifts.map((g) => (
          <button
            key={g.name}
            onClick={() => sendGift(g.name)}
            className="w-full flex justify-between items-center bg-neutral-800 rounded px-2 py-1 text-sm hover:bg-neutral-700 text-white"
          >
            <span>{g.symbol} {g.name}</span>
            <span>{g.price} ♢</span>
          </button>
        ))}
      </div>

      {/* Animation cadeau */}
      {activeGift && (
        <div className="absolute -top-32 left-1/2 -translate-x-1/2">
          <GiftPlayer name={activeGift} size={180} autoPlay loop={false} />
        </div>
      )}
    </div>
  )
}
