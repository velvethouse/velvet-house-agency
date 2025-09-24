'use client'

import { useEffect, useState } from 'react'

export default function GoalWidget() {
  const [lotusEarned, setLotusEarned] = useState(14400) // exemple valeur
  const goalTarget = 20000

  const progress = Math.min((lotusEarned / goalTarget) * 100, 100)

  useEffect(() => {
    if (lotusEarned >= goalTarget) {
      alert("🎉 Congratulations! Weekly goal reached. +2% bonus Lotus credited!")
    }
  }, [lotusEarned])

  return (
    <div className="bg-neutral-900 rounded-xl p-4 text-white max-w-md">
      <h2 className="font-bold text-lg mb-2">🎯 Weekly Goal</h2>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-yellow-400"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-sm">
        {lotusEarned.toLocaleString()} / {goalTarget.toLocaleString()} Lotus
      </p>
    </div>
  )
}
