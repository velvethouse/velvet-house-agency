'use client'

import Link from "next/link"
import { tiers } from "@/data/tiers"
import { useGiftStore } from "@/stores/giftStore"

export default function LivePage() {
  const { streamers } = useGiftStore()

  if (!streamers || streamers.length === 0) {
    return (
      <main className="p-6 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-yellow-400">🎥 Live Now</h1>
        <p className="text-gray-400">No streamers are live at the moment.</p>
      </main>
    )
  }

  return (
    <main className="p-6 text-white min-h-screen bg-[#2e0d0d]">
      <h1 className="text-2xl font-bold mb-6 text-yellow-400">🎥 Live Now</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {streamers.map((s) => {
          const tier = tiers.find(
            (t) => t.minLotus <= s.lotusEarned && s.lotusEarned < (t.maxLotus ?? Infinity)
          )

          return (
            <Link
              key={s.username}
              href={`/u/${s.username}/live`}
              className="block bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:shadow-xl transition"
            >
              <img
                src={s.avatar || "/default-avatar.png"}
                alt={s.username}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/default-avatar.png"
                }}
              />
              <div className="p-3 flex justify-between items-center">
                <span className="font-semibold">@{s.username}</span>
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
