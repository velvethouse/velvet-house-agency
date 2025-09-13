'use client'

import React, { useState } from 'react'
import GiftSelector from './GiftSelector'
import { useGiftOverlay } from '@/hooks/useGiftOverlay'

type Props = {}

const SendGiftLive: React.FC<Props> = () => {
  const [selectedGift, setSelectedGift] = useState<string | null>(null)
  const { showOverlay } = useGiftOverlay()

  const handleSend = () => {
    if (!selectedGift) return
    showOverlay(`${selectedGift}.json`)
    setSelectedGift(null)
  }

  return (
    <div style={{ padding: 12, background: '#111', borderRadius: 12 }}>
      <GiftSelector selectedGiftId={selectedGift ?? ''} onSelect={setSelectedGift} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <button
          onClick={handleSend}
          style={{
            padding: '8px 16px',
            background: '#ff007f',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Send Gift 🎁
        </button>
      </div>
    </div>
  )
}

export default SendGiftLive
