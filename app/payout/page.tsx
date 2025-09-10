"use client";

export default function PayoutPage() {
  const availableLotus = 46250; // mock
  const exchangeRate = 1000; // 1000 Lotus = 1 €
  const minimumWithdrawal = 25000; // 25 €

  const canWithdraw = availableLotus >= minimumWithdrawal;

  const previousWithdrawals = [
    { id: 1, amount: 50000, method: "Wise", date: "2025-08-28", status: "Paid" },
    { id: 2, amount: 25000, method: "USDT", date: "2025-07-10", status: "Paid" },
  ];

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
        💸 Payout Request
      </h1>

      <section
        style={{
          background: "#2e0d0d",
          border: "1px solid rgba(212,175,55,0.2)",
          padding: 20,
          borderRadius: 12,
          color: "#f5f5f5",
          marginBottom: 32,
        }}
      >
        <p>
          <strong>Available:</strong> {availableLotus.toLocaleString()} ♢ (~{(availableLotus / exchangeRate).toFixed(2)} €)
        </p>
        <p>
          <strong>Minimum to request:</strong> {minimumWithdrawal.toLocaleString()} ♢ (25 €)
        </p>

        <button
          className="btn3d btn3d--gold"
          disabled={!canWithdraw}
          style={{
            marginTop: 12,
            opacity: canWithdraw ? 1 : 0.5,
            cursor: canWithdraw ? "pointer" : "not-allowed",
          }}
        >
          {canWithdraw ? "Request payout" : "Not enough Lotus"}
        </button>
      </section>

      <section>
        <h2 style={{ fontSize: 18, color: "#D4AF37", marginBottom: 12 }}>📜 History</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 14,
            color: "#fff",
          }}
        >
          <thead>
            <tr style={{ background: "#3a1515" }}>
              <th style={th}>Amount</th>
              <th style={th}>Method</th>
              <th style={th}>Date</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {previousWithdrawals.map((p) => (
              <tr key={p.id} style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={td}>{p.amount.toLocaleString()} ♢</td>
                <td style={td}>{p.method}</td>
                <td style={td}>{p.date}</td>
                <td style={{ ...td, color: "#6cc66c" }}>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 8px",
  color: "#FFD700",
};

const td: React.CSSProperties = {
  padding: "8px 8px",
};
