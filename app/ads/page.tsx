'use client';

export default function AdsPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(180deg,#2e0d0d 0%,#000 100%)',
        color: '#fff',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        maxWidth: 880,
        margin: '0 auto'
      }}
    >
      <h1 style={{ fontSize: 28, color: '#FFD700', marginBottom: 20 }}>
        📢 Advertising Panel (Soon)
      </h1>

      <p style={{ marginBottom: 24, fontSize: 15, color: '#ccc' }}>
        This section will allow verified partners and agencies to publish targeted ads across Velvet House.
        Sponsored content will be strictly moderated and must respect our platform rules.
      </p>

      <ul style={{ lineHeight: 1.8, fontSize: 14, paddingLeft: 24 }}>
        <li>🎯 Target by region, age, and user type (VIP / Viewer / Guest)</li>
        <li>📆 Campaign scheduling by date, time, and frequency</li>
        <li>📈 Performance analytics and conversion tracking</li>
        <li>🔐 Admin review required before ads go live</li>
      </ul>

      <p style={{ marginTop: 32, fontSize: 13, color: '#aaa' }}>
        If you wish to reserve ad space in advance or request access to the ad panel, please contact us directly at <code style={{ background: '#333', padding: '2px 6px', borderRadius: 4 }}>ads@velvethouseagency.com</code>.
      </p>

      <div
        style={{
          marginTop: 48,
          padding: 20,
          background: '#1a1a1a',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12,
          color: '#FFD700',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        🚧 This feature is under development. Access will be granted to selected partners in October 2025.
      </div>
    </main>
  );
}
