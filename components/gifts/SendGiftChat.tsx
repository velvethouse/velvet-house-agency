'use client'

import React, { useState } from 'react'
import GiftSelector from './GiftSelector'
import ChatGift from './ChatGift'

type Props = {
  onSend: (giftId: string) => void
  sender?: string
}

const SendGiftChat: React.FC<Props> = ({ onSend, sender }) => {
  const [selectedGift, setSelectedGift] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleSend = () => {
    if (!selectedGift) return
    onSend(selectedGift)
    setPreview(selectedGift)
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
          Send Gift
        </button>
      </div>

      {preview && (
        <div style={{ marginTop: 16 }}>
          <ChatGift giftFile={`${preview}.json`} sender={sender} />
        </div>
      )}
    </div>
  )
}

export default SendGiftChat
