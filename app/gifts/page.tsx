'use client'

import { gifts } from '@/lib/gifts'
import GiftPlayer from '@/app/components/GiftPlayer'

export default function GiftsPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg,#1a1a1a,#0e0e0e)',
        padding: '40px 20px',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        color: '#fff'
      }}
    >
      <section style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h1 style={{ fontSize: 28, color: '#FFD700', marginBottom: 24 }}>
          🎁 Velvet House Gifts
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 24
          }}
        >
          {gifts.map((gift) => (
            <div
              key={gift.name}
              style={{
                background: '#1e0d0d',
                borderRadius: 12,
                padding: '16px 12px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: '0.3s ease',
              }}
            >
              <GiftPlayer name={gift.name} size={160} autoPlay loop={false} />

              <p style={{ marginTop: 10, fontSize: 16 }}>{gift.symbol}</p>
              <p style={{ color: '#FFD700', fontSize: 14 }}>{gift.price.toLocaleString()} ♢</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
