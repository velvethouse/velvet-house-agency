'use client'

import { useState } from 'react'

export default function EventNotice() {
  const [eventText, setEventText] = useState<string>(
    "🎉 My next live event will be amazing!"
  )

  return (
    <div className="bg-neutral-900 rounded-xl p-4 text-white">
      <h2 className="font-bold text-lg mb-2">📢 Streameuse Event</h2>

      {/* Public preview */}
      <p className="mb-3 text-yellow-300">{eventText}</p>

      {/* Editor for the streameuse (only in studio) */}
      <textarea
        value={eventText}
        onChange={(e) => setEventText(e.target.value)}
        className="w-full rounded p-2 text-black"
        placeholder="Write your event announcement..."
      />
    </div>
  )
}
