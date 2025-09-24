'use client'

import { useState } from 'react'

export default function PrivateLiveToggle() {
  const [isPrivate, setIsPrivate] = useState(false)

  return (
    <div className="absolute top-2 right-2">
      <button
        onClick={() => setIsPrivate(!isPrivate)}
        className={`px-3 py-1 rounded-full text-sm font-bold ${
          isPrivate ? "bg-red-600" : "bg-green-600"
        }`}
      >
        {isPrivate ? "🔒 Private Live" : "🔓 Public Live"}
      </button>
    </div>
  )
}
