'use client'

import React from 'react'

const lotusPacks = [
  { lotus: 1000, price: 4.65, bonus: 50 },
  { lotus: 2000, price: 9.30, bonus: 100 },
  { lotus: 5000, price: 23.25, bonus: 250 },
  { lotus: 10000, price: 46.50, bonus: 500 },
  { lotus: 20000, price: 93.00, bonus: 1000 },
  { lotus: 50000, price: 232.50, bonus: 2500, label: 'VIP Gold' },
  { lotus: 100000, price: 465.00, bonus: 5000, label: 'GOD' },
  { lotus: 200000, price: 930.00, bonus: 10000 },
  { lotus: 500000, price: 2325.00, bonus: 25000 },
  { lotus: 1000000, price: 4650.00, bonus: 50000 },
]

const LotusStore: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontSize: 24, color: '#fff', marginBottom: 24 }}>💎 Buy Lotus</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {lotusPacks.map((pack) => (
          <div
            key={pack.lotus}
            style={{
              background: '#1a0e0e',
              borderRadius: 12,
              padding: 20,
              color: '#fff',
              boxShadow: '0 0 12px rgba(255, 255, 255, 0.05)',
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>
              {pack.lotus.toLocaleString()} Lotus {pack.label ? <span style={{ color: '#ffd700' }}>· {pack.label}</span> : ''}
            </div>
            <div style={{ fontSize: 16 }}>{pack.price.toFixed(2)} €</div>
            <div style={{ fontSize: 14, color: '#00ff99', marginTop: 6 }}>
              +{pack.bonus.toLocaleString()} Lotus bonus
            </div>
            <button
              onClick={() => alert(`Buying ${pack.lotus} Lotus...`)}
              style={{
                marginTop: 12,
                background: '#ffd700',
                border: 'none',
                color: '#000',
                padding: '8px 16px',
                fontWeight: 600,
                borderRadius: 10,
                cursor: 'pointer',
                fontSize: 15,
              }}
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
