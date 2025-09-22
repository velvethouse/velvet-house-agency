'use client'

import { useEffect, useState } from 'react'

export default function NovaAssistant({ context }: { context: 'profile' | 'chat' | 'live' }) {
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (context === 'profile') {
      setMessage("Hi, I'm Nova. Let me know if you need help navigating this creator's page.")
    } else if (context === 'chat') {
      setMessage("Need help or inspiration to talk to her? I'm here to assist you anytime.")
    } else if (context === 'live') {
      setMessage("You're watching a live show. If you have questions or want to interact more, I can help.")
    }
  }, [context])

  return (
    <div className="rounded-2xl bg-black/80 text-white p-4 shadow-lg max-w-md mx-auto mt-4 border border-white/10">
      <div className="text-lg font-semibold mb-2">🧠 Nova – Virtual Assistant</div>
      <p className="text-sm">{message}</p>
    </div>
  )
}
