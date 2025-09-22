'use client'

interface GiftDispatcherProps {
  name: string
  context?: 'live' | 'chat' | 'photo' | 'gallery' | 'default'
  size?: number
  autoPlay?: boolean
  loop?: boolean
}

export default function GiftDispatcher({
  name,
  context = 'default',
  size,
  autoPlay = true,
  loop = true,
}: GiftDispatcherProps) {
  let computedSize = size

  // Auto-ajustement si pas défini manuellement
  if (!size) {
    if (context === 'live') computedSize = 300
    else if (context === 'chat') computedSize = 96
    else if (context === 'photo') computedSize = 150
    else computedSize = 200
  }

  return (
    <div className="flex items-center justify-center pointer-events-none">
      <video
        src={`/gifts/${name}.webm`}
        autoPlay={autoPlay}
        muted
        loop={loop}
        playsInline
        style={{
          width: computedSize,
          height: computedSize,
          objectFit: 'contain',
          borderRadius: context === 'chat' ? 12 : 0,
        }}
      />
    </div>
  )
}
