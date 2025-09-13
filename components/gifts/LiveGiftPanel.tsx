'use client'

import React from 'react'
import Lottie from 'react-lottie-player'
import { useGiftOverlay } from '@/hooks/useGiftOverlay'
import gifts from '@/data/gifts.json'

type Props = {
  onSend?: (gift: GiftData) => void
}

export type GiftData = {
  id: string
  name: string
  file: string // ex: 'lotus.json'
  price: number
}

const LiveGiftPanel: React.FC<Props> = ({ onSend }) => {
  const { showOverlay } = useGiftOverlay()

  const handleSend = (gift: GiftData) => {
    // Déclenche l’animation overlay
    showOverlay(gift.file)
    // Envoi au parent si défini (logique backend/chat/etc.)
    onSend?.(gift)
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
      {gifts.map((gift) => (
        <div
          key={gift.id}
          onClick={() => handleSend(gift)}
          style={{
            width: 72,
            height: 72,
            borderRadius: 8,
            background: '#111',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 0 8px rgba(255,255,255,0.1)',
          }}
        >
          <Lottie
            loop
            play
            animationData={require(`../../../public/gifts/${gift.file}`)}
            style={{ width: 48, height: 48 }}
          />
        </div>
      ))}
    </div>
  )
}

export default LiveGiftPanel