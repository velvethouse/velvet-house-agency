"use client";

export default function AgencyIdentityPage() {
  return (
    <main
      style={{
        padding: 24,
        maxWidth: 720,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 26, color: "#D4AF37", marginBottom: 20 }}>
        🏛️ Agency Identity
      </h1>

      <div
        style={{
          background: "#2e0d0d",
          border: "1px solid rgba(212,175,55,0.2)",
          padding: 20,
          borderRadius: 12,
          color: "#f5f5f5",
        }}
      >
        <p style={{ lineHeight: 1.6, marginBottom: 12 }}>
          Welcome to your private agency space. Your access is secured via personal credentials.
        </p>

        <p style={{ lineHeight: 1.6, marginBottom: 12 }}>
          This account is managed by <b>Velvet House</b> and is assigned exclusively to your agency.
        </p>

        <p style={{ fontSize: 13, color: "#aaa" }}>
          If you ever lose access, contact us directly to reset credentials.
        </p>
      </div>
    </main>
  );
}
