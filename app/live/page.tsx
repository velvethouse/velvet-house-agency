'use client'

import Link from "next/link"
import { tiers } from "@/data/tiers"
import { useGiftStore } from "@/stores/giftStore"

export default function LivePage() {
  const { streamers } = useGiftStore()

  const liveStreamers = streamers.filter((s) => !!s.username && !!s.avatar)

  return (
    <main className="p-4 min-h-screen bg-[#2e0d0d] text-white">
      <h1 className="text-2xl font-bold mb-6 text-yellow-400">🎥 Live Now</h1>

      {liveStreamers.length === 0 && (
        <p className="text-gray-400 text-sm">
          No streamers are live at the moment. Come back later ✨
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {liveStreamers.map((s) => {
          const tier = tiers.find(
            (t) => t.minLotus <= s.lotusEarned && s.lotusEarned < (t.maxLotus ?? Infinity)
          )

          return (
            <Link
              key={s.username}
              href={`/u/${s.username}/live`}
              className="block bg-neutral-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition border border-neutral-800"
            >
              <img
                src={s.avatar || "/default-avatar.png"}
                alt={s.username}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/default-avatar.png"
                }}
              />
              <div className="p-2 flex justify-between items-center">
                <span className="font-medium">@{s.username}</span>
                {tier && (
                  <span className="text-sm text-yellow-400">
                    {tier.symbol} {tier.name}
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
