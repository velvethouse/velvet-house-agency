'use client'

import { useState } from 'react'
import Lottie from 'react-lottie-player'

export default function PhotoGiftUnlock({ src }: { src: string }) {
  const [unlocked, setUnlocked] = useState(false)

  const handleUnlock = () => {
    // Ici on peut déclencher le gift, ou simuler
    setUnlocked(true)
  }

  return (
    <div style={{ position: 'relative', marginTop: 12 }}>
      {!unlocked ? (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={src}
            alt="Locked content"
            style={{
              width: '100%',
              maxWidth: 320,
              filter: 'blur(12px)',
              borderRadius: 12,
              opacity: 0.7,
            }}
          />

          <button
            onClick={handleUnlock}
            className="btn3d btn3d--gold"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '10px 16px',
              fontSize: 14,
              borderRadius: 10,
              zIndex: 10,
            }}
          >
            🎁 Unlock with gift
          </button>
        </div>
      ) : (
        <img
          src={src}
          alt="Unlocked content"
          style={{
            width: '100%',
            maxWidth: 320,
            borderRadius: 12,
            border: '2px solid #FFD700',
          }}
        />
      )}
    </div>
  )
}
