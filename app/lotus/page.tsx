"use client";

type Pack = {
  lotus: number;
  name: string;
  price: number;
  badge?: string;
  note?: string;
};

const PACKS: Pack[] = [
  { lotus: 1_000,     name: "Starter",  price: 4.65 },
  { lotus: 2_000,     name: "Mini",     price: 9.30 },
  { lotus: 5_000,     name: "Small",    price: 23.20 },
  { lotus: 10_000,    name: "Medium",   price: 46.40 },
  { lotus: 20_000,    name: "Large",    price: 92.80 },
  { lotus: 50_000,    name: "XL",       price: 232.00 },
  { lotus: 100_000,   name: "VIP",      price: 464.00, badge: "GOD", note: "Includes access to the GOD game" },
  { lotus: 500_000,   name: "Elite",    price: 2320.00 },
  { lotus: 1_000_000, name: "Whale 🐳", price: 4640.00 },
];

export default function LotusPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px", textAlign: "center" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(28px,6.5vw,44px)", margin: 0 }}>
          Buy Lotus Packs
        </h1>
        {/* Phrase PRIX NETS */}
        <p style={{ margin: "10px auto 0", maxWidth: 820, color: "#D4AF37", fontWeight: 700 }}>
          Transparent pricing: what you see is what you pay — no additional taxes or hidden fees.
        </p>

        <p style={{ margin: "8px auto 0", maxWidth: 820, color: "#e9dfcf", lineHeight: 1.7 }}>
          Lotus is the currency used across Velvet House — to send gifts, unlock NSFW media, and support creators.
          VIP requires an active subscription <b>and</b> a minimum purchase of <b>100,000 Lotus</b>.
        </p>
      </section>

      {/* Grid packs */}
      <section style={{ maxWidth: 1100, margin: "18px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {PACKS.map((p) => (
            <article
              key={p.lotus}
              className="card"
              style={{
                display: "grid",
                gap: 10,
                padding: 16,
                borderColor: p.badge ? "rgba(212,175,55,0.38)" : undefined,
                boxShadow: p.badge ? "0 10px 34px rgba(0,0,0,.36)" : undefined,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h2 style={{ margin: 0, color: "#D4AF37" }}>{p.name}</h2>
                {p.badge && (
                  <span
                    title={p.note || ""}
                    style={{
                      padding: "4px 8px",
                      borderRadius: 999,
                      background: "#D4AF37",
                      color: "#2c0d0d",
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              <div style={{ fontSize: 26, fontWeight: 800 }}>
                {p.lotus.toLocaleString("en-US")}{" "}
                <span style={{ fontSize: 14, color: "#d7c9b3" }}>Lotus</span>
              </div>

              <div style={{ fontSize: 18, fontWeight: 700 }}>
                {p.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
              </div>

              {p.note && <div style={{ color: "#d7c9b3", fontSize: 13 }}>{p.note}</div>}

              <a
                className="btn3d btn3d--gold"
                href={`/checkout/lotus?pack=${p.lotus}`}
                onClick={(e) => {
                  // DEMO: si 100k, on "tag" l'accès GOD en local pour les tests (remplacé par le backend plus tard).
                  if (p.lotus === 100_000) {
                    try { localStorage.setItem("vh_hasGod", "1"); } catch {}
                  }
                }}
              >
                Buy now
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
