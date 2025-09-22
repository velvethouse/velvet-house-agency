'use client'

import NovaEnergyBar from './NovaEnergyBar'

export default function NovaCareerHeader({
  username,
  rank,
  isVip,
  isGold,
}: {
  username: string
  rank: 'Cristalline' | 'Butterfly' | 'Golden' | 'Fire'
  isVip: boolean
  isGold: boolean
}) {
  return (
    <div
      style={{
        marginBottom: 32,
        background: '#1a1a1a',
        padding: 24,
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
      }}
    >
      <h1 style={{ fontSize: 22, color: '#FFD700', marginBottom: 8 }}>
        👋 Welcome, {username}
      </h1>

      <p style={{ fontSize: 14, color: '#ccc', marginBottom: 12 }}>
        You're currently <strong>{rank}</strong>{' '}
        {isVip && '• 💎 VIP'} {isGold && '• 👑 VIP Gold'}
      </p>

      <NovaEnergyBar username={username} />

      <p style={{ fontSize: 13, color: '#aaa', marginTop: 16 }}>
        🧠 I’m Nova. Based on your energy and profile, I’ll help you plan your career, adapt your live style and grow step by step.
      </p>
    </div>
  )
        }
