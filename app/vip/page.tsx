// /app/vip/page.tsx

export default function VipPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12, color: "#FFD700" }}>💎 VIP Membership</h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, color: "#D4AF37" }}>Standard Access (Free)</h2>
        <ul style={{ paddingLeft: 20, color: "#f5f5f5" }}>
          <li>Access public lives</li>
          <li>Chat in public room</li>
          <li>Private chat with streamers (text, photo, video)</li>
          <li>❌ Cannot respond to private live invitations</li>
          <li>❌ Cannot buy nude photos on streamer profiles</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, color: "#FFD700" }}>⭐ VIP — <span style={{ fontSize: 18 }}>€9.99 / month</span></h2>
        <ul style={{ paddingLeft: 20, color: "#f5f5f5" }}>
          <li>Access private live shows (group or 1-on-1)</li>
          <li>Access VIP chat room</li>
          <li>See photos shared in VIP chat (with watermark, visible for 3 days)</li>
          <li>Each photo has a custom price set by the streamer</li>
          <li>Buy nude photos on streamer profiles</li>
          <li>VIP badge on your profile</li>
          <li><strong>+1000 Lotus included</strong></li>
        </ul>
        <button
          style={{
            marginTop: 12,
            background: "#FFD700",
            color: "#000",
            padding: "10px 24px",
            fontWeight: "bold",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          Subscribe to VIP
        </button>
      </section>

      <section>
        <h2 style={{ fontSize: 22, color: "#FFAA00" }}>👑 VIP Gold — One-time access</h2>
        <p style={{ color: "#f5f5f5" }}>
          Buy the <strong>50,000 Lotus pack +5%</strong> to unlock VIP Gold benefits:
        </p>
        <ul style={{ paddingLeft: 20, color: "#f5f5f5" }}>
          <li>All VIP features</li>
          <li>Discreet watermark on VIP photos</li>
          <li>Ability to save photos to your private folder</li>
          <li>Anonymous purchases enabled</li>
          <li>Watch streams in anonymous mode</li>
          <li><strong>+5% extra Lotus</strong> on every pack purchase</li>
        </ul>
        <a
          href="/lotus"
          style={{
            display: "inline-block",
            marginTop: 12,
            background: "#FFAA00",
            color: "#000",
            padding: "10px 24px",
            fontWeight: "bold",
            border: "none",
            borderRadius: 12,
            textDecoration: "none",
          }}
        >
          Buy VIP Gold (50,000 Lotus)
        </a>
      </section>
    </main>
  );
}
