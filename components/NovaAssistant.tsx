'use client'

import React, { useState } from 'react'

const NovaAssistant: React.FC = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'nova', content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setMessages([...messages, { role: 'user', content: userMessage }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/nova/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'nova', content: data.reply }])
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'nova', content: '❌ Nova encountered an error.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: '#1a0e0e', padding: 20, borderRadius: 12, maxWidth: 600, margin: '0 auto', color: '#fff' }}>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>🤖 Nova Assistant</h2>

      <div style={{ maxHeight: 300, overflowY: 'auto', padding: 12, background: '#000', borderRadius: 8, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 12, color: m.role === 'user' ? '#ff007f' : '#00ffcc' }}>
            <strong>{m.role === 'user' ? 'You' : 'Nova'}:</strong> {m.content}
          </div>
        ))}
        {loading && <div style={{ color: '#888' }}>Nova is thinking...</div>}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nova anything..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
            border: '1px solid #333',
            background: '#111',
            color: '#fff',
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '10px 16px',
            borderRadius: 8,
            background: '#ffd700',
            color: '#000',
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

export default NovaAssistant
