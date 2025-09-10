// 📄 /app/payout/page.tsx

"use client";

type Payout = {
  id: number;
  name: string;
  amount: number;
  method: string;
  status: "pending" | "paid";
  date: string;
};

const mockPayouts: Payout[] = [
  { id: 1, name: "LunaFire", amount: 42000, method: "PayPal", status: "paid", date: "2025-09-04" },
  { id: 2, name: "RedVelvet", amount: 67000, method: "Wise", status: "pending", date: "2025-09-09" },
  { id: 3, name: "DiamondQueen", amount: 102000, method: "USDT", status: "paid", date: "2025-09-01" },
];

export default function PayoutPage() {
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
        💸 Payouts to Streamers
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#2e0d0d",
          border: "1px solid rgba(212,175,55,0.2)",
          color: "#f5f5f5",
          fontSize: 14,
        }}
      >
        <thead>
          <tr style={{ background: "#3a1515" }}>
            <th style={th}>Streamer</th>
            <th style={th}>Amount</th>
            <th style={th}>Method</th>
            <th style={th}>Status</th>
            <th style={th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {mockPayouts.map((p) => (
            <tr key={p.id} style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <td style={td}>{p.name}</td>
              <td style={td}>{p.amount.toLocaleString()} ♢</td>
              <td style={td}>{p.method}</td>
              <td style={{ ...td, color: p.status === "paid" ? "#6cc66c" : "#FFD700" }}>
                {p.status === "paid" ? "✅ Paid" : "⏳ Pending"}
              </td>
              <td style={td}>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 8px",
  color: "#FFD700",
  fontWeight: 600,
};

const td: React.CSSProperties = {
  padding: "10px 8px",
};
