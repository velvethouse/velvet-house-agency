// /app/lotus/page.tsx

export default function LotusPacksPage() {
  const packs = [
    { amount: 1000, price: 5.29 },
    { amount: 2000, price: 10.59 },
    { amount: 5000, price: 26.49 },
    { amount: 10000, price: 52.99 },
    { amount: 20000, price: 105.99 },
    { amount: 50000, price: 264.99 },
    { amount: 100000, price: 529.99, label: "GOD" },
    { amount: 200000, price: 1059.99 },
    { amount: 500000, price: 2649.99 },
    { amount: 1000000, price: 5299.99 },
  ];

  return (
    <main style={{ padding: "32px 16px", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 24 }}>
        🌸 Buy Lotus Packs
      </h1>

      <div className="cards-grid">
        {packs.map((pack) => (
          <div key={pack.amount} className="card" style={{ padding: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
              {pack.amount.toLocaleString()} Lotus
              {pack.label && (
                <span style={{ fontSize: 14, marginLeft: 6, color: "#FFD700" }}>
                  ({pack.label})
                </span>
              )}
            </div>
            <div style={{ color: "#d7c9b3", marginBottom: 12 }}>
              ≈ €{pack.price.toFixed(2)}
            </div>
            <button className="btn3d btn3d--gold">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
