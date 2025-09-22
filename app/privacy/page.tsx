'use client'

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        color: '#f5f5f5',
        background: 'linear-gradient(180deg,#2e0d0d 0%,#000)',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: 28, color: '#FFD700', marginBottom: 24 }}>
        🔐 Privacy Policy
      </h1>

      <p style={{ fontSize: 15, lineHeight: 1.6 }}>
        Velvet House is committed to protecting your privacy. This page explains what data we collect, how we use it, and how you can manage your information.
      </p>

      <ul style={{ fontSize: 14, lineHeight: 1.8, paddingLeft: 20, marginTop: 24 }}>
        <li>📥 We collect minimal data: email, username, and device/browser info.</li>
        <li>💳 Payment information is processed securely by Stripe or crypto platforms. We do not store card numbers or wallet keys.</li>
        <li>📧 You may receive transactional emails (login, payout, moderation) but not promotional spam.</li>
        <li>🔒 Your data is encrypted. We never sell or rent your personal info.</li>
        <li>❌ You may request full account and data deletion at any time by contacting us.</li>
        <li>🌍 We comply with GDPR (EU), CCPA (US), and international privacy standards.</li>
      </ul>

      <p style={{ marginTop: 32, fontSize: 13, color: '#ccc' }}>
        For privacy-related questions, please email: <code style={codeStyle}>privacy@velvethouseagency.com</code>
      </p>
    </main>
  )
}

const codeStyle: React.CSSProperties = {
  background: '#222',
  padding: '2px 6px',
  borderRadius: 4
}
