'use client'

import { useState } from 'react'

type Message = {
  from: 'nova' | 'user'
  text: string
}

export default function NovaChat() {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'nova', text: "✨ Hello! I'm Nova, here to support your journey on Velvet House." }
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setMessages(prev => [
      ...prev,
      { from: 'nova', text: `🤖 Thanks for sharing: "${input}"` }
    ])
    setInput("")
  }

  return (
    <div className="bg-neutral-900 rounded-xl p-4 text-white max-w-lg">
      <h2 className="font-bold text-lg mb-2">🦋 Nova Chat</h2>
      <div className="max-h-48 overflow-y-auto space-y-1 mb-3">
        {messages.map((m, i) => (
          <p key={i} className={m.from === 'nova' ? 'text-purple-300' : 'text-gray-300'}>
            {m.from === 'nova' ? 'Nova: ' : 'You: '}
            {m.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write to Nova..."
          className="flex-1 rounded px-2 py-1 text-black"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 px-3 rounded text-white font-semibold hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  )
    }
