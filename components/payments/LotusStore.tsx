'use client'

import React from 'react'

const lotusPacks = [
  { lotus: 1000, price: 9.99 },
  { lotus: 2000, price: 18.99 },
  { lotus: 5000, price: 45.00 },
  { lotus: 10000, price: 89.00 },
  { lotus: 20000, price: 169.00 },
  { lotus: 50000, price: 399.00 },
  { lotus: 100000, price: 770.00 },
  { lotus: 200000, price: 1490.00 },
  { lotus: 500000, price: 3690.00 },
  { lotus: 1000000, price: 7000.00 }
]

const LotusStore: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontSize: 24, color: '#fff', marginBottom: 24 }}>💎 Buy Lotus</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        {lotusPacks.map((pack) => (
          <div
            key={pack.lotus}
            style={{
              background: '#111',
              borderRadius: 12,
              padding: 16,
              textAlign: 'center',
              color: '#fff',
              boxShadow: '0 0 8px rgba(255,255,255,0.05)',
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600 }}>{pack.lotus.toLocaleString()} 🪷</div>
            <div style={{ fontSize: 14, margin: '8px 0' }}>{pack.price.toFixed(2)} €</div>
            <button
              style={{
                background: '#ff007f',
                border: 'none',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 600,
                marginTop: 8
              }}
              onClick={() => alert(`Pack ${pack.lotus} 🪷 selected (à brancher)`)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LotusStore
