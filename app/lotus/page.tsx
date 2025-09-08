// /app/lotus/page.tsx
"use client";

import { useEffect, useState } from "react";

type Pack = {
  amount: number;
  price: number;
  label?: string;
};

const PACKS: Pack[] = [
  { amount: 1000, price: 4.65 },
  { amount: 2000, price: 9.30 },
  { amount: 5000, price: 23.25 },
  { amount: 10000, price: 46.50 },
  { amount: 20000, price: 93.00 },
  { amount: 50000, price: 232.50, label: "VIP Gold" },
  { amount: 100000, price: 465.00, label: "GOD" },
  { amount: 200000, price: 930.00 },
  { amount: 500000, price: 2325.00 },
  { amount: 1000000, price: 4650.00 },
];

export default function LotusPage() {
  const [isGold, setIsGold] = useState(false); // à remplacer par vraie session plus tard

  useEffect(() => {
    // TODO: remplacer cette détection par un vrai check utilisateur
    const goldUser = true; // simule un VIP Gold
    setIsGold(goldUser);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#4b1c1c 0%,#2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui,"Segoe UI",Roboto,Arial,sans-serif',
      }}
    >
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px", textAlign: "center" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(28px,6.5vw,44px)", marginBottom: 8 }}>
          Buy Lotus
        </h1>
        <p style={{ color: "#e9dfcf", margin: 0 }}>
          Lotus are the exclusive currency of Velvet House. No hidden fees, no taxes.
        </p>
        {isGold && (
          <p style={{ marginTop: 8, fontSize: 14, color: "#2ecc71", fontWeight: 700 }}>
            🎁 VIP Gold Bonus: +5% extra Lotus on every purchase!
          </p>
        )}
      </section>

      <section style={{ maxWidth: 1100, margin: "32px auto", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {PACKS.map((pack) => {
            const bonus = isGold ? Math.round(pack.amount * 0.05) : 0;
            return (
              <div key={pack.amount} className="card" style={{ padding: 16, textAlign: "center", display: "grid", gap: 12 }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>
                  {pack.amount.toLocaleString()} Lotus
                </div>
                <div style={{ fontSize: 14, color: "#d7c9b3" }}>
                  {pack.label && <b style={{ color: "#FFD700" }}>{pack.label} · </b>}
                  {pack.price.toFixed(2)} €
                </div>
                {bonus > 0 && (
                  <div style={{ fontSize: 13, color: "#2ecc71", fontWeight: 600 }}>
                    +{bonus.toLocaleString()} Lotus bonus
                  </div>
                )}
                <button className="btn3d btn3d--gold">Buy</button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
