'use client'

import { useEffect, useState } from 'react'

type Answers = Record<string, string[]>

export default function NovaCareerCoach({ answers }: { answers: Answers }) {
  const [advice, setAdvice] = useState<string>('')

  useEffect(() => {
    const goal = answers.goal?.[0]
    const style = answers.style || []
    const music = answers.music?.[0]
    const anime = answers.anime?.[0]
    const book = answers.book?.[0]

    let result = `Hi 💬 I'm Nova, your AI coach. Here's what I see:\n\n`

    if (goal) {
      result += `🎯 Your main goal is **${goal}**.\n`
    }

    if (style.length > 0) {
      result += `🎭 Your ideal live style: **${style.join(', ')}**.\n`
    }

    if (music) {
      result += `🎵 Music that inspires you: **${music}**.\n`
    }

    if (anime) {
      result += `🎥 You like: **${anime}** type of anime.\n`
    }

    if (book) {
      result += `📚 Your favorite reading: **${book}**.\n`
    }

    // Analyse simplifiée
    if (style.includes('Sexy & intimate')) {
      result += `💡 Suggestion: Focus on late-night lives with soft music, candles and intimate vibe.\n`
    }

    if (style.includes('Funny & light')) {
      result += `💡 Suggestion: Add games, Q&A, or funny challenges in your lives.\n`
    }

    if (goal === 'Become famous') {
      result += `🚀 Career tip: Use short clips from your lives on social media to build audience fast.\n`
    }

    result += `\n🧠 I will keep analyzing your results to guide you better. You can change your answers anytime.`

    setAdvice(result)
  }, [answers])

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
      {advice || '🧠 Loading Nova analysis...'}
    </section>
  )
}
