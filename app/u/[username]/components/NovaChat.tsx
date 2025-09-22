'use client'

import { useState } from 'react'

export default function NovaChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi, I'm Nova. How can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/nova-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })

      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: '❌ Error talking to Nova.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black/80 text-white rounded-xl p-4 space-y-4 max-w-xl mx-auto border border-white/10">
      <div className="text-lg font-semibold">💬 Nova AI Chat</div>

      <div className="max-h-60 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.role === 'user' ? 'bg-white text-black self-end' : 'bg-white/10 text-white'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-xs text-gray-400">Nova is typing...</div>}
      </div>

      <div className="flex space-x-2">
        <input
          className="flex-1 px-3 py-2 rounded bg-white text-black text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  )
}
