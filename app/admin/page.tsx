'use client'

export default function AdminPage() {
  const totalLotusPurchased = 3_800_000
  const totalLotusPaidOut = 2_450_000
  const netLotus = totalLotusPurchased - totalLotusPaidOut
  const usd = (lotus: number) => `$${(lotus * 0.00465).toLocaleString('en-US')}`

  const criticalAlerts = [
    { id: 1, user: 'nora_777', type: 'Burnout risk', message: 'Feeling depressed, want to quit...' },
    { id: 2, user: 'admin_alert', type: 'Suspicious', message: 'Possible underage viewer in private chat' },
  ]

  return (
    <main
      style={{
        padding: '40px 24px',
        maxWidth: 960,
        margin: '0 auto',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: 28, color: '#FFD700', marginBottom: 24 }}>
        👑 Velvet House – Admin Dashboard
      </h1>

      <section style={section}>
        <h2 style={h2}>📊 Platform Revenue</h2>
        <p>Total Lotus purchased: <strong>{totalLotusPurchased.toLocaleString()} ♢</strong></p>
        <p>Total paid to streamers: <strong>{totalLotusPaidOut.toLocaleString()} ♢</strong></p>
        <p>Net revenue: <strong style={{ color: 'lightgreen' }}>{netLotus.toLocaleString()} ♢</strong> = <strong>{usd(netLotus)}</strong></p>
      </section>

      <section style={section}>
        <h2 style={h2}>🧠 Nova Alerts</h2>
        {criticalAlerts.length === 0 ? (
          <p style={{ fontSize: 14, color: '#aaa' }}>No current alerts.</p>
        ) : (
          <ul style={{ marginTop: 10, paddingLeft: 20 }}>
            {criticalAlerts.map((a) => (
              <li key={a.id} style={{ marginBottom: 12, fontSize: 14 }}>
                <strong>{a.type}</strong> from <code style={code}>{a.user}</code>: {a.message}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section style={section}>
        <h2 style={h2}>👑 Velvet King Identity</h2>
        <p>
          Logged in as: <strong style={{ color: '#FFD700' }}>Velvet King</strong> (admin)  
        </p>
        <p style={{ fontSize: 13, color: '#aaa' }}>
          Your badge will be visible during live entries, comments, and VIP interactions.
        </p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2 style={h2}>🛠️ Admin Tools (Coming Soon)</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.6, fontSize: 14 }}>
          <li>Agency payouts control panel</li>
          <li>Moderation: suspend / reactivate accounts</li>
          <li>Live monitoring of top earning streamers</li>
          <li>Automated flag review (NSFW AI, abuse reports)</li>
        </ul>
      </section>
    </main>
  )
}

const section: React.CSSProperties = {
  marginBottom: 48
}

const h2: React.CSSProperties = {
  fontSize: 20,
  color: '#FFD700',
  marginBottom: 12
}

const code: React.CSSProperties = {
  background: '#222',
  padding: '2px 6px',
  borderRadius: 4
            }
