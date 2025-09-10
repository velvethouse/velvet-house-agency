// 📄 /app/admin/earnings/page.tsx

"use client";

export default function AdminEarningsPage() {
  const totalLotusBought = 12_500_000;
  const totalLotusPaidToCreators = 8_750_000;
  const netProfit = totalLotusBought - totalLotusPaidToCreators;

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
        💰 Earnings Overview
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
        <p><strong>Total Lotus bought:</strong> {totalLotusBought.toLocaleString()} ♢</p>
        <p><strong>Total paid to streamers:</strong> {totalLotusPaidToCreators.toLocaleString()} ♢</p>
        <p style={{ marginTop: 16, fontSize: 18, color: "#D4AF37" }}>
          <strong>Net profit:</strong> {netProfit.toLocaleString()} ♢
        </p>
      </div>
    </main>
  );
}
