'use client'

import React from 'react'
import Lottie from 'react-lottie-player'

type Props = {
  giftFile: string
  sender?: string
}

const ChatGift: React.FC<Props> = ({ giftFile, sender }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 12px',
        background: '#1a1a1a',
        borderRadius: 10,
        maxWidth: 280,
        boxShadow: '0 0 8px rgba(255,255,255,0.05)',
      }}
    >
      <Lottie
        loop
        play
        path={`/gifts/${giftFile}`}
        style={{ width: 48, height: 48 }}
      />
      <div style={{ color: '#fff', fontSize: 14 }}>
        🎁 {sender ?? 'Someone'} sent a gift!
      </div>
    </div>
  )
}

export default ChatGift
