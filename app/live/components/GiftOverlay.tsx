'use client'
import { useEffect, useState } from 'react'

export default function GiftOverlay({ name }: { name: string }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <video
        src={`/gifts/${name}.webm`}
        autoPlay
        muted
        loop
        playsInline
        className="w-[300px] md:w-[400px] drop-shadow-lg rounded-xl"
      />
    </div>
  )
}
