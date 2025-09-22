'use client'

import { useState } from 'react'
import { gifts } from '@/lib/gifts'
import GiftPlayer from '@/app/components/GiftPlayer'

type Props = {
  src: string
  giftName: string
  alt?: string
}

export default function BlurredPhoto({ src, giftName, alt }: Props) {
  const [unlocked, setUnlocked] = useState(false)
  const [playing, setPlaying] = useState(false)

  const gift = gifts.find((g) => g.name === giftName)

  const handleUnlock = () => {
    if (!gift) return
    setPlaying(true)
    setTimeout(() => {
      setUnlocked(true)
      setPlaying(false)
    }, 3000)
  }

  return (
    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
      {/* Image */}
      <img
        src={src}
        alt={alt || 'Locked photo'}
        className={`w-full h-full object-cover transition duration-300 ${
          unlocked ? 'blur-0' : 'blur-md grayscale'
        }`}
      />

      {/* Bloc cadeau */}
      {!unlocked && !playing && gift && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white p-4 text-center">
          <p className="text-sm mb-2">🔒 This photo is locked</p>
          <button
            onClick={handleUnlock}
            className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300"
          >
            Unlock with {gift.symbol} {gift.price} ♢
          </button>
        </div>
      )}

      {/* Animation cadeau */}
      {playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <GiftPlayer name={giftName} size={200} autoPlay loop={false} />
        </div>
      )}
    </div>
  )
}
