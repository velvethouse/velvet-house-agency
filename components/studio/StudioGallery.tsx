'use client'

import { useState } from 'react'

type Media = {
  id: number
  url: string
  type: 'photo' | 'video'
  nsfw?: boolean
}

export default function StudioGallery() {
  const [media] = useState<Media[]>([
    { id: 1, url: '/gifts/lotus.webm', type: 'video' },
    { id: 2, url: '/images/sample1.jpg', type: 'photo', nsfw: true },
    { id: 3, url: '/images/sample2.jpg', type: 'photo' },
  ])

  return (
    <div className="bg-neutral-900 rounded-xl p-4 text-white">
      <h2 className="font-bold text-lg mb-2">📸 My Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {media.map((item) => (
          <div key={item.id} className="relative rounded-lg overflow-hidden">
            {item.type === 'photo' ? (
              <img
                src={item.url}
                alt="media"
                className={`w-full h-32 object-cover ${
                  item.nsfw ? 'blur-md' : ''
                }`}
              />
            ) : (
              <video
                src={item.url}
                autoPlay
                loop
                muted
                className="w-full h-32 object-cover"
              />
            )}
            {item.nsfw && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-yellow-400 font-bold">
                🔒 Unlock with Gift
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
