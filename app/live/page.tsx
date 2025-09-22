'use client'

import { useState } from 'react'
import GiftOverlay from './components/GiftOverlay'
import GiftButton from './components/GiftButton'

export default function LivePage() {
  const [currentGift, setCurrentGift] = useState<string | null>(null)

  const handleGiftSend = (gift: string) => {
    setCurrentGift(null) // reset if same gift
    setTimeout(() => {
      setCurrentGift(gift)
    }, 50)
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Zone live vidéo (à intégrer) */}
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold mb-2">🎥 Live de Nova</h1>
        <p>Tu regardes une streameuse en direct.</p>
      </div>

      {/* Boutons de gifts */}
      <GiftButton onSend={handleGiftSend} />

      {/* Overlay cadeau */}
      {currentGift && <GiftOverlay name={currentGift} />}
    </div>
  )
}
