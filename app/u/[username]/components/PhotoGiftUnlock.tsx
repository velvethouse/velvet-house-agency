'use client'

import React, { useState } from 'react'
import { gifts } from '@/data/gifts'
import Lottie from 'react-lottie-player'

type Props = {
  imageUrl: string
  requiredGiftId: string
}

const PhotoGiftUnlock: React.FC<Props> = ({ imageUrl, requiredGiftId }) => {
  const [unlocked, setUnlocked] = useState(false)

  const gift = gifts.find((g) => g.id === requiredGiftId)

  const handleUnlock = () => {
    setUnlocked(true)
  }

  return (
    <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
      <img
        src={imageUrl}
        style={{
          width: '100%',
          filter: unlocked ? 'none' : 'blur(10px)',
          transition: 'filter 0.3s ease',
        }}
      />
      {!unlocked && gift && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            gap: 12,
          }}
        >
          <div>🎁 Unlock with: {gift.name}</div>
          <Lottie
            play
            loop
            path={`/gifts/${gift.file}`}
            style={{ width: 60, height: 60 }}
          />
          <button
            onClick={handleUnlock}
            style={{
              background: '#ff007f',
              border: 'none',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Send Gift to Unlock
          </button>
        </div>
      )}
    </div>
  )
}

export default PhotoGiftUnlock
