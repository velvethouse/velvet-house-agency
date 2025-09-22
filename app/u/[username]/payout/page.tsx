'use client'

type Props = {
  lotus: number            // solde réel
  currency: 'USDT' | 'SEPA' | 'HK' // devise choisie
}

export default function PayoutPage({ lotus, currency }: Props) {
  const minimumLotus = 7000

  const getCommissionRate = (lotus: number) => {
    if (lotus >= 1_000_000) return 0.7
    if (lotus >= 200_000) return 0.67
    if (lotus >= 10_000) return 0.64
    return 0.62
  }

  const getCurrencyFee = (currency: string) => {
    if (currency === 'SEPA') return 0.02
    if (currency === 'USDT') return 0.005
    return 0 // HK local bank
  }

  const commission = getCommissionRate(lotus)
  const fee = getCurrencyFee(currency)
  const canWithdraw = lotus >= minimumLotus

  const payoutUSD = lotus * commission * 0.00465 * (1 - fee)
  const payoutStr = payoutUSD.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: '0 auto',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        color: '#fff'
      }}
    >
      <h1 style={{ fontSize: 26, color: '#D4AF37', marginBottom: 24 }}>💸 Request Payout</h1>

      <section
        style={{
          background: '#2e0d0d',
          border: '1px solid rgba(212,175,55,0.2)',
          padding: 20,
          borderRadius: 12,
          marginBottom: 32
        }}
      >
        <p><strong>Available Lotus:</strong> {lotus.toLocaleString()} ♢</p>
        <p><strong>Commission rate:</strong> {(commission * 100).toFixed(0)}%</p>
        <p><strong>Currency:</strong> {currency} ({(fee * 100).toFixed(1)}% fee)</p>

        <p style={{ marginTop: 10 }}>
          <strong>You will receive:</strong>{' '}
          <span style={{ color: 'lightgreen', fontSize: 18 }}>{payoutStr}</span>
        </p>

        <button
          className="btn3d btn3d--gold"
          disabled={!canWithdraw}
          style={{
            marginTop: 20,
            opacity: canWithdraw ? 1 : 0.5,
            cursor: canWithdraw ? 'pointer' : 'not-allowed',
            padding: '10px 24px',
            fontWeight: 600
          }}
          onClick={() => {
            if (canWithdraw) alert('✅ Request sent — automation coming soon!')
          }}
        >
          {canWithdraw ? 'Request payout' : 'Minimum 7,000 Lotus required'}
        </button>
      </section>

      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 18, color: '#D4AF37', marginBottom: 12 }}>💳 Payment Details</h2>

        <ul style={{ fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
          <li>
            <strong>🏦 Bank Transfer (Hong Kong):</strong><br />
            Account Name: <code style={codeStyle}>Novalink Limited</code><br />
            Bank: <code style={codeStyle}>HSBC Hong Kong</code><br />
            Account Number: <code style={codeStyle}>123-456789-001</code><br />
            SWIFT: <code style={codeStyle}>HSBCHKHHHKH</code>
          </li>

          <li style={{ marginTop: 12 }}>
            <strong>🪙 USDT (TRC20):</strong><br />
            Wallet: <code style={codeStyle}>TM3XpYa5MVeG8bK8T3XHEDaK4dS8xvPf8T</code>
          </li>
        </ul>

        <p style={{ fontSize: 13, color: '#aaa', marginTop: 16 }}>
          ✅ Your payout will be processed automatically once requested.  
          You will receive a confirmation once it's sent.
        </p>
      </section>
    </main>
  )
}

const codeStyle: React.CSSProperties = {
  background: '#222',
  padding: '2px 6px',
  borderRadius: 4
}
