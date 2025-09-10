// 📄 /app/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#4b1c1c 0%,#2e0d0d 100%)",
        color: "#f5f5f5",
        padding: "40px 20px",
        fontFamily: 'system-ui,"Segoe UI",Roboto,Arial,sans-serif',
      }}
    >
      <section style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(24px,6vw,38px)", color: "#D4AF37" }}>
          🔐 Privacy Policy
        </h1>

        <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 24 }}>
          Velvet House is committed to protecting your personal data and respecting your privacy. This policy explains how we collect, use, and protect your data.
        </p>

        <ul style={{ fontSize: 14, lineHeight: 1.7, paddingLeft: 20 }}>
          <li>📥 We collect minimal personal data: email address, nickname, and device information.</li>
          <li>💳 Payment data is never stored on our servers. It is handled by secure third-party providers.</li>
          <li>🔒 Your data is encrypted and protected. We do not sell or rent any personal data.</li>
          <li>📬 You may receive platform-related emails only (notifications, account, legal changes).</li>
          <li>❌ You can request deletion of your account and associated data at any time.</li>
          <li>🌍 We comply with GDPR, CCPA, and international privacy standards.</li>
        </ul>

        <p style={{ fontSize: 13, marginTop: 30, color: "#d7c9b3" }}>
          For any question regarding privacy, contact us at support@velvethouseagency.com.
        </p>

        <p style={{ fontSize: 12, marginTop: 10, color: "#999" }}>
          Velvet House is operated by Novalink Limited, Hong Kong. All rights reserved.
        </p>
      </section>
    </main>
  );
}
