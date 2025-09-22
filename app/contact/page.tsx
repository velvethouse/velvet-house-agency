'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const lower = message.toLowerCase()
    const isCritical =
      lower.includes('urgent') ||
      lower.includes('police') ||
      lower.includes('fraud') ||
      lower.includes('trader') ||
      lower.includes('scam')

    if (isCritical) {
      setResponse('🛑 Message flagged as critical. Sébastien will handle this personally.')
    } else {
      setResponse('✅ Nova will reply to your message shortly. Thank you!')
    }

    // 🔐 À brancher sur un backend/API plus tard
    setEmail('')
    setMessage('')
  }

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 800,
        margin: '0 auto',
        minHeight: '100vh',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        color: '#fff',
      }}
    >
      <h1 style={{ color: '#D4AF37', fontSize: 28, marginBottom: 16 }}>
        📩 Contact Us
      </h1>

      {response ? (
        <p style={{ color: response.startsWith('✅') ? '#6cc66c' : '#FFD700', fontSize: 16 }}>
          {response}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: 'grid', gap: 16, maxWidth: 500 }}
        >
          <label>
            Your Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </label>

          <label>
            Your Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </label>

          <button type="submit" className="btn3d btn3d--gold">
            Send Message
          </button>
        </form>
      )}
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #444',
  background: '#000',
  color: '#fff',
  marginTop: 6,
  fontSize: 14
}
