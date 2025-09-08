// /app/lotus/page.tsx
"use client";

export default function LotusPage() {
  const packs = [
    { amount: 1000, price: 4.65 },
    { amount: 2000, price: 9.30 },
    { amount: 5000, price: 23.25 },
    { amount: 10000, price: 46.50 },
    { amount: 20000, price: 93.00 },
    { amount: 50000, price: 232.50, vip: "VIP Gold" },
    { amount: 100000, price: 465.00, vip: "GOD Game" },
    { amount: 200000, price: 930.00 },
    { amount: 500000, price: 2325.00 },
    { amount: 1000000, price: 4650.00 },
  ];

  return (
    <main style={{ padding: "20px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 className="gold-gradient-text" style={{ fontSize: "clamp(28px,6vw,42px)", marginBottom: 8 }}>
        Buy Lotus Packs
      </h1>
      <p style={{ color: "#e9dfcf", fontSize: 15, marginBottom: 18 }}>
        Transparent pricing — no hidden fees or taxes. You pay what you see.{" "}
        <br />
        <b style={{ color: "#D4AF37" }}>+5% bonus Lotus</b> automatically gifted by VelvetHouse with every pack.
      </p>

      <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {packs.map((pack) => (
          <article
            key={pack.amount}
            className="card"
            style={{ padding: 18, display: "grid", gap: 10, placeItems: "center", textAlign: "center" }}
          >
            <div style={{ fontSize: 28, fontWeight: 800, color: "#D4AF37" }}>
              {pack.amount.toLocaleString()} Lotus
            </div>
            <div style={{ fontSize: 16, color: "#d7c9b3" }}>{pack.price.toFixed(2)} €</div>
            {pack.vip && (
              <div style={{ fontSize: 13, background: "rgba(212,175,55,.15)", padding: "4px 10px", borderRadius: 999 }}>
                🎖️ {pack.vip}
              </div>
            )}
            <button className="btn3d btn3d--gold" style={{ marginTop: 6 }}>
              Buy Now
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
