// /app/lotus/page.tsx

"use client";

const PACKS = [
  { amount: 1000, price: "€10.99" },
  { amount: 2000, price: "€21.99" },
  { amount: 5000, price: "€43.99" },
  { amount: 10000, price: "€79.99" },
  { amount: 20000, price: "€105.99" },
  { amount: 50000, price: "€264.99", vip: "VIP Gold" },
  { amount: 100000, price: "€529.99", tag: "GOD" },
  { amount: 200000, price: "€1059.99" },
  { amount: 500000, price: "€2649.99" },
  { amount: 1000000, price: "€5299.99" },
];

export default function LotusPage() {
  return (
    <main style={{ padding: "20px", maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 16, color: "#D4AF37" }}>
        💠 Buy Lotus Packs
      </h1>
      <p style={{ marginBottom: 20, color: "#f5f5f5" }}>
        Transparent pricing. No hidden fees. All prices are final.
      </p>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
        }}
      >
        {PACKS.map((pack) => (
          <div
            key={pack.amount}
            className="card"
            style={{
              padding: 16,
              borderRadius: 12,
              background: "#1c0e0e",
              border: "1px solid rgba(212,175,55,0.2)",
              textAlign: "center",
              color: "#f5f5f5",
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>
              {pack.amount.toLocaleString()} Lotus{" "}
              {pack.tag && <span style={{ color: "#e67e22" }}>({pack.tag})</span>}
              {pack.vip && (
                <span style={{ display: "block", fontSize: 14, color: "#D4AF37" }}>
                  🌟 Includes {pack.vip}
                </span>
              )}
            </h3>
            <p style={{ fontSize: 16, marginBottom: 12 }}>{pack.price}</p>
            <button
              style={{
                padding: "10px 16px",
                background: "#D4AF37",
                color: "#000",
                fontWeight: "bold",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
