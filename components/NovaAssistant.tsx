'use client'

import { useState, useEffect } from 'react'

// Utilitaire pour reset le compteur chaque jour
function getTodayKey() {
  const today = new Date().toISOString().split('T')[0] // format YYYY-MM-DD
  return `nova_replies_${today}`
}

export default function NovaAssistant({ context }: { context?: string }) {
  const [messages, setMessages] = useState([
    { from: 'nova', text: "✨ Hi! I'm Nova, your Velvet House assistant." }
  ])
  const [input, setInput] = useState("")
  const [replyCount, setReplyCount] = useState(0)

  // Charger le compteur stocké localement (par jour)
  useEffect(() => {
    const stored = localStorage.getItem(getTodayKey())
    if (stored) setReplyCount(parseInt(stored))
  }, [])

  // Sauvegarder à chaque update
  useEffect(() => {
    localStorage.setItem(getTodayKey(), replyCount.toString())
  }, [replyCount])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])

    if (replyCount < 10) {
      setMessages(prev => [
        ...prev,
        { from: 'nova', text: `🤖 Nova reply (${context || 'default'}): "${input}"` }
      ])
      setReplyCount(replyCount + 1)
    } else {
      setMessages(prev => [
        ...prev,
        { from: 'nova', text: "✨ Nova is resting now. She will reply again tomorrow." }
      ])
    }

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
      <p className="mt-2 text-xs text-gray-400">
        Replies today: {replyCount}/10
      </p>
    </div>
  )
    }
