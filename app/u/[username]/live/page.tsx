'use client'

import NovaLiveGuard from '@/components/live/NovaLiveGuard'
import LiveGiftOverlay from '@/components/gifts/LiveGiftOverlay'

export default function UserLivePage({ params }: { params: { username: string } }) {
  const stopLive = () => {
    // Ici on gère la fermeture du live
    console.log("❌ Live stopped by Nova")
    // TODO: Déconnecter le flux live et notifier la streameuse
  }

  return (
    <main className="relative w-full h-screen bg-black text-white">
      {/* 🎥 Zone live */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-400">🎥 Live stream of @{params.username}</p>
      </div>

      {/* 🦋 Nova modération */}
      <NovaLiveGuard onStop={stopLive} />

      {/* 🎁 Gifts overlay (cadeaux visibles pendant le live) */}
      <LiveGiftOverlay />
    </main>
  )
}
