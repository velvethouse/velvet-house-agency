'use client'

import { useState, useEffect } from 'react'

export default function NovaUsageLimit({ username }: { username: string }) {
  const maxDaily = 10
  const storageKey = `nova-usage-${username}`

  const [remaining, setRemaining] = useState<number>(maxDaily)

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const saved = localStorage.getItem(storageKey)
    const parsed = saved ? JSON.parse(saved) : { date: today, count: 0 }

    if (parsed.date !== today) {
      localStorage.setItem(storageKey, JSON.stringify({ date: today, count: 0 }))
      setRemaining(maxDaily)
    } else {
      setRemaining(maxDaily - parsed.count)
    }
  }, [])

  return (
    <div
      style={{
        marginTop: 24,
        fontSize: 13,
        color: '#aaa',
        textAlign: 'right',
        fontFamily: 'system-ui',
      }}
    >
      🧠 Nova responses left today: <strong>{remaining} / {maxDaily}</strong>
    </div>
  )
}
