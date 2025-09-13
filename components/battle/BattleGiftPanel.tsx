'use client'

import React, { useState, useEffect } from 'react'
import { gifts } from '@/data/gifts'
import Lottie from 'react-lottie-player'

type Props = {
  onEnd?: (winner: 'left' | 'right') => void
  duration?: number // en secondes
}

const BattleGiftPanel: React.FC<Props> = ({ onEnd, duration = 120 }) => {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [score, setScore] = useState({ left: 0, right: 0 })
  const [phase, setPhase] = useState<'battle' | 'goodbye' | 'end'>('battle')

  const sendGift = (side: 'left' | 'right', giftId: string) => {
    const gift = gifts.find((g) => g.id === giftId)
    if (!gift) return

    setScore((prev) => ({
      ...prev,
      [side]: prev[side] + gift.price,
    }))
  }

  useEffect(() => {
    if (timeLeft <= 0 && phase === 'battle') {
      setPhase('goodbye')
      setTimeLeft(20) // 20s de au revoir
      return
    }

    if (timeLeft <= 0 && phase === 'goodbye') {
      setPhase('end')
      const winner = score.left >= score.right ? 'left' : 'right'
      onEnd?.(winner)
      return
    }

    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft, phase])

  const phaseTitle = {
    battle: '🥊 Battle in progress',
    goodbye: '💬 20 seconds to say goodbye',
    end: '✅ Battle finished',
  }

  return (
    <div style={{ padding: 16, background: '#111', borderRadius: 12, color: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div>{phaseTitle[phase]}</div>
        <div style={{ fontSize: 18, fontWeight: 600 }}>⏱ {timeLeft}s</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h3>Streameuse A</h3>
          <div style={{ fontSize: 20, fontWeight: 600 }}>{score.left} 🪷</div>
          {phase === 'battle' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 12 }}>
              {gifts.slice(0, 6).map((gift) => (
                <div key={gift.id} onClick={() => sendGift('left', gift.id)} style={{ cursor: 'pointer' }}>
                  <Lottie loop play path={`/gifts/${gift.file}`} style={{ width: 40, height: 40 }} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <h3>Streameuse B</h3>
          <div style={{ fontSize: 20, fontWeight: 600 }}>{score.right} 🪷</div>
          {phase === 'battle' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 12 }}>
              {gifts.slice(6, 12).map((gift) => (
                <div key={gift.id} onClick={() => sendGift('right', gift.id)} style={{ cursor: 'pointer' }}>
                  <Lottie loop play path={`/gifts/${gift.file}`} style={{ width: 40, height: 40 }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BattleGiftPanel
