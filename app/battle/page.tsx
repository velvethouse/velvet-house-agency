'use client'

import React, { useState } from 'react'
import BattleGiftPanel from '@/components/battle/BattleGiftPanel'

export default function BattlePage() {
  const [winner, setWinner] = useState<'left' | 'right' | null>(null)

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '32px 20px', color: '#f5f5f7' }}>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>🔥 Battle Mode</h1>

      {!winner ? (
        <BattleGiftPanel onEnd={(w) => setWinner(w)} />
      ) : (
        <div
          style={{
            padding: 24,
            background: '#111',
            borderRadius: 12,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          🏆 Gagnante : {winner === 'left' ? 'Streameuse A' : 'Streameuse B'}  
          <br />
          🎁 +2% bonus sur les gifts reçus
        </div>
      )}
    </main>
  )
}
