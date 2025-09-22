'use client'

import GiftDispatcher from '@/components/gifts/GiftDispatcher'

interface ChatGiftBubbleProps {
  name: string // nom du gift (ex: "lotus")
  sender: 'me' | 'other' // qui l’a envoyé
}

export default function ChatGiftBubble({ name, sender }: ChatGiftBubbleProps) {
  const isMine = sender === 'me'

  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`rounded-xl p-2 ${
          isMine ? 'bg-pink-600' : 'bg-gray-700'
        }`}
        style={{ maxWidth: 150 }}
      >
        <GiftDispatcher name={name} context="chat" />
        <p className="text-center text-xs text-white mt-1">🎁 {name}</p>
      </div>
    </div>
  )
}
