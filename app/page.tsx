function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: "rgba(44,13,13,0.9)", // fond bordeaux semi-transparent
        borderBottom: "1px solid #3a1515",
        zIndex: 50
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ fontWeight: 700, letterSpacing: 0.5, fontSize: 18, color: "#d4a437" }}>
          Velvet House Agency
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 15, flexWrap: "wrap" }}>
          <a href="/live" style={{ color: "#f5f5f5", textDecoration: "none" }}>Live</a>
          <a href="/vip" style={{ color: "#f5f5f5", textDecoration: "none" }}>VIP</a>
          <a href="/gifts" style={{ color: "#f5f5f5", textDecoration: "none" }}>Gifts</a>
          <a href="/dashboard" style={{ color: "#f5f5f5", textDecoration: "none" }}>Dashboard</a>
          <a href="#about" style={{ color: "#f5f5f5", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#f5f5f5", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO avec logo */}
      <section
        style={{
          minHeight: "75vh",
          display: "grid",
          placeItems: "center",
          padding: "40px 20px",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: 600 }}>
          {/* Logo centré */}
          <img
            src="/logo.png" // 👉 mets ton image du logo dans /public/logo.png
            alt="Velvet House Logo"
            style={{ width: "100%", maxWidth: 300, marginBottom: 24 }}
          />

          {/* Boutons */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                padding: "14px 20px",
                background: "#d4a437",
                color: "#2c0d0d",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              Nous contacter
            </a>
            <a
              href="#about"
              style={{
                padding: "14px 20px",
                border: "1px solid #d4a437",
                borderRadius: 12,
                textDecoration: "none",
                color: "#d4a437",
                fontWeight: 600
              }}
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "32px 20px",
          display: "grid",
          gap: 10
        }}
      >
        <h2 style={{ margin: 0, color: "#d4a437" }}>À propos</h2>
        <p style={{ color: "#f5f5f5" }}>
          Velvet House propose un espace premium avec accès VIP, jeux exclusifs
          et monétisation transparente pour créatrices et agences.
        </p>
        <ul style={{ color: "#d7c9b3" }}>
          <li>Commissions transparentes</li>
          <li>Paiements automatiques</li>
          <li>Sécurité & modération strictes</li>
        </ul>
      </section>
    </main>
  );
}
