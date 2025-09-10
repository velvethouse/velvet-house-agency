// /app/lotus/page.tsx

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
        padding: "32px 16px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "#D4AF37", fontSize: 32, marginBottom: 24 }}>
        💎 Buy Lotus Packs
      </h1>

      <div style={{ display: "grid", gap: 24 }}>
        {packs.map((pack) => (
          <div
            key={pack.amount}
            className="card"
            style={{
              padding: 20,
              border: "1px solid rgba(212,175,55,0.3)",
              background: "rgba(0,0,0,0.15)",
              borderRadius: 12,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
              {pack.amount.toLocaleString()} Lotus
              {pack.label && (
                <span style={{ marginLeft: 8, color: "#FFD700", fontSize: 14 }}>
                  • {pack.label}
                </span>
              )}
            </div>
            <div style={{ fontSize: 16, marginBottom: 6 }}>
              {pack.price.toFixed(2)} €
            </div>
            <div style={{ color: "#00FF99", fontSize: 14, marginBottom: 10 }}>
              +{pack.bonus.toLocaleString()} Lotus bonus
            </div>
            <button
              className="btn3d btn3d--gold"
              style={{ width: "100%", padding: "10px 0" }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
