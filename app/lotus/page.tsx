'use client'

import { useUserStore } from '@/stores/userStore'
import { useState } from 'react'

export default function LotusPage() {
  const { vipStatus } = useUserStore()
  const baseRate = 0.00465

  const getBonusRate = () => {
    if (vipStatus === 'vip') return 0.02
    if (vipStatus === 'vip-gold') return 0.05
    return 0
  }

  const packs = [
    { amount: 1000, label: null },
    { amount: 2000, label: null },
    { amount: 5000, label: null },
    { amount: 10000, label: null },
    { amount: 20000, label: null },
    { amount: 50000, label: 'VIP Gold' },
    { amount: 100000, label: 'GOD' },
    { amount: 200000, label: null },
    { amount: 500000, label: null },
    { amount: 1000000, label: null },
  ]

  const [selectedPack, setSelectedPack] = useState<null | typeof packs[0]>(null)

  const openModal = (pack: typeof packs[0]) => setSelectedPack(pack)
  const closeModal = () => setSelectedPack(null)

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(180deg,#4b1c1c 0%,#2e0d0d 100%)',
        color: '#fff',
        fontFamily: 'system-ui,"Segoe UI",Roboto,Arial,sans-serif',
      }}
    >
      <section style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(22px,6vw,36px)', color: '#D4AF37' }}>💎 Buy Lotus</h1>

        {vipStatus !== 'none' && (
          <p style={{ marginTop: 8, fontSize: 14, color: '#e9dfcf' }}>
            As a {vipStatus === 'vip' ? 'VIP' : 'VIP Gold'}, you receive +{getBonusRate() * 100}% bonus on each pack.
          </p>
        )}

        <div style={{ display: 'grid', gap: 18, marginTop: 32 }}>
          {packs.map((p) => {
            const bonus = Math.floor(p.amount * getBonusRate())
            const total = p.amount + bonus
            const basePrice = p.amount * baseRate
            const adjusted = basePrice * 1.03

            return (
              <div
                key={p.amount}
                style={{
                  background: '#1e0c0c',
                  borderRadius: 12,
                  padding: '20px 16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                  {p.amount.toLocaleString('en-US')} Lotus{' '}
                  {p.label && (
                    <span style={{ fontSize: 14, color: '#FFD700' }}>• {p.label}</span>
                  )}
                </h3>
                <p style={{ margin: '4px 0', fontSize: 14 }}>
                  Price: {adjusted.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
                <p style={{ fontSize: 14, color: '#fff' }}>
                  You will receive: <strong>{total.toLocaleString('en-US')}</strong> Lotus
                </p>
                <button
                  onClick={() => openModal(p)}
                  className="btn3d btn3d--gold"
                  style={{ marginTop: 10, fontSize: 14, padding: '8px 20px' }}
                >
                  Buy
                </button>
              </div>
            )
          })}
        </div>

        {/* 💳 MODAL ACHAT */}
        {selectedPack && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#1e0d0d',
                padding: 30,
                borderRadius: 20,
                maxWidth: 400,
                width: '90%',
                color: '#fff',
                textAlign: 'center',
                border: '1px solid #FFD700',
              }}
            >
              <h2 style={{ fontSize: 22, color: '#FFD700' }}>
                {selectedPack.amount.toLocaleString()} Lotus
              </h2>
              <p style={{ fontSize: 14, margin: '8px 0' }}>
                Price:{' '}
                {(selectedPack.amount * baseRate * 1.03).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
              {vipStatus !== 'none' && (
                <p style={{ fontSize: 14, color: 'lightgreen' }}>
                  Total credited: {(
                    selectedPack.amount + Math.floor(selectedPack.amount * getBonusRate())
                  ).toLocaleString()} Lotus
                </p>
              )}
              <div style={{ marginTop: 20, display: 'grid', gap: 12 }}>
                <button
                  className="btn3d btn3d--gold"
                  style={{ padding: '10px 16px', fontWeight: 600 }}
                  onClick={() => alert('Stripe Checkout à connecter')}
                >
                  💳 Pay with Card
                </button>

                <button
                  className="btn3d"
                  style={{
                    padding: '10px 16px',
                    background: '#00c39a',
                    color: '#000',
                    fontWeight: 600,
                  }}
                  onClick={() => alert('Affichage USDT à connecter')}
                >
                  🪙 Pay with Crypto (USDT)
                </button>

                <button
                  onClick={closeModal}
                  style={{
                    background: 'transparent',
                    border: '1px solid #fff',
                    color: '#fff',
                    padding: '8px 12px',
                    borderRadius: 10,
                    marginTop: 10,
                    fontSize: 13,
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
        }
