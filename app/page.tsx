export const metadata = {
  title: "Velvet House Agency",
  description: "Premium live platform with VIP experiences and animated gifts",
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: "system-ui, Segoe UI, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(8px)",
          background: "rgba(43,13,13,0.88)",
          borderBottom: "1px solid rgba(212,175,55,0.18)",
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* Logo text (romantic look via simple cursive fallback) */}
          <div style={{ fontSize: 24, color: "#D4AF37", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            Velvet House
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontWeight: 700 }}>
            <a href="/live">Live</a>
            <a href="/vip">VIP</a>
            <a href="/gifts">Gifts</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contact">Contact</a>
            {/* Route exists as /cgu – we label it “Terms” for EN */}
            <a href="/cgu">Terms</a>
          </div>
        </nav>
      </header>

      {/* HERO with background cover + darker overlay to match logo */}
      <section
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "grid",
          placeItems: "center",
          padding: "24px 16px",
          backgroundImage:
            "linear-gradient(to bottom, rgba(43,13,13,0.60), rgba(30,8,8,0.86)), url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content card */}
        <div
          style={{
            width: "min(92vw, 680px)",
            borderRadius: 16,
            padding: "26px 22px 28px",
            background:
              "linear-gradient(180deg, rgba(15,15,15,0.45), rgba(15,15,15,0.28))",
            border: "1px solid rgba(212,175,55,0.22)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            backdropFilter: "blur(2px)",
          }}
        >
          {/* Title */}
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(30px, 8vw, 48px)",
              letterSpacing: "2px",
              color: "#D4AF37",
              textAlign: "center",
            }}
          >
            Velvet House
          </h1>

          {/* Tagline (moved down a bit, golden) */}
          <p
            style={{
              margin: "16px auto 22px",
              fontSize: "clamp(15px, 3.6vw, 18px)",
              lineHeight: 1.6,
              color: "#D4AF37",
              textAlign: "center",
              maxWidth: 620,
            }}
          >
            More than a platform: an exclusive universe where elegance meets
            mystery. Every creator shines. Every viewer becomes privileged.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href="/signup"
              style={{
                background: "#D4AF37",
                color: "#2c0d0d",
                textDecoration: "none",
                fontWeight: 800,
                padding: "12px 18px",
                borderRadius: 12,
                border: "1px solid #B8860B",
                flex: "1 1 180px",
                textAlign: "center",
              }}
            >
              Sign up
            </a>

            <a
              href="/login"
              style={{
                textDecoration: "none",
                fontWeight: 800,
                padding: "12px 18px",
                borderRadius: 12,
                border: "2px solid #D4AF37",
                color: "#D4AF37",
                flex: "1 1 180px",
                textAlign: "center",
              }}
            >
              Log in
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: 1100,
          margin: "40px auto 30px",
          padding: "0 16px",
          display: "grid",
          gap: 10,
        }}
      >
        <h2 style={{ margin: 0, color: "#D4AF37", fontSize: "clamp(22px,5vw,28px)" }}>
          About
        </h2>
        <p style={{ color: "#e9dfcf", lineHeight: 1.7, margin: "6px 0 12px" }}>
          Velvet House is a premium live platform with VIP access, animated gifts,
          and transparent monetization for creators and agencies.
        </p>
        <ul style={{ color: "#d7c9b3", margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Transparent commissions</li>
          <li>Automatic payouts</li>
          <li>Strict safety & moderation rules</li>
        </ul>
      </section>
    </main>
  );
}
