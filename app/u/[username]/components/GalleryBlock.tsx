'use client'

import { useState } from 'react'
import { gifts } from '@/lib/gifts'
import GiftPlayer from '@/app/components/GiftPlayer'

type Photo = {
  id: number
  src: string
  nsfw: boolean
  likes: number
  gift?: string
}

type Props = {
  username: string
  photos: Photo[]
  onLike?: (id: number) => void
}

export default function GalleryBlock({ username, photos, onLike }: Props) {
  const [localLikes, setLocalLikes] = useState<Record<number, number>>({})
  const [unlocked, setUnlocked] = useState<Record<number, boolean>>({})
  const [playingGift, setPlayingGift] = useState<number | null>(null)

  const handleLike = (id: number) => {
    setLocalLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
    onLike?.(id)
  }

  const handleUnlock = (id: number, giftName: string) => {
    setPlayingGift(id)
    setTimeout(() => {
      setUnlocked((prev) => ({ ...prev, [id]: true }))
      setPlayingGift(null)
    }, 3000)
  }

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: '#D4AF37', marginBottom: 12 }}>
        📷 {username}'s Gallery
      </h2>

      {photos.length === 0 ? (
        <p style={{ color: '#999', fontSize: 13 }}>No photos published yet.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 12,
          }}
        >
          {photos.map((item) => {
            const isUnlocked = unlocked[item.id] || !item.nsfw
            const gift = gifts.find((g) => g.name === item.gift)

            return (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={`photo-${item.id}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    filter: isUnlocked ? 'none' : 'blur(12px)',
                    objectFit: 'cover',
                    opacity: isUnlocked ? 1 : 0.7,
                    transition: '0.3s ease',
                  }}
                />

                {/* Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    right: 6,
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  © Velvet House
                </div>

                {/* Unlock overlay */}
                {!isUnlocked && gift && playingGift !== item.id && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: 12,
                      flexDirection: 'column',
                    }}
                  >
                    <p className="mb-2">Unlock with {gift.symbol} {gift.price} ♢</p>
                    <button
                      onClick={() => handleUnlock(item.id, gift.name)}
                      style={{
                        background: '#FFD700',
                        color: '#2e0d0d',
                        borderRadius: 10,
                        fontSize: 12,
                        padding: '6px 10px',
                        fontWeight: 600,
                      }}
                    >
                      🎁 Send gift
                    </button>
                  </div>
                )}

                {/* Playing animation */}
                {playingGift === item.id && gift && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                    <GiftPlayer name={gift.name} size={160} autoPlay loop={false} />
                  </div>
                )}

                {/* Like button */}
                <button
                  onClick={() => handleLike(item.id)}
                  style={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '2px 6px',
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  ❤️ {localLikes[item.id] ?? item.likes}
                </button>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
                      }
