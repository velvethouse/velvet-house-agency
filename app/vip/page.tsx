'use client'

import Link from 'next/link'

export default function VipPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 28, marginBottom: 24, color: '#FFD700' }}>💎 VIP Membership</h1>

      {/* 🧍‍♂️ Free Access */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, color: '#D4AF37' }}>Free Access (Public)</h2>
        <ul style={{ paddingLeft: 20, color: '#f5f5f5', lineHeight: 1.7, marginTop: 10 }}>
          <li>Access public live streams</li>
          <li>Chat in public rooms</li>
          <li>View creator profiles and portfolios</li>
          <li>Support creators with virtual gifts</li>
          <li>❌ No access to exclusive events</li>
          <li>❌ No Lotus bonuses on purchases</li>
        </ul>
      </section>

      {/* ⭐ VIP */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, color: '#FFD700' }}>
          ⭐ VIP – <span style={{ fontSize: 18 }}>€9.99 / month</span>
        </h2>
        <ul style={{ paddingLeft: 20, color: '#f5f5f5', lineHeight: 1.7, marginTop: 10 }}>
          <li>Access exclusive live events and premieres</li>
          <li>Join the VIP community chat room</li>
          <li>View special behind-the-scenes content (3 days access)</li>
          <li>Support creators with priority messages and badges</li>
          <li>VIP badge displayed on your profile</li>
          <li><strong>+2% bonus Lotus on every pack purchased</strong></li>
          <li><strong>+1000 Lotus included</strong></li>
        </ul>

        <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            className="btn3d btn3d--gold"
            style={{ padding: '10px 20px', fontWeight: 600 }}
            onClick={() => alert('Stripe Checkout to be integrated')}
          >
            💳 Pay with Card
          </button>

          <button
            className="btn3d"
            style={{
              background: '#00c39a',
              color: '#000',
              padding: '10px 20px',
              fontWeight: 600,
              borderRadius: 12,
              border: 'none'
            }}
            onClick={() => alert('USDT payment address copied')}
          >
            🪙 Pay with USDT (TRC20)
          </button>
        </div>

        <p style={{ fontSize: 12, color: '#ccc', marginTop: 10 }}>
          🔁 Crypto payments are not recurring. You'll need to renew manually each month.
        </p>
      </section>

      {/* 👑 VIP GOLD */}
      <section>
        <h2 style={{ fontSize: 22, color: '#FFAA00' }}>👑 VIP Gold – One-time unlock</h2>
        <p style={{ color: '#f5f5f5', marginTop: 10 }}>
          Unlock <strong>VIP Gold</strong> by purchasing the{' '}
          <strong>100,000 Lotus pack</strong>. This level is automatically activated after payment.
        </p>

        <ul style={{ paddingLeft: 20, color: '#f5f5f5', lineHeight: 1.7, marginTop: 10 }}>
          <li>All VIP benefits included</li>
          <li>Discreet watermark on exclusive content</li>
          <li>Save your favorite content to a private folder</li>
          <li>Anonymous mode for content viewing and purchases</li>
          <li><strong>+5% bonus Lotus on all future pack purchases</strong></li>
        </ul>

        <Link
          href="/lotus#vip-gold-pack"
          style={{
            display: 'inline-block',
            marginTop: 16,
            background: '#FFAA00',
            color: '#000',
            padding: '10px 24px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: 12,
            textDecoration: 'none'
          }}
        >
          🛍️ Buy VIP Gold (100,000 Lotus)
        </Link>
      </section>
    </main>
  )
}
