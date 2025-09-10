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
      </section>
    </main>
  );
}
