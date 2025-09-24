'use client'

import { useState } from 'react'

export default function NovaLiveGuard({ onStop }: { onStop: () => void }) {
  const [alerts, setAlerts] = useState(0)

  // Simuler une détection d'infraction (plus tard IA/automatique)
  const triggerAlert = () => {
    if (alerts < 1) {
      setAlerts(alerts + 1)
      alert("⚠️ Nova: Please respect Velvet House rules!")
    } else {
      alert("❌ Nova: Live terminated due to repeated violations.")
      onStop() // stoppe le live
    }
  }

  return (
    <div className="absolute top-2 left-2 bg-black/60 rounded p-2 text-xs text-white">
      <p>🦋 Nova Guard Active</p>
      <p>Alerts: {alerts} / 2</p>
      {/* 🔧 Bouton test (à remplacer par détection auto) */}
      <button
        onClick={triggerAlert}
        className="mt-1 bg-red-600 px-2 py-1 rounded text-xs hover:bg-red-700"
      >
        ⚠️ Trigger Alert
      </button>
    </div>
  )
}
