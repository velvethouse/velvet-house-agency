'use client'

import { useState } from 'react'

export default function SignupPage() {
  const [isTrader, setIsTrader] = useState(false)

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(180deg, #2e0d0d, #000)',
        color: '#fff',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          background: '#1a1a1a',
          padding: 32,
          borderRadius: 16,
          maxWidth: 420,
          width: '100%',
          boxShadow: '0 0 20px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <h1 style={{ fontSize: 24, marginBottom: 20, color: '#FFD700' }}>Create your account</h1>

        <form style={{ display: 'grid', gap: 16 }}>
          <input
            type="text"
            placeholder="Your name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your email"
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Create a password"
            required
            style={inputStyle}
          />

          <label style={{ fontSize: 14 }}>
            <input
              type="checkbox"
              checked={isTrader}
              onChange={() => setIsTrader(!isTrader)}
              style={{ marginRight: 8 }}
            />
            I’m a trader
          </label>

          {/* Bloc KYC affiché si trader coché */}
          {isTrader && (
            <div
              style={{
                background: '#2e0d0d',
                padding: 12,
                borderRadius: 10,
                fontSize: 13,
                lineHeight: 1.5,
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              🔐 As a trader, you may be subject to additional verification.  
              KYC (ID verification) will be required before using certain features.  
              A secure form will be available in your dashboard.
            </div>
          )}

          <button
            type="submit"
            className="btn3d btn3d--gold"
            style={{ padding: '12px 20px', fontWeight: 600, marginTop: 8 }}
          >
            Sign up
          </button>
        </form>
      </div>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid #444',
  background: '#000',
  color: '#fff',
  fontSize: 14,
  outline: 'none'
              }
