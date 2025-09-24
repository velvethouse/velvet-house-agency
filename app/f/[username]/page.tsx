'use client'

import { useState } from 'react'

type Media = {
  id: number
  url: string
}

type FollowedStreamer = {
  username: string
  avatar: string
  isOnline: boolean
}

export default function FollowerProfilePage({ params }: { params: { username: string } }) {
  const [lotusBalance] = useState(3929) // exemple Lotus
  const [activeTab, setActiveTab] = useState<'photos' | 'follows'>('photos')

  const [media] = useState<Media[]>([
    { id: 1, url: '/images/sample1.jpg' },
    { id: 2, url: '/images/sample2.jpg' },
    { id: 3, url: '/images/sample3.jpg' },
  ])

  const [follows] = useState<FollowedStreamer[]>([
    { username: 'amelia_vip', avatar: '/images/amelia.jpg', isOnline: true },
    { username: 'chloe_vh', avatar: '/images/chloe.jpg', isOnline: false },
    { username: 'nova_stream', avatar: '/images/nova.jpg', isOnline: true },
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

      {/* 🔀 Menu onglets */}
      <div className="flex gap-4 border-b border-gray-700">
        <button
          className={`pb-2 ${activeTab === 'photos' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('photos')}
        >
          📸 Photos
        </button>
        <button
          className={`pb-2 ${activeTab === 'follows' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('follows')}
        >
          👥 Suivis
        </button>
      </div>

      {/* 📸 Galerie photo/vidéo */}
      {activeTab === 'photos' && (
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
      )}

      {/* 👥 Liste des suivis */}
      {activeTab === 'follows' && (
        <div className="space-y-3">
          {follows.map((s) => (
            <a
              key={s.username}
              href={`/u/${s.username}/live`}
              className="flex items-center gap-3 p-2 bg-neutral-900 rounded-lg hover:bg-neutral-800"
            >
              <img
                src={s.avatar}
                alt={s.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">@{s.username}</p>
                <p className={`text-sm ${s.isOnline ? 'text-green-400' : 'text-gray-500'}`}>
                  {s.isOnline ? '🟢 En live' : '⚪ Hors ligne'}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  )
}
