'use client'

import { gifts } from '@/data/gifts'

export default function GiftMenu({ onSend }: { onSend: (gift: string) => void }) {
  return (
    <div className="bg-black/80 rounded-xl p-3 w-56 max-h-72 overflow-y-auto">
      <h3 className="text-white font-bold mb-2">🎁 Gifts</h3>
      <div className="space-y-1">
        {gifts.map((g) => (
          <button
            key={g.name}
            onClick={() => onSend(g.name)}
            className="w-full flex justify-between items-center bg-neutral-800 rounded px-2 py-1 text-sm hover:bg-neutral-700 text-white"
          >
            <span>{g.symbol ?? '🎁'} {g.name}</span>
            <span>{g.price} ♢</span>
          </button>
        ))}
      </div>
    </div>
  )
}
