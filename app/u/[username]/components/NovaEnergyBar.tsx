'use client'

import { useEffect, useState } from 'react'

export default function NovaEnergyBar({ username }: { username: string }) {
  const [level, setLevel] = useState<'high' | 'medium' | 'low'>('high')

  useEffect(() => {
    // 🔁 Simule un niveau basé sur pseudo ou horloge
    const hour = new Date().getHours()
    if (hour >= 0 && hour < 8) setLevel('low')
    else if (hour >= 8 && hour < 18) setLevel('medium')
    else setLevel('high')

    // 🔮 Plus tard : lecture réelle depuis backend / Nova IA
  }, [])

  const getLabel = () => {
    switch (level) {
      case 'high':
        return '🔥 High motivation – Great time to go live!'
      case 'medium':
        return '⚠️ Medium energy – Consider a chill session'
      case 'low':
        return '🛑 Low energy – Rest or prepare content offline'
    }
  }

  const getColor = () => {
    switch (level) {
      case 'high':
        return 'linear-gradient(to right, #22c55e, #84cc16)'
      case 'medium':
        return 'linear-gradient(to right, #f59e0b, #facc15)'
      case 'low':
        return 'linear-gradient(to right, #ef4444, #f87171)'
    }
  }

  return (
    <div
      style={{
        marginTop: 32,
        padding: '16px 20px',
        borderRadius: 12,
        background: '#1a1a1a',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          background: getColor(),
          borderRadius: 8,
          height: 12,
          marginBottom: 12,
          transition: '0.3s ease',
        }}
      ></div>

      <p style={{ fontSize: 13, color: '#ccc' }}>{getLabel()}</p>
    </div>
  )
    }
