'use client'

import { useState } from 'react'
import { gifts } from '@/lib/gifts'
import GiftPlayer from '@/app/components/GiftPlayer'
import LiveGiftOverlay from '../components/LiveGiftOverlay'
import NovaAssistant from '../components/NovaAssistant'

export default function LivePage({ params }: { params: { username: string } }) {
  const { username } = params
  const [activeGift, setActiveGift] = useState<string | null>(null)

  const handleSendGift = (giftName: string) => {
    setActiveGift(giftName)
    setTimeout(() => setActiveGift(null), 5000)
    // TODO: déduction Lotus à venir
  }

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Zone du live */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p>🎥 Live stream for @{username}</p>
      </div>

      {/* Gifts overlay (animation custom, style libre) */}
      <LiveGiftOverlay activeGift={activeGift} />

      {/* 🎁 Animation du gift actuel (version .webm) */}
      {activeGift && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
          <GiftPlayer name={activeGift} size={250} autoPlay loop={false} />
        </div>
      )}

      {/* 🎁 Gift buttons en bas */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {gifts.slice(0, 12).map((gift) => (
            <button
              key={gift.name}
              onClick={() => handleSendGift(gift.name)}
              className="flex items-center justify-center bg-white text-black font-semibold px-2 py-1 rounded text-sm hover:bg-yellow-300"
            >
              {gift.symbol} <span className="ml-1 text-xs">{gift.price} ♢</span>
            </button>
          ))}
        </div>
      </div>

      {/* Panel premium */}
      <div className="absolute bottom-4 right-4 w-64">
        <div className="bg-yellow-500 text-black p-4 rounded">
          <p className="font-bold">VIP Panel</p>
          <p>Exclusive features for @{username}</p>
        </div>
      </div>

      {/* Nova Assistant en discret */}
      <div className="absolute top-4 left-4 z-10 max-w-xs">
        <NovaAssistant context="live" />
      </div>
    </div>
  )
    }
