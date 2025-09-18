'use client'

import { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'

export default function LotusTestPage() {
  const [json, setJson] = useState<any>(null)

  useEffect(() => {
    fetch('/gifts/lotus.json')
      .then((res) => res.json())
      .then(setJson)
  }, [])

  if (!json) return <div className="text-white p-10">⏳ Loading lotus.json...</div>

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-[300px] h-[300px]">
        <Lottie
          loop={true}
          play
          animationData={json}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
    }
