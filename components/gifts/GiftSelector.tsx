'use client'

import React from 'react'
import Lottie from 'react-lottie-player'
import { gifts } from '@/data/gifts'

type Props = {
  onSelect?: (giftId: string) => void
  selectedGiftId?: string
}

const GiftSelector: React.FC<Props> = ({ onSelect, selectedGiftId }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '12px',
        justifyContent: 'center',
      }}
    >
      {gifts.map((gift) => (
        <div
          key={gift.id}
          onClick={() => onSelect?.(gift.id)}
          style={{
            width: 64,
            height: 64,
            borderRadius: 10,
            backgroundColor: selectedGiftId === gift.id ? '#ff007f' : '#222',
            boxShadow:
              selectedGiftId === gift.id
                ? '0 0 10px #ff007f'
                : '0 0 6px rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Lottie
            loop
            play
            animationData={undefined}
            path={`/gifts/${gift.file}`}
            style={{ width: 40, height: 40 }}
          />
        </div>
      ))}
    </div>
  )
}

export default GiftSelector
