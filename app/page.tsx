// app/page.tsx

export default function HomePage() {
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
      <section
        style={{
          maxWidth: 1100,
          margin: "28px auto 20px",
          padding: "0 16px",
        }}
      >
        <div
          className="card"
          style={{
            padding: 18,
            borderRadius: 18,
            background: "linear-gradient(180deg, rgba(15,15,15,.42), rgba(15,15,15,.28))",
            border: "1px solid rgba(212,175,55,.22)",
            boxShadow: "0 10px 26px rgba(0,0,0,.30)",
          }}
        >
          <h1
            className="gold-gradient-text"
            style={{ fontSize: "clamp(30px,7vw,52px)", margin: "8px 0 10px" }}
          >
            Velvet House
          </h1>

          <p style={{ margin: 0, color: "#e9dfcf", lineHeight: 1.7, maxWidth: 820 }}>
            More than a platform: an exclusive universe where elegance meets mystery.  
            Every creator shines. Every viewer becomes privileged.
          </p>

          <div className="btn-row-2" style={{ maxWidth: 560, marginTop: 18 }}>
            <a href="/signup" className="btn3d btn3d--gold btn3d--lg">Sign up</a>
            <a href="/login"  className="btn3d btn3d--outline-gold btn3d--lg">Log in</a>
          </div>
        </div>
      </section>

      {/* Quick sections */}
      <section style={{ maxWidth: 1100, margin: "4px auto 28px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <a href="/live" className="card" style={{ padding: 16, textDecoration: "none", color: "#f5f5f5" }}>
            <h2 style={{ margin: 0, color: "#D4AF37" }}>Live</h2>
            <p style={{ margin: "8px 0 0", color: "#d7c9b3" }}>
              Discover upcoming & current live sessions. Send gifts, unlock moments.
            </p>
          </a>

          <a href="/vip" className="card" style={{ padding: 16, textDecoration: "none", color: "#f5f5f5" }}>
            <h2 style={{ margin: 0, color: "#D4AF37" }}>VIP</h2>
            <p style={{ margin: "8px 0 0", color: "#d7c9b3" }}>
              Full non-NSFW galleries, priority in lives & chats. NSFW stays gift-unlock only.
            </p>
          </a>

          <a href="/gifts" className="card" style={{ padding: 16, textDecoration: "none", color: "#f5f5f5" }}>
            <h2 style={{ margin: 0, color: "#D4AF37" }}>Gifts</h2>
            <p style={{ margin: "8px 0 0", color: "#d7c9b3" }}>
              Choose animated gifts. Creators may set goal gifts for private sessions.
            </p>
          </a>

          <a href="/lotus" className="card" style={{ padding: 16, textDecoration: "none", color: "#f5f5f5" }}>
            <h2 style={{ margin: 0, color: "#D4AF37" }}>Lotus</h2>
            <p style={{ margin: "8px 0 0", color: "#d7c9b3" }}>
              Buy Lotus packs (transparent pricing, no additional taxes).
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
