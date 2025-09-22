'use client'

interface GiftDispatcherProps {
  name: string
  context?: 'live' | 'chat' | 'photo' | 'gallery' | 'battle' | 'default'
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

  // Taille automatique selon le contexte
  if (!size) {
    switch (context) {
      case 'live':
        computedSize = 300
        break
      case 'battle':
        computedSize = 260
        break
      case 'chat':
        computedSize = 96
        break
      case 'photo':
        computedSize = 150
        break
      case 'gallery':
        computedSize = 200
        break
      default:
        computedSize = 180
    }
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
