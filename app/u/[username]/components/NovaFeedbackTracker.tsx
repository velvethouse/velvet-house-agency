'use client'

import { useEffect, useState } from 'react'

type Props = {
  username: string
  giftsThisWeek: number
  giftsLastWeek: number
  bestTimeRange: string
}

export default function NovaFeedbackTracker({
  username,
  giftsThisWeek,
  giftsLastWeek,
  bestTimeRange
}: Props) {
  const [delta, setDelta] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>('')

  useEffect(() => {
    const diff = giftsThisWeek - giftsLastWeek
    const pct = giftsLastWeek > 0 ? (diff / giftsLastWeek) * 100 : 100
    setDelta(pct)

    let result = `👋 Hi ${username}, here's your weekly feedback from Nova:\n\n`

    if (pct > 20) {
      result += `✅ You've gained **+${pct.toFixed(1)}%** more gifts than last week!\n`
      result += `🔥 You're clearly on a hot streak – keep it up!\n`
    } else if (pct > 0) {
      result += `📈 You improved by **+${pct.toFixed(1)}%** compared to last week.\n`
      result += `Nice progress – Nova is proud of you.\n`
    } else if (pct < 0) {
      result += `⚠️ Your gifts are down **${Math.abs(pct).toFixed(1)}%** vs last week.\n`
      result += `Let’s review your schedule or energy before your next live.\n`
    } else {
      result += `🟡 No progress this week. Try something fresh or change the time slot.\n`
    }

    result += `\n⏰ Best connection time this week: **${bestTimeRange}**.`

    setFeedback(result)
  }, [username, giftsThisWeek, giftsLastWeek, bestTimeRange])

  return (
    <section
      style={{
        marginTop: 40,
        background: '#1a1a1a',
        padding: 24,
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        whiteSpace: 'pre-line',
        fontSize: 14,
        lineHeight: 1.6,
        color: '#f5f5f5',
      }}
    >
      {feedback || '🧠 Analyzing performance...'}
    </section>
  )
      }
