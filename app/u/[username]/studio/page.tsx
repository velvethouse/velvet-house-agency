'use client'

import { useState } from 'react'

type Props = {
  initialAllowBattle?: boolean
  initialFrequency?: number
}

export default function BattleFrequencySettings({
  initialAllowBattle = false,
  initialFrequency = 1,
}: Props) {
  const [allowBattle, setAllowBattle] = useState(initialAllowBattle)
  const [battleFrequency, setBattleFrequency] = useState(initialFrequency)

  const toggleAllowBattle = () => {
    setAllowBattle((prev) => !prev)
  }

  return (
    <section style={{ marginTop: 40 }}>
      <h2 style={{ color: "#FFD700", marginBottom: 12 }}>⚔️ Battle Frequency</h2>

      <label style={{ display: "block", marginBottom: 8 }}>
        <input
          type="checkbox"
          checked={allowBattle}
          onChange={toggleAllowBattle}
        />
        Allow battle mode
      </label>

      {allowBattle && (
        <>
          <label style={{ display: "block", marginTop: 12 }}>
            Select how many battles per hour you want:
            <select
              value={battleFrequency}
              onChange={(e) => setBattleFrequency(parseInt(e.target.value))}
              style={{
                marginTop: 8,
                padding: 8,
                borderRadius: 6,
                border: "1px solid #aaa",
                background: "#1c1c1c",
                color: "#fff",
              }}
            >
              <option value={1}>1 battle/hour</option>
              <option value={2}>2 battles/hour</option>
              <option value={3}>3 battles/hour</option>
              <option value={4}>4 battles/hour</option>
              <option value={5}>5 battles/hour</option>
              <option value={10}>10 battles/hour</option>
              <option value={15}>15 battles/hour (max)</option>
            </select>
          </label>
          <p style={{ fontSize: 13, color: "#aaa", marginTop: 10 }}>
            You can change this anytime if you feel like battles are tiring your viewers.
          </p>
        </>
      )}
    </section>
  )
                }
