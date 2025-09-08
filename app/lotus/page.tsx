// /app/lotus/page.tsx

export default function LotusPacks() {
  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "12px", color: "#FFD700" }}>
        💎 Buy Lotus Packs
      </h1>
      <p style={{ color: "#f5f5f5", marginBottom: "32px" }}>
        All prices are final — no hidden fees, no extra taxes. What you see is exactly what you pay.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {[
          { amount: 1000, price: 5.49 },
          { amount: 2000, price: 10.99 },
          { amount: 5000, price: 21.99 },
          { amount: 10000, price: 43.99 },
          { amount: 20000, price: 87.99 },
          { amount: 50000, price: 219.99 },
          { amount: 100000, price: 439.99, god: true },
          { amount: 200000, price: 879.99 },
          { amount: 500000, price: 2199.99 },
          { amount: 1000000, price: 4399.99 },
        ].map((pack) => (
          <div
            key={pack.amount}
            style={{
              borderRadius: 12,
              background: "#111",
              padding: "20px",
              textAlign: "center",
              border: "1px solid #D4AF37",
            }}
          >
            <h3 style={{ fontSize: "20px", color: "#FFD700", marginBottom: "6px" }}>
              {pack.amount.toLocaleString()} Lotus {pack.god && <span style={{ color: "#f00" }}>(GOD)</span>}
            </h3>
            <p style={{ color: "#ccc", marginBottom: "12px" }}>≈ €{pack.price.toFixed(2)}</p>
            <button
              style={{
                padding: "8px 16px",
                background: "#FFD700",
                color: "#000",
                borderRadius: 8,
                fontWeight: "bold",
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
