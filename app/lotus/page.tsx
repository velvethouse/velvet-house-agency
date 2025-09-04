// app/lotus/page.tsx
"use client";

export default function LotusPage() {
  return (
    <div style={{ padding: "2rem", color: "#e9dfcf" }}>
      <h1 style={{ color: "#D4AF37" }}>Buy Lotus Packs</h1>
      <p>Choose the right pack to send gifts and unlock VIP content.</p>

      <div style={{ marginTop: "2rem", display: "grid", gap: "1rem" }}>
        <div style={{ background: "#2a0f0f", padding: "1rem", borderRadius: "12px" }}>
          <h3>1,000 Lotus ✨</h3>
          <p>Price: 1,09 €</p>
          <button style={{ background: "#D4AF37", padding: "0.5rem 1rem", border: "none", borderRadius: "8px" }}>
            Buy
          </button>
        </div>

        <div style={{ background: "#2a0f0f", padding: "1rem", borderRadius: "12px" }}>
          <h3>2,000 Lotus ✨</h3>
          <p>Price: 2,19 €</p>
          <button style={{ background: "#D4AF37", padding: "0.5rem 1rem", border: "none", borderRadius: "8px" }}>
            Buy
          </button>
        </div>

        {/* Continue avec 5000, 10000, 20000, 50000, 100000, 500000, 1000000 Lotus */}
      </div>
    </div>
  );
}
