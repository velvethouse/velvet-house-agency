'use client'

import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import { useGiftOverlay } from '@/hooks/useGiftOverlay'

const SendGiftOverlay: React.FC = () => {
  const { overlayFile, clearOverlay } = useGiftOverlay()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (overlayFile) {
      setShow(true)

      const timer = setTimeout(() => {
        setShow(false)
        clearOverlay()
      }, 4000) // durée de l'animation en plein écran

      return () => clearTimeout(timer)
    }
  }, [overlayFile, clearOverlay])

  if (!overlayFile || !show) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <Lottie
        play
        path={`/gifts/${overlayFile}`}
        style={{
          width: 240,
          height: 240,
        }}
      />
    </div>
  )
}

export default SendGiftOverlay
