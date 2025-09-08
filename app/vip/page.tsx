// /app/vip/page.tsx

export default function VipPage() {
  return (
    <main style={{ padding: "30px 16px", maxWidth: 820, margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: 24 }}>
        💎 VIP Memberships
      </h1>

      <p style={{ color: "#d7c9b3", fontSize: 16, marginBottom: 32 }}>
        Unlock exclusive features by becoming a VIP. Your access, your rules. No hidden fees.
      </p>

      {/* Standard */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: "#D4AF37" }}>🔓 Standard (Free)</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
          <li>Access to public live streams</li>
          <li>Access to public chat</li>
          <li>Private messaging with streamers (text, photo, video)</li>
          <li>❌ Cannot access private chat invitations during lives</li>
          <li>❌ Cannot purchase nude photos from profiles</li>
        </ul>
      </section>

      {/* VIP */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: "#D4AF37" }}>💎 VIP – €9.99/month</h2>
        <p style={{ margin: "4px 0 12px", color: "#d7c9b3" }}>
          Includes <strong>+1000 Lotus</strong> with every renewal
        </p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
          <li>Access to VIP group chat</li>
          <li>Access to private live streams (group or 1-on-1)</li>
          <li>See photos shared in VIP chat (with watermark, visible for 3 days)</li>
          <li>Each photo has a custom price set by the streamer</li>
          <li>VIP badge displayed on your profile</li>
        </ul>
      </section>

      {/* VIP Gold */}
      <section>
        <h2 style={{ color: "#D4AF37" }}>👑 VIP Gold</h2>
        <p style={{ margin: "4px 0 12px", color: "#d7c9b3" }}>
          One-time access: buy the <strong>100,000 Lotus pack</strong> + <strong>5 %</strong>.
        </p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
          <li>All VIP features</li>
          <li>Discreet watermark on VIP photos</li>
          <li>Ability to save photos to your private folder</li>
          <li>Anonymous purchases enabled</li>
          <li>Watch streams in anonymous mode</li>
          <li><strong>+5 % extra Lotus</strong> on every pack purchase</li>
        </ul>
      </section>
    </main>
  );
}
