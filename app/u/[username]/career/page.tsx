'use client'

import { useState } from 'react'

export default function CareerPage() {
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const toggleAnswer = (questionId: string, option: string) => {
    setAnswers((prev) => {
      const current = prev[questionId] || []
      if (current.includes(option)) {
        return { ...prev, [questionId]: current.filter((o) => o !== option) }
      } else {
        return { ...prev, [questionId]: [...current, option] }
      }
    })
  }

  const questions = [
    {
      id: 'goal',
      label: '🎯 What is your main goal on Velvet House?',
      type: 'radio',
      options: [
        'Earn money',
        'Become famous',
        'Build a community',
        'Explore my sexuality',
        'Have fun & feel free',
      ],
    },
    {
      id: 'style',
      label: '🎭 What type of live content fits you best?',
      type: 'checkbox',
      options: [
        'Sexy & intimate',
        'Funny & light',
        'Gamer & interactive',
        'Romantic & chill',
        'Domination / control',
      ],
    },
    {
      id: 'music',
      label: '🎵 Your favorite music style?',
      type: 'radio',
      options: [
        'R&B / Soul',
        'Rap / Hip-Hop',
        'Pop / Dance',
        'Rock / Metal',
        'Relax / Lofi / Piano',
      ],
    },
    {
      id: 'anime',
      label: '🎥 Favorite anime or show genre?',
      type: 'radio',
      options: [
        'Romantic / School life',
        'Dark / Psychological',
        'Funny / Slice of life',
        'Action / Fantasy',
        'I don’t watch anime',
      ],
    },
    {
      id: 'book',
      label: '📚 Favorite type of book?',
      type: 'radio',
      options: [
        'Erotic',
        'Fantasy',
        'Romance',
        'Biography',
        'I don’t read',
      ],
    },
    {
      id: 'country',
      label: '🌍 What’s your dream destination?',
      type: 'radio',
      options: [
        'Japan',
        'Dubai',
        'USA (NYC / LA)',
        'Bali / Thailand',
        'Somewhere calm & lost',
      ],
    },
    {
      id: 'history',
      label: '🕰️ Favorite era in human history?',
      type: 'radio',
      options: [
        'Ancient Egypt / Rome',
        'Middle Ages',
        'Renaissance / 1700s',
        '20th century',
        'Now — I love my time',
      ],
    },
    {
      id: 'events',
      label: '🥳 Favorite type of party?',
      type: 'radio',
      options: [
        'Private with 2–3 people',
        'Big with music & dancing',
        'Chill with food & talk',
        'I don’t like parties',
      ],
    },
  ]

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 800,
        margin: '0 auto',
        fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: 28, color: '#FFD700', marginBottom: 24 }}>
        👑 Build Your Streaming Identity
      </h1>

      <p style={{ marginBottom: 24, fontSize: 14, color: '#ccc' }}>
        Answer these fun questions so Velvet House and Nova can better understand your personality, help you grow, and suggest content that fits you perfectly.
      </p>

      {questions.map((q) => (
        <section
          key={q.id}
          style={{
            marginBottom: 32,
            background: '#1a1a1a',
            padding: 20,
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h2 style={{ fontSize: 18, color: '#FFD700', marginBottom: 12 }}>{q.label}</h2>

          {q.type === 'checkbox' &&
            q.options.map((opt) => (
              <label key={opt} style={{ display: 'block', marginBottom: 8, fontSize: 14 }}>
                <input
                  type="checkbox"
                  checked={answers[q.id]?.includes(opt) || false}
                  onChange={() => toggleAnswer(q.id, opt)}
                  style={{ marginRight: 8 }}
                />
                {opt}
              </label>
            ))}

          {q.type === 'radio' &&
            q.options.map((opt) => (
              <label key={opt} style={{ display: 'block', marginBottom: 8, fontSize: 14 }}>
                <input
                  type="radio"
                  name={q.id}
                  value={opt}
                  checked={answers[q.id]?.[0] === opt}
                  onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: [opt] }))}
                  style={{ marginRight: 8 }}
                />
                {opt}
              </label>
            ))}
        </section>
      ))}

      <div
        style={{
          marginTop: 40,
          background: '#262626',
          padding: 20,
          borderRadius: 10,
          fontSize: 13,
          color: '#ccc',
        }}
      >
        <p>✅ Your answers are saved locally for now.</p>
        <p>🔒 In the future, they will be synced to your Nova coaching profile.</p>
      </div>
    </main>
  )
}
