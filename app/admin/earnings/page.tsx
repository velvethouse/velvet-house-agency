"use client";

const mockEarnings = {
  lotusSold: 2_400_000, // Lotus achetés par les users
  lotusWithdrawn: 1_050_000, // Lotus reversés aux streameuses
  exchangeRate: 1000, // 1000 Lotus = 1€
};

export default function AdminEarningsPage() {
  const netLotus = mockEarnings.lotusSold - mockEarnings.lotusWithdrawn;
  const netEur = netLotus / mockEarnings.exchangeRate;

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: "system-ui,Segoe UI,Roboto,sans-serif",
      }}
    >
      <h1 style={{ fontSize: 26, color: "#D4AF37", marginBottom: 24 }}>
        💰 Velvet House Earnings
      </h1>

      <div
        style={{
          background: "#2e0d0d",
          border: "1px solid rgba(212,175,55,0.2)",
          padding: 20,
          borderRadius: 12,
          color: "#f5f5f5",
          lineHeight: 1.8,
        }}
      >
        <p>
          💎 Total Lotus sold:{" "}
          <strong style={{ color: "#FFD700" }}>
            {mockEarnings.lotusSold.toLocaleString()} ♢
          </strong>
        </p>
        <p>
          💸 Total Lotus withdrawn by streamers:{" "}
          <strong style={{ color: "#ff7a7a" }}>
            {mockEarnings.lotusWithdrawn.toLocaleString()} ♢
          </strong>
        </p>
        <p>
          🧮 Net earnings (Velvet House):{" "}
          <strong style={{ color: "#90ee90" }}>
            {netLotus.toLocaleString()} ♢ (~{netEur.toFixed(2)} €)
          </strong>
        </p>
        <p style={{ fontSize: 13, color: "#aaa" }}>
          * Based on exchange rate 1000 ♢ = 1 €
        </p>
      </div>
    </main>
  );
}
