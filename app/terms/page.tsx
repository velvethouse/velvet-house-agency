// 📄 /app/terms/page.tsx

export default function TermsAndPrivacyPage() {
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
          📜 Terms & Conditions
        </h1>

        <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 24 }}>
          By using Velvet House, you agree to the following terms. These terms apply to all users — streamers, viewers, and agencies.
        </p>

        <ul style={{ fontSize: 14, lineHeight: 1.7, paddingLeft: 20 }}>
          <li>🎁 All Lotus Pack purchases are final. No refunds, partial or full, will be granted once a purchase is completed.</li>
          <li>🎁 All gifts and tips sent to streamers are non-refundable and non-reversible, even if sent by mistake.</li>
          <li>🔞 This platform is for adults only. You must be at least 18 years old (or the legal age in your country) to use it.</li>
          <li>🌐 Velvet House is not available to users residing in <strong>Hong Kong SAR</strong>.</li>
          <li>🛡️ All content uploaded must respect the rules: no illegal content, no hate speech, no incitation to violence.</li>
          <li>📁 NSFW content is protected and can only be accessed under the specific VIP/GOLD conditions set by Velvet House.</li>
          <li>💳 All transactions are encrypted and handled by third-party payment processors. Velvet House does not store payment data.</li>
          <li>📌 Velvet House reserves the right to block or ban any user who violates our policies or community guidelines.</li>
        </ul>

        <p style={{ fontSize: 13, marginTop: 30, color: "#d7c9b3" }}>
          By continuing to use the platform, you confirm that you have read and accepted these terms.
        </p>

        <hr style={{ margin: "48px 0", border: "1px solid rgba(255,255,255,0.1)" }} />

        <h2 style={{ fontSize: 22, color: "#D4AF37", marginBottom: 12 }}>
          🔐 Privacy Policy
        </h2>

        <p style={{ fontSize: 14, lineHeight: 1.6 }}>
          Velvet House is committed to protecting your personal data and respecting your privacy. This policy explains how we collect, use, and protect your data.
        </p>

        <ul style={{ fontSize: 14, lineHeight: 1.7, paddingLeft: 20, marginTop: 12 }}>
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
