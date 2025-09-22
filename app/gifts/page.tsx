'use client'

import { useEffect, useState } from 'react'
import GiftPlayer from '../components/GiftPlayer'

interface Gift {
  name: string
  label: string
  symbol: string
}

export default function GiftsPage() {
  const [gifts, setGifts] = useState<Gift[]>([])

  useEffect(() => {
    fetch('/data/gifts.json')
      .then((res) => res.json())
      .then((data) => setGifts(data))
  }, [])

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#1a1a1a',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      {gifts.map((gift) => (
        <div key={gift.name} style={{ margin: 20, textAlign: 'center' }}>
          <GiftPlayer name={gift.name} size={200} />
          <p style={{ color: '#fff', marginTop: 8 }}>{gift.label}</p>
        </div>
      ))}
    </main>
  )
        }
