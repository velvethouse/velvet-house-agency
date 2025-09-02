import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","700"] });

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top bar (CGU, Contact, etc.) */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(8px)",
          background: "rgba(32,8,8,0.85)",
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
          <div className={greatVibes.className} style={{ fontSize: 24, color: "var(--vh-gold)" }}>
            Velvet House
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontWeight: 600 }}>
            <a href="/live">Live</a>
            <a href="/vip">VIP</a>
            <a href="/gifts">Gifts</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contact">Contact</a>
            <a href="/cgu">CGU</a>
          </div>
        </nav>
      </header>

      {/* HERO avec background cover + assombrissement pour matcher le logo */}
      <section
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "grid",
          placeItems: "center",
          padding: "20px",
          backgroundImage:
            "linear-gradient(to bottom, rgba(32,8,8,0.65), rgba(26,0,0,0.85)), url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            width: "min(92vw, 680px)",
            borderRadius: 16,
            padding: "22px",
            background:
              "linear-gradient(180deg, rgba(15,15,15,0.45), rgba(15,15,15,0.30))",
            border: "1px solid rgba(212,175,55,0.22)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            backdropFilter: "blur(2px)",
          }}
        >
          {/* Titre romantique (Great Vibes) */}
          <h1
            className={greatVibes.className}
            style={{
              margin: 0,
              fontSize: "clamp(36px, 9vw, 54px)",
              lineHeight: 1.1,
              color: "var(--vh-gold)",
              textAlign: "center",
            }}
          >
            Velvet House
          </h1>

          {/* Slogan élégant (Playfair) + doré, DESCENDU */}
          <p
            className={playfair.className}
            style={{
              margin: "14px auto 18px",
              fontSize: "clamp(14px, 3.4vw, 18px)",
              lineHeight: 1.6,
              color: "var(--vh-gold)",
              textAlign: "center",
              maxWidth: 620,
            }}
          >
            More than a platform: an exclusive universe where elegance meets
            mystery. Every creator shines. Every viewer becomes privileged.
          </p>

          {/* Boutons Inscription / Connexion */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <a href="/signup" className="goldBtn" style={{ flex: "1 1 180px", textAlign: "center" }}>
              Inscription
            </a>
            <a
              href="/login"
              className="goldBtnOutline"
              style={{ flex: "1 1 180px", textAlign: "center" }}
            >
              Connexion
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT (léger, pas de doublon du slogan) */}
      <section
        id="about"
        style={{
          maxWidth: 1100,
          margin: "34px auto",
          padding: "0 16px",
          display: "grid",
          gap: 10,
        }}
      >
        <h2 style={{ margin: 0, color: "var(--vh-gold)", fontSize: "clamp(22px,5vw,28px)" }}>
          About
        </h2>
        <p style={{ color: "var(--vh-muted)", lineHeight: 1.7 }}>
          Velvet House is a premium live platform with VIP access, animated gifts,
          and transparent monetization for creators and agencies.
        </p>
        <ul style={{ color: "var(--vh-muted)", margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Transparent commissions</li>
          <li>Automatic payouts</li>
          <li>Strict safety & moderation rules</li>
        </ul>
      </section>
    </main>
  );
}
