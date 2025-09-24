'use client'

import { useState } from 'react'

type Media = {
  id: number
  url: string
}

export default function FollowerProfilePage({ params }: { params: { username: string } }) {
  const [lotusBalance] = useState(3929) // Exemple : valeur réelle à connecter à l'API/DB
  const [media] = useState<Media[]>([
    { id: 1, url: '/images/sample1.jpg' },
    { id: 2, url: '/images/sample2.jpg' },
    { id: 3, url: '/images/sample3.jpg' },
  ])

  const avatar = `/images/${params.username}.jpg` // TODO: avatar réel

  return (
    <main className="p-4 space-y-6">
      {/* 🏷️ Avatar + pseudo + Lotus */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={params.username}
          className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500"
        />
        <div>
          <h1 className="text-xl font-bold">@{params.username}</h1>
          <p className="text-yellow-400">{lotusBalance.toLocaleString()} ♢ Lotus</p>
        </div>
      </div>

      {/* 🖼️ Galerie simple */}
      <div>
        <h2 className="font-semibold mb-2">📸 Photos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {media.map((m) => (
            <img
              key={m.id}
              src={m.url}
              alt="follower media"
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </main>
  )
}
