"use client";

export default function LotusPage() {
  const packs = [
    { amount: 1000, price: 4.65, bonus: 50 },
    { amount: 2000, price: 9.3, bonus: 100 },
    { amount: 5000, price: 23.25, bonus: 250 },
    { amount: 10000, price: 46.5, bonus: 500 },
    { amount: 20000, price: 93.0, bonus: 1000 },
    { amount: 50000, price: 232.5, bonus: 2500, label: "VIP Gold" },
    { amount: 100000, price: 465.0, bonus: 5000, label: "GOD" },
    { amount: 200000, price: 930.0, bonus: 10000 },
    { amount: 500000, price: 2325.0, bonus: 25000 },
    { amount: 1000000, price: 4650.0, bonus: 50000 },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(180deg,#4b1c1c 0%,#2e0d0d 100%)",
        color: "#fff",
        fontFamily: 'system-ui,"Segoe UI",Roboto,Arial,sans-serif',
      }}
    >
      <section style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(22px,6vw,36px)", color: "#D4AF37" }}>💎 Buy Lotus</h1>

        <p style={{ marginTop: 8, fontSize: 14, color: "#e9dfcf" }}>
          Select the amount of Lotus you want to buy. Bonus included for each pack!
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 32 }}>
          {packs.map((p) => (
            <div
              key={p.amount}
              style={{
                background: "#1e0c0c",
                borderRadius: 12,
                padding: "20px 16px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                {p.amount.toLocaleString("fr-FR")} Lotus{" "}
                {p.label && <span style={{ fontSize: 14, color: "#FFD700" }}>• {p.label}</span>}
              </h3>
              <p style={{ margin: "4px 0", fontSize: 14 }}>{p.price.toFixed(2)} €</p>
              <p style={{ color: "lightgreen", fontSize: 13 }}>
                +{p.bonus.toLocaleString("fr-FR")} Lotus bonus
              </p>
              <button
                className="btn3d btn3d--gold"
                style={{ marginTop: 10, fontSize: 14, padding: "8px 20px" }}
              >
                Buy
              </button>
            </div>
          ))}
        </div>

        {/* 🔽 Ajout : instructions paiement */}
        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontSize: 20, color: "#D4AF37" }}>💳 Payment Instructions</h2>
          <p style={{ marginTop: 8, fontSize: 14, color: "#e9dfcf" }}>
            After choosing your pack, complete your payment using one of the following methods:
          </p>

          <ul style={{ fontSize: 14, marginTop: 18, lineHeight: 1.7, paddingLeft: 20 }}>
            <li>
              <strong>🏦 Bank Transfer (Hong Kong):</strong><br />
              Account Name: <code style={{ background: '#222', padding: '2px 6px', borderRadius: 4 }}>Novalink Limited</code><br />
              Bank: <code style={{ background: '#222', padding: '2px 6px', borderRadius: 4 }}>HSBC Hong Kong</code><br />
              Account Number: <code style={{ background: '#222', padding: '2px 6px', borderRadius: 4 }}>123-456789-001</code><br />
              SWIFT Code: <code style={{ background: '#222', padding: '2px 6px', borderRadius: 4 }}>HSBCHKHHHKH</code>
            </li>

            <li style={{ marginTop: 16 }}>
              <strong>🪙 USDT (TRC20):</strong><br />
              Wallet: <code style={{ background: '#222', padding: '2px 6px', borderRadius: 4 }}>
                TM3XpYa5MVeG8bK8T3XHEDaK4dS8xvPf8T
              </code>
            </li>

            <li style={{ marginTop: 16 }}>
              <strong>💳 Card Payment:</strong><br />
              Available soon via Stripe
            </li>
          </ul>

          <p style={{ fontSize: 13, marginTop: 24, color: "#aaa" }}>
            Once payment is sent, confirm with our team via WhatsApp or live chat.  
            Your Lotus balance will be updated within 5 minutes.
          </p>
        </div>
      </section>
    </main>
  );
}
