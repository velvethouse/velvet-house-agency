'use client'

import NovaAssistant from '@/components/NovaAssistant'
import LiveGiftOverlay from '@/components/gifts/LiveGiftOverlay'
import EventNotice from '@/components/studio/EventNotice'
import StudioGallery from '@/components/studio/StudioGallery'

export default function UserProfilePage({ params }: { params: { username: string } }) {
  const avatar = `/images/${params.username}.jpg` // TODO: remplacer par avatar réel en DB

  return (
    <main className="p-4 space-y-6">
      {/* 🏷️ Nom + avatar */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={params.username}
          className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500"
        />
        <h1 className="text-2xl font-bold">@{params.username}</h1>
      </div>

      {/* 📢 Event public de la streameuse */}
      <EventNotice />

      {/* 🖼️ Galerie photo/vidéo */}
      <StudioGallery />

      {/* 🧠 Nova assistant */}
      <NovaAssistant context="profile" />

      {/* 🎁 Gifts accessibles depuis le profil */}
      <LiveGiftOverlay />
    </main>
  )
      }
