'use client'

import NovaAssistant from '@/components/NovaAssistant'
import LiveGiftOverlay from '@/components/gifts/LiveGiftOverlay'

export default function UserProfilePage({ params }: { params: { username: string } }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">@{params.username} Profile</h1>

      {/* 🧠 Nova assistant */}
      <div className="mb-4">
        <NovaAssistant context="profile" />
      </div>

      {/* 🎁 Gifts overlay accessible depuis la page profil */}
      <LiveGiftOverlay />
    </main>
  )
}
