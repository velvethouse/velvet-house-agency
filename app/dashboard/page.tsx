'use client'

export default function DashboardPage() {
  const username = "NovaUser" // à remplacer par vrai username connecté
  const lotus = 18350
  const isVip = true
  const isGold = true

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(180deg,#2e0d0d 0%,#000 100%)",
        color: "#fff",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        maxWidth: 960,
        margin: "0 auto"
      }}
    >
      <h1 style={{ fontSize: 28, color: "#FFD700", marginBottom: 24 }}>
        🧾 Dashboard
      </h1>

      <section style={section}>
        <h2 style={h2}>👤 User Info</h2>
        <p>Username: <strong>{username}</strong></p>
        <p>Lotus balance: <strong>{lotus.toLocaleString()} ♢</strong></p>
        <p>Status: {isVip ? "💎 VIP" : "Standard"} {isGold && " + 👑 VIP Gold"}</p>
      </section>

      <section style={section}>
        <h2 style={h2}>🎁 Recent Activity</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 14 }}>
          <li>🌹 Sent 1 Rose to amelia_vip</li>
          <li>💎 Purchased 10,000 Lotus</li>
          <li>🖼️ Unlocked NSFW photo from chloe_vh</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={h2}>🔒 Privacy & Settings</h2>
        <p>🔘 Anonymous viewing: <strong>Enabled</strong></p>
        <p>🪙 Auto-refill: <strong>Disabled</strong></p>
      </section>
    </main>
  )
}

const section: React.CSSProperties = {
  marginBottom: 48,
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  paddingBottom: 24
}

const h2: React.CSSProperties = {
  fontSize: 20,
  color: "#FFD700",
  marginBottom: 12
}
