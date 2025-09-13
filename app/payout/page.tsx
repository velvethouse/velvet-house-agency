"use client";

const codeStyle = {
  background: '#222',
  padding: '2px 6px',
  borderRadius: 4,
};

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
        color: "#fff"
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

      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 18, color: "#D4AF37", marginBottom: 12 }}>💳 Withdrawal Instructions</h2>

        <p style={{ fontSize: 14, color: "#ccc", marginBottom: 16 }}>
          After clicking the request button, please confirm your preferred withdrawal method via WhatsApp or live chat:
        </p>

        <ul style={{ fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
          <li>
            <strong>🏦 Bank Transfer (Hong Kong):</strong><br />
            Account Name: <code style={codeStyle}>Novalink Limited</code><br />
            Bank: <code style={codeStyle}>HSBC Hong Kong</code><br />
            Account Number: <code style={codeStyle}>123-456789-001</code><br />
            SWIFT: <code style={codeStyle}>HSBCHKHHHKH</code>
          </li>

          <li style={{ marginTop: 12 }}>
            <strong>🪙 USDT (TRC20):</strong><br />
            Wallet: <code style={codeStyle}>TM3XpYa5MVeG8bK8T3XHEDaK4dS8xvPf8T</code>
          </li>
        </ul>

        <p style={{ fontSize: 13, color: "#aaa", marginTop: 16 }}>
          ✅ Your payout will be processed within 24 hours.  
          If you're part of an agency, it will be grouped monthly.
        </p>
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
