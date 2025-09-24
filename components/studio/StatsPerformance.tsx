'use client'

import { useState } from 'react'

type Stat = {
  period: string
  lotus: number
}

export default function StatsPerformance() {
  const [stats] = useState<Stat[]>([
    { period: 'Today', lotus: 3200 },
    { period: 'This Week', lotus: 14400 },
    { period: 'This Month', lotus: 48000 },
  ])

  const best = stats.reduce((prev, curr) => (curr.lotus > prev.lotus ? curr : prev))

  return (
    <div className="bg-neutral-900 rounded-xl p-4 text-white max-w-lg">
      <h2 className="font-bold text-lg mb-2">📊 Performance Stats</h2>
      <ul className="space-y-1 mb-3">
        {stats.map((s, i) => (
          <li key={i} className="flex justify-between">
            <span>{s.period}</span>
            <span>{s.lotus.toLocaleString()} ♢</span>
          </li>
        ))}
      </ul>
      <div className="text-sm text-yellow-400">
        🔥 Best period: {best.period} with {best.lotus.toLocaleString()} Lotus
      </div>
    </div>
  )
}
