// app/vip/page.tsx

export default function VipPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(8px)",
          background: "rgba(43,13,13,0.88)",
          borderBottom: "1px solid rgba(212,175,55,0.18)",
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <a href="/" style={{ color: "#D4AF37", fontWeight: 800 }}>
            Velvet House
          </a>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontWeight: 700 }}>
            <a href="/live">Live</a>
            <a href="/gifts">Gifts</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contact">Contact</a>
            <a href="/cgu">Terms</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px", textAlign: "center" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(28px,6.5vw,44px)", margin: 0 }}>
          Become VIP
        </h1>
        <p style={{ margin: "10px auto 0", maxWidth: 800, color: "#e9dfcf", lineHeight: 1.7 }}>
          Unlock full galleries (non-NSFW), priority in lives & chats, exclusive rewards and premium
          access across Velvet House. NSFW media stay gift-unlock only — even for VIP.
        </p>
      </section>

      {/* Subscription tiers */}
      <section style={{ maxWidth: 1100, margin: "18px auto 10px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {/* Monthly */}
          <article className="card" style={{ display: "grid", gap: 12, padding: 18 }}>
            <h2 style={{ margin: 0, color: "#D4AF37" }}>VIP Monthly</h2>
            <div style={{ fontSize: 32, fontWeight: 800 }}>
              9,90€ <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ month</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li>Access up to <b>100 photos</b> & <b>20 videos</b> (non-NSFW)</li>
              <li>Priority in live rooms & chat</li>
              <li>VIP badge & highlights</li>
              <li>Exclusive VIP drops & events</li>
            </ul>
            <a href="/signup" className="btn3d btn3d--gold">Subscribe monthly</a>
          </article>

          {/* Annual */}
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
            <h2 style={{ margin: 0, color: "#D4AF37" }}>VIP Annual</h2>
            <div style={{ fontSize: 32, fontWeight: 800 }}>
              99€ <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ year</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li><b>2 months free</b> vs monthly</li>
              <li>Access up to <b>100 photos</b> & <b>20 videos</b> (non-NSFW)</li>
              <li>Top priority & early access</li>
              <li>Annual VIP exclusive rewards</li>
            </ul>
            <a href="/signup" className="btn3d btn3d--velvet">Subscribe annual</a>
          </article>
        </div>
      </section>

      {/* Condition Lotus */}
      <section style={{ maxWidth: 1100, margin: "8px auto 18px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, color: "#d7c9b3" }}>
            <b>Note:</b> Becoming VIP requires an <b>active subscription</b> (monthly or annual)
            <br />and a <b>minimum purchase of 100,000 Lotus</b>.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ maxWidth: 1100, margin: "8px auto 22px", padding: "0 16px" }}>
        <h2 style={{ margin: "0 0 10px 0", color: "#D4AF37", textAlign: "center", fontSize: "clamp(20px,4.5vw,28px)" }}>
          VIP benefits
        </h2>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {[
            { t: "Full galleries (non-NSFW)", d: "Up to 100 photos & 20 videos unlocked for every creator." },
            { t: "Priority access", d: "Top queue in lives & faster replies in chats." },
            { t: "Premium badge", d: "Stand out with the VIP mark across the platform." },
            { t: "Exclusive drops", d: "Early access to events, gifts & limited offers." },
            { t: "Better rates", d: "Special pricing on selected VIP-only items." },
            { t: "Support creators", d: "Directly support your favorite creators with more visibility." },
          ].map((x, i) => (
            <article key={i} className="card" style={{ padding: 14, display: "grid", gap: 6 }}>
              <div style={{ fontWeight: 800, color: "#D4AF37" }}>{x.t}</div>
              <div style={{ color: "#d7c9b3" }}>{x.d}</div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 1100, margin: "8px auto 30px", padding: "0 16px" }}>
        <h2 style={{ margin: "0 0 10px 0", color: "#D4AF37", textAlign: "center", fontSize: "clamp(20px,4.5vw,28px)" }}>
          FAQ
        </h2>

        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <article className="card" style={{ padding: 14 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 6 }}>What does VIP unlock?</div>
            <div style={{ color: "#d7c9b3" }}>
              Full access to non-NSFW galleries (100 photos / 20 videos), priority in live & chat, and exclusive VIP rewards.
            </div>
          </article>

          <article className="card" style={{ padding: 14 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 6 }}>What about NSFW content?</div>
            <div style={{ color: "#d7c9b3" }}>
              NSFW stays <b>gift-unlock only</b> for everyone (including VIP). Creators choose the exact gift to unlock.
            </div>
          </article>

          <article className="card" style={{ padding: 14 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 6 }}>Can I cancel anytime?</div>
            <div style={{ color: "#d7c9b3" }}>
              Yes. VIP can be canceled anytime; your access remains active until the end of the billing period.
            </div>
          </article>
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
