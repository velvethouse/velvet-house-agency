'use client'

import React, { useState } from 'react'

export default function NovaAssistant() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<{ from: 'user' | 'nova'; text: string }[]>([])

  const sendMessage = async () => {
    if (!input.trim()) return

    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    setLoading(true)

    const res = await fetch('/api/nova/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })

    const data = await res.json()
    if (data.reply) {
      setMessages((prev) => [...prev, { from: 'nova', text: data.reply }])
    }

    setLoading(false)
  }

  return (
    <div style={{ background: '#1e0d0d', padding: 20, borderRadius: 12, color: '#fff', maxWidth: 600 }}>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>💬 Nova Assistant</h2>

      <div style={{ maxHeight: 250, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 8, textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: 10,
                background: msg.from === 'user' ? '#D4AF37' : '#333',
                color: msg.from === 'user' ? '#000' : '#fff',
                maxWidth: '90%',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <p style={{ fontStyle: 'italic', color: '#aaa' }}>Nova is typing...</p>}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nova something..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
            border: '1px solid #555',
            background: '#111',
            color: '#fff',
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="btn3d btn3d--gold"
          style={{ padding: '10px 16px', fontSize: 14 }}
        >
          Send
        </button>
      </div>
    </div>
  )
}
