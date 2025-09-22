'use client'

export default function GiftButton({ onSend }: { onSend: (gift: string) => void }) {
  const gifts = [
    'lotus', 'rose', 'heart', 'champagne', 'diamond', 'crown', 'fireworks', 'lightning',
    'music', 'ring', 'car', 'yacht', 'castle', 'jet', 'lion', 'tiger', 'fire', 'giftbox',
    'kiss', 'star', 'dragon', 'phoenix', 'worldtour', 'explosion', 'rainbow', 'bird',
    'wind', 'cake', 'moneybag', 'rain', 'temple', 'crystalball', 'galaxy', 'butterfly',
    'angel', 'aurora', 'comet', 'candle'
  ]

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-4">
      {gifts.map((gift) => (
        <button
          key={gift}
          onClick={() => onSend(gift)}
          className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-3 py-1 rounded-full"
        >
          🎁 {gift}
        </button>
      ))}
    </div>
  )
}
