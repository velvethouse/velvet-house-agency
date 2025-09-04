// app/dashboard/page.tsx

export default function DashboardPage() {
  const tileStyle: React.CSSProperties = {
    display: "grid",
    gap: 10,
    padding: 16,
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
    border: "1px solid rgba(212,175,55,0.22)",
    boxShadow: "0 10px 26px rgba(0,0,0,.30)",
    color: "#f5f5f5",
    textDecoration: "none",
  };

  const iconStyle: React.CSSProperties = {
    width: 28,
    height: 28,
    display: "block",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Title */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1
          className="gold-gradient-text"
          style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}
        >
          Dashboard
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Manage creators, gifts, payments and security — all in one place.
        </p>
      </section>

      {/* Primary tiles */}
      <section style={{ maxWidth: 1100, margin: "16px auto 22px", padding: "0 16px" }}>
        <div
          className="cards-grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {/* Creators */}
          <a href="/dashboard/creators" style={tileStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/icons/creator.svg" alt="Creators" style={iconStyle} />
              <div style={{ fontWeight: 800, color: "#D4AF37" }}>Creators</div>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              Profiles, verification, galleries & VIP status.
            </div>
            <div className="btn-row-2" style={{ marginTop: 6 }}>
              <a href="/live" className="btn3d btn3d--velvet">Open Live</a>
              <a href="/vip" className="btn3d btn3d--outline-gold">VIP</a>
            </div>
          </a>

          {/* Payments */}
          <a href="/dashboard/payments" style={tileStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/icons/payment.svg" alt="Payments" style={iconStyle} />
              <div style={{ fontWeight: 800, color: "#D4AF37" }}>Payments</div>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              Lotus packs, payouts, subscriptions & orders.
            </div>
            <div className="btn-row-2" style={{ marginTop: 6 }}>
              <a href="/lotus" className="btn3d btn3d--gold">Buy Lotus</a>
              <a href="/checkout/lotus" className="btn3d btn3d--outline-gold">Checkout</a>
            </div>
          </a>

          {/* Gifts */}
          <a href="/dashboard/gifts" style={tileStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/icons/gift.svg" alt="Gifts" style={iconStyle} />
              <div style={{ fontWeight: 800, color: "#D4AF37" }}>Gifts</div>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              Catalog (50 items), goal gifts, unlock rules (NSFW).
            </div>
            <div className="btn-row-2" style={{ marginTop: 6 }}>
              <a href="/gifts" className="btn3d btn3d--velvet">Open Gifts</a>
              <a href="/u/alice" className="btn3d btn3d--outline-gold">Creator demo</a>
            </div>
          </a>

          {/* Security */}
          <a href="/dashboard/security" style={tileStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/icons/security.svg" alt="Security" style={iconStyle} />
              <div style={{ fontWeight: 800, color: "#D4AF37" }}>Security</div>
            </div>
            <div style={{ color: "#d7c9b3" }}>
              KYC creators, moderation, account safety, audits.
            </div>
            <div className="btn-row-2" style={{ marginTop: 6 }}>
              <a href="/contact" className="btn3d btn3d--platinum">Report</a>
              <a href="/cgu" className="btn3d btn3d--outline-gold">Terms</a>
            </div>
          </a>
        </div>
      </section>

      {/* Quick actions */}
      <section style={{ maxWidth: 1100, margin: "0 auto 30px", padding: "0 16px" }}>
        <h2 style={{ margin: "0 0 10px 0", color: "#D4AF37", fontSize: "clamp(18px,4.5vw,24px)" }}>
          Quick actions
        </h2>
        <div className="btn-row-3" style={{ maxWidth: 760 }}>
          <a href="/live" className="btn3d btn3d--gold">Go Live</a>
          <a href="/vip" className="btn3d btn3d--velvet">VIP Info</a>
          <a href="/lotus" className="btn3d btn3d--outline-gold">Buy Lotus</a>
        </div>
      </section>
    </main>
  );
}
