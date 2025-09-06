// app/vip/page.tsx
import { TIERS } from "@/data/tiers";

export default function VipPage() {
  const vip = TIERS["vip"];
  const gold = TIERS["vip-gold"];

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

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
          Become VIP
        </h1>
        <p style={{ margin: "10px auto 0", maxWidth: 820, color: "#e9dfcf", lineHeight: 1.7 }}>
          Unlock full galleries (non-NSFW), priority in lives & chats, exclusive rewards and premium access across Velvet House.
          NSFW media stay <b>gift-unlock only</b> — even for VIP &amp; VIP Gold.
        </p>
      </section>

      {/* Tiers — VIP / VIP Annual / GOLD / GOLD Annual */}
      <section style={{ maxWidth: 1100, margin: "18px auto 10px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {/* VIP Monthly */}
          <article className="card" style={{ display: "grid", gap: 12, padding: 18 }}>
            <h2 style={{ margin: 0, color: "#D4AF37" }}>{vip.title} Monthly</h2>
            <div style={{ fontSize: 32, fontWeight: 800 }}>
              {vip.monthly}€ <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ month</span>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              Includes <b>{fmt(vip.lotusMonthlyIncluded)} Lotus</b> / month
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              {vip.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <a href="/signup" className="btn3d btn3d--gold">Subscribe monthly</a>
          </article>

          {/* VIP Annual */}
          <article
            className="card"
            style={{
              display: "grid",
              gap: 12,
              padding: 18,
              borderColor: "rgba(212,175,55,0.35)",
              boxShadow: "0 10px 34px rgba(0,0,0,.36)",
            }}
          >
            <h2 style={{ margin: 0, color: "#D4AF37" }}>{vip.title} Annual</h2>
            <div style={{ fontSize: 32, fontWeight: 800 }}>
              {vip.annual}€ <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ year</span>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              Includes <b>{fmt(vip.lotusMonthlyIncluded)} Lotus</b> / month (credited monthly)
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li><b>2 months free</b> vs monthly</li>
              {vip.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <a href="/signup" className="btn3d btn3d--velvet">Subscribe annual</a>
          </article>

          {/* GOLD Monthly */}
          <article className="card" style={{ display: "grid", gap: 12, padding: 18 }}>
            <h2 style={{ margin: 0, color: "#D4AF37" }}>{gold.title} Monthly</h2>
            <div style={{ fontSize: 32, fontWeight: 800 }}>
              {gold.monthly}€ <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ month</span>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              Includes <b>{fmt(gold.lotusMonthlyIncluded)} Lotus</b> / month
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              {gold.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <a href="/signup" className="btn3d btn3d--gold">Subscribe Gold monthly</a>
          </article>

          {/* GOLD Annual */}
          <article
            className="card"
            style={{
              display: "grid",
              gap: 12,
              padding: 18,
              borderColor: "rgba(212,175,55,0.35)",
              boxShadow: "0 10px 34px rgba(0,0,0,.36)",
            }}
          >
            <h2 style={{ margin: 0, color: "#D4AF37" }}>{gold.title} Annual</h2>
            <div style={{ fontSize: 32, fontWeight: 800 }}>
              {fmt(gold.annual)}€ <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ year</span>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              Includes <b>{fmt(gold.lotusMonthlyIncluded)} Lotus</b> / month (credited monthly)
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li><b>2 months free</b> vs monthly</li>
              {gold.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <a href="/signup" className="btn3d btn3d--velvet">Subscribe Gold annual</a>
          </article>
        </div>
      </section>

      {/* Notes */}
      <section style={{ maxWidth: 1100, margin: "8px auto 18px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, color: "#d7c9b3", lineHeight: 1.7 }}>
            <b>Lotus inclus :</b> crédités chaque mois au renouvellement de l’abonnement. Lotus without monetary value and non-refundable.<br />
            <b>NSFW :</b> remains <b>gift-unlock only</b> for all tiers.
          </p>
        </div>
      </section>

      {/* CTA bottom */}
      <section style={{ maxWidth: 900, margin: "0 auto 36px", padding: "0 16px", textAlign: "center" }}>
        <div className="btn-row-2" style={{ maxWidth: 560, margin: "0 auto" }}>
          <a href="/signup" className="btn3d btn3d--gold">Get VIP monthly</a>
          <a href="/signup" className="btn3d btn3d--velvet">Get VIP annual</a>
        </div>
        <p style={{ margin: "10px auto 0", color: "#d7c9b3", fontSize: 13 }}>
          By subscribing you accept our <a href="/cgu" style={{ color: "#D4AF37", textDecoration: "none" }}>Terms</a>.
        </p>
      </section>
    </main>
  );
}
