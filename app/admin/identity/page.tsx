// 📄 /app/admin/identity/page.tsx

"use client";

export default function AdminIdentityPage() {
  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 26, color: "#D4AF37", marginBottom: 24 }}>
        👤 Your Admin Identity
      </h1>

      <div
        style={{
          background: "#2e0d0d",
          border: "1px solid rgba(212,175,55,0.2)",
          padding: 20,
          borderRadius: 12,
          color: "#f5f5f5",
          fontSize: 16,
          lineHeight: 1.8,
        }}
      >
        <p><strong>Name:</strong> Velvet King</p>
        <p><strong>Badge:</strong> 👑 (visible in chat, live, comments)</p>
        <p><strong>Visibility:</strong> Your presence is automatically highlighted when you join a room or send a message.</p>
        <p><strong>Note:</strong> This identity is unique. No one else can appear as “Velvet King”.</p>
      </div>
    </main>
  );
}
