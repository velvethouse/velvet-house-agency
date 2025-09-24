'use client'

import { gifts } from '@/data/gifts'
import GiftPlayer from '@/components/GiftPlayer'

interface GiftDispatcherProps {
  name: string
  size?: number
}

export default function GiftDispatcher({ name, size = 120 }: GiftDispatcherProps) {
  const gift = gifts.find((g) => g.name === name)

  if (!gift) {
    return (
      <div className="text-red-500 text-sm">
        ❌ Unknown gift: {name}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <GiftPlayer name={gift.name} size={size} autoPlay loop={false} />
      <p className="text-xs mt-1">{gift.name} – {gift.price} ♢</p>
    </div>
  )
}
