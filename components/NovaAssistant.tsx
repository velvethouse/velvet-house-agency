'use client'

import { useState } from 'react'

export default function NovaAssistant({ context }: { context?: string }) {
  const [messages, setMessages] = useState([
    { from: 'nova', text: "✨ Hi! I'm Nova, your Velvet House assistant." }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setMessages(prev => [
      ...prev,
      { from: 'nova', text: `🤖 Nova reply in ${context || 'default'}: "${input}"` }
    ])
    setInput("")
  }

  return (
    <div className="bg-neutral-900 rounded-xl p-4 text-sm max-w-md">
      <h2 className="font-bold mb-2">🦋 Nova Assistant</h2>
      <div className="space-y-1 max-h-40 overflow-y-auto mb-2">
        {messages.map((m, i) => (
          <p key={i} className={m.from === 'nova' ? "text-purple-300" : "text-gray-300"}>
            {m.from === 'nova' ? "Nova: " : "You: "}{m.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nova..."
          className="flex-1 rounded px-2 py-1 text-black"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white px-3 rounded hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  )
          }
