'use client'

import LiveGiftOverlay from '@/components/gifts/LiveGiftOverlay'
import PrivateLiveToggle from '@/components/live/PrivateLiveToggle'

export default function PrivateLivePage({ params }: { params: { username: string } }) {
  return (
    <main className="relative w-full h-screen bg-black text-white">
      {/* 🎥 Zone de streaming privée */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-400">🔒 Private live of @{params.username}</p>
      </div>

      {/* 🔄 Toggle Public / Private */}
      <PrivateLiveToggle />

      {/* 🎁 Gifts accessibles en privé aussi */}
      <LiveGiftOverlay />
    </main>
  )
}
