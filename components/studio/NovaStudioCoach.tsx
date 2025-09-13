'use client'

import React, { useState } from 'react'

// 🔁 Mock des données de la streameuse (tu pourras remplacer plus tard par API)
const useStreamerData = () => {
  return {
    username: 'sofiax',
    lotusEarned: 44250,
    goal: 50000,
    rank: '💛 Golden Butterfly',
  }
}

export default function NovaStudioCoach() {
  const { username, lotusEarned, goal, rank } = useStreamerData()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'nova', content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { role: 'user', content: input }])
    setInput('')
    setLoading(true)

    const res = await fetch('/api/nova/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `Je suis ${username}, rang ${rank}, j'ai gagné ${lotusEarned} Lotus cette semaine (objectif: ${goal}). ${input}`,
      }),
    })

    const data = await res.json()
    setMessages((prev) => [...prev, { role: 'nova', content: data.reply }])
    setLoading(false)
  }

  return (
    <div style={{ background: '#1e0d0d', padding: 20, borderRadius: 12, color: '#fff' }}>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>🧠 Nova, ta coach IA personnelle</h2>

      <div style={{ fontSize: 14, marginBottom: 8 }}>
        <p><strong>Rang :</strong> {rank}</p>
        <p><strong>Lotus gagnés :</strong> {lotusEarned.toLocaleString()} / {goal.toLocaleString()} ♢</p>
      </div>

      <div style={{ maxHeight: 250, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8, textAlign: m.role === 'user' ? 'right' : 'left' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: 10,
                background: m.role === 'user' ? '#D4AF37' : '#333',
                color: m.role === 'user' ? '#000' : '#fff',
                maxWidth: '90%',
              }}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && <p style={{ fontStyle: 'italic', color: '#aaa' }}>Nova répond...</p>}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pose ta question à Nova..."
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
          Envoyer
        </button>
      </div>
    </div>
  )
      }
