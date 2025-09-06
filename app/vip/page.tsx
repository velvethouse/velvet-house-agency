// app/vip/page.tsx
import { TIERS } from "@/data/tiers";

export default function VipPage() {
  const vip = TIERS["vip"];
  const gold = TIERS["vip-gold"];

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-GB", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

  const ProgressBar = ({ value = 100 }: { value?: number }) => (
    <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,.15)", borderRadius: 999 }}>
      <div
        style={{
          width: `${Math.min(Math.max(value, 0), 100)}%`,
          height: "100%",
          background: "linear-gradient(90deg,#D4AF37,#f6dd9d)",
          borderRadius: 999,
        }}
      />
    </div>
  );

  const Card = ({
    title,
    price,
    period,
    lotus,
    benefits,
    ctaText,
    ctaHref,
    highlight = false,
  }: {
    title: string;
    price: string;
    period: string;
    lotus: number;
    benefits: string[];
    ctaText: string;
    ctaHref: string;
    highlight?: boolean;
  }) => (
    <article
      className="card"
      style={{
        display: "grid",
        gap: 12,
        padding: 18,
        borderColor: highlight ? "rgba(212,175,55,0.35)" : undefined,
        boxShadow: highlight ? "0 10px 34px rgba(0,0,0,.36)" : undefined,
      }}
    >
      <h2 style={{ margin: 0, color: "#D4AF37" }}>{title}</h2>
      <div style={{ fontSize: 32, fontWeight: 800 }}>
        {price} <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ {period}</span>
      </div>
      <div style={{ color: "#d7c9b3" }}>
        Includes <b>{fmt(lotus)} Lotus</b> per month
      </div>
      <ProgressBar value={100} />
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
        {benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <a href={ctaHref} className={`btn3d ${highlight ? "btn3d--velvet" : "btn3d--gold"}`}>
        {ctaText}
      </a>
    </article>
  );

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
          Unlock full galleries (non-NSFW), priority in lives & chats, exclusive rewards, and premium access across
          Velvet House. NSFW media remain <b>gift-unlock only</b> — even for VIP & VIP Gold.
        </p>
      </section>

      {/* Tiers — VIP / VIP Annual / GOLD / GOLD Annual */}
      <section style={{ maxWidth: 1100, margin: "18px auto 10px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <Card
            title={`${vip.title} Monthly`}
            price={`${vip.monthly}€`}
            period="month"
            lotus={vip.lotusMonthlyIncluded}
            benefits={vip.benefits}
            ctaText="Subscribe monthly"
            ctaHref="/signup"
          />
          <Card
            title={`${vip.title} Annual`}
            price={`${vip.annual}€`}
            period="year"
            lotus={vip.lotusMonthlyIncluded}
            benefits={[`2 months free vs monthly`, ...vip.benefits]}
            ctaText="Subscribe annual"
            ctaHref="/signup"
            highlight
          />
          <Card
            title={`${gold.title} Monthly`}
            price={`${gold.monthly}€`}
            period="month"
            lotus={gold.lotusMonthlyIncluded}
            benefits={gold.benefits}
            ctaText="Subscribe Gold monthly"
            ctaHref="/signup"
          />
          <Card
            title={`${gold.title} Annual`}
            price={`${fmt(gold.annual)}€`}
            period="year"
            lotus={gold.lotusMonthlyIncluded}
            benefits={[`2 months free vs monthly`, ...gold.benefits]}
            ctaText="Subscribe Gold annual"
            ctaHref="/signup"
            highlight
          />
        </div>
      </section>

      {/* Compare VIP vs VIP Gold (UPDATED with Incognito) */}
      <section style={{ maxWidth: 1100, margin: "16px auto 18px", padding: "0 16px" }}>
        <h2 style={{ margin: "0 0 10px 0", color: "#D4AF37", textAlign: "center", fontSize: "clamp(20px,4.5vw,28px)" }}>
          Compare VIP vs VIP Gold
        </h2>
        <div
          className="cards-grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "start" }}
        >
          {/* VIP col */}
          <article className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 8 }}>VIP</div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li>Full galleries (non-NSFW): up to <b>100 photos</b> & <b>20 videos</b></li>
              <li>Priority in live rooms & chat</li>
              <li>VIP badge & highlights</li>
              <li>Exclusive VIP drops & events</li>
              <li>Better rates on selected VIP-only items</li>
              <li><b>NSFW pay-per-item</b> (chat, DM, profile) — <b>3-day access</b></li>
              <li><b>Purchases visible</b> in VIP chat</li>
            </ul>
          </article>

          {/* Gold col */}
          <article className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 8 }}>VIP Gold</div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li>Everything in VIP</li>
              <li>Extended galleries (non-NSFW): up to <b>300 photos</b> & <b>60 videos</b></li>
              <li>Top priority in lives & <b>Gold</b> reply in chat</li>
              <li>Gold badge & golden highlight</li>
              <li><b>+5% Lotus bonus</b> on every pack</li>
              <li>Gold Lounge (private events & early access)</li>
              <li>Cosmetic gold skins in Casino (no odds boost)</li>
              <li><b>NSFW pay-per-item</b> (chat, DM, profile)</li>
              <li><b>Lifetime storage</b> for <b>VIP chat & DM photos</b> (Library+)</li>
              <li><b>Silent purchases</b> (no chat broadcast)</li>
              <li><b>Incognito mode</b> (Live & Chat — appear as “Gold Member”)</li>
            </ul>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 1100, margin: "8px auto 22px", padding: "0 16px" }}>
        <h2 style={{ margin: "0 0 10px 0", color: "#D4AF37", textAlign: "center", fontSize: "clamp(20px,4.5vw,28px)" }}>
          FAQ
        </h2>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[
            { q: "How are the included Lotus credited?", a: "Monthly upon renewal (included Lotus per month)." },
            { q: "Can I cancel anytime?", a: "Yes. You keep access until the end of your current period." },
            { q: "Is NSFW content included?", a: "No. NSFW remains gift-unlock only, even for VIP / VIP Gold." },
            { q: "VIP vs VIP Gold?", a: "Gold adds extended galleries, top priority, +5% Lotus bonus, private lounge, cosmetic skins, lifetime storage (VIP chat & DM photos), and Incognito mode." },
            { q: "Are Lotus refundable?", a: "No. Lotus have no monetary value and are non-refundable." },
          ].map((x, i) => (
            <article key={i} className="card" style={{ padding: 14, display: "grid", gap: 6 }}>
              <div style={{ fontWeight: 800, color: "#D4AF37" }}>{x.q}</div>
              <div style={{ color: "#d7c9b3" }}>{x.a}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Secondary CTAs */}
      <section style={{ maxWidth: 900, margin: "0 auto 18px", padding: "0 16px", textAlign: "center" }}>
        <div className="btn-row-2" style={{ maxWidth: 560, margin: "0 auto" }}>
          <a href="/lotus" className="btn3d btn3d--gold">Buy Lotus</a>
          <a href="/contact" className="btn3d btn3d--velvet">Contact Support</a>
        </div>
      </section>

      {/* Legal / Notes */}
      <section style={{ maxWidth: 1100, margin: "0 auto 30px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, color: "#d7c9b3", fontSize: 13, lineHeight: 1.7 }}>
            <b>Legal / Notes:</b> Included Lotus are credited monthly upon renewal. Lotus have no monetary value and are
            non-refundable. NSFW media remain gift-unlock only. By subscribing you accept our{" "}
            <a href="/cgu" style={{ color: "#D4AF37", textDecoration: "none" }}>Terms</a>.
          </p>
        </div>
      </section>
    </main>
  );
                }
