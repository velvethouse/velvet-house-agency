'use client'

import { useEffect, useState } from 'react'

interface Gift {
  name: string
  symbol: string
  price: number
}

export default function GiftPicker({
  onSelect,
}: {
  onSelect: (gift: Gift) => void
}) {
  const [gifts, setGifts] = useState<Gift[]>([])

  useEffect(() => {
    fetch('/data/gifts.json')
      .then((res) => res.json())
      .then((data) => setGifts(data))
  }, [])

  return (
    <div className="flex flex-wrap gap-2 justify-center py-2">
      {gifts.map((gift) => (
        <button
          key={gift.name}
          onClick={() => onSelect(gift)}
          className="bg-gray-800 hover:bg-pink-700 text-white text-sm px-3 py-2 rounded-lg text-center w-[100px]"
        >
          <div className="text-xl">{gift.symbol}</div>
          <div className="text-xs mt-1">{gift.price} Lotus</div>
        </button>
      ))}
    </div>
  )
            }
