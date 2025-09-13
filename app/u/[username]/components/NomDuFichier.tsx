'use client'

import React, { useState } from 'react'

type Message = {
  id: number
  user: string
  text: string
}

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([
      ...messages,
      { id: Date.now(), user: 'You', text: input.trim() },
    ])
    setInput('')
  }

  return (
    <div
      style={{
        background: '#111',
        borderRadius: 12,
        padding: 12,
        maxHeight: 280,
        overflowY: 'auto',
        fontSize: 14,
        color: '#fff',
      }}
    >
      <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 16 }}>
        💬 Live Chat
      </div>

      <div style={{ maxHeight: 160, overflowY: 'auto', marginBottom: 8 }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: 4 }}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 6,
            border: '1px solid #333',
            background: '#222',
            color: '#fff',
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '8px 12px',
            background: '#ff007f',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default LiveChat
