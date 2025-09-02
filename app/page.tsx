function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: "rgba(44,13,13,0.9)",
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
          <a href="/live" style={{ color: "#f6f2ea", textDecoration: "none" }}>Live</a>
          <a href="/vip" style={{ color: "#f6f2ea", textDecoration: "none" }}>VIP</a>
          <a href="/gifts" style={{ color: "#f6f2ea", textDecoration: "none" }}>Gifts</a>
          <a href="/dashboard" style={{ color: "#f6f2ea", textDecoration: "none" }}>Dashboard</a>
          <a href="#about" style={{ color: "#f6f2ea", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#f6f2ea", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO avec lotus + nom */}
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
          {/* Logo lotus */}
          <img
            src="/logo-lotus.svg"
            alt="Velvet House Lotus"
            style={{ width: "100%", maxWidth: 160, marginBottom: 16 }}
          />

          {/* Nom de la marque */}
          <h1 style={{ margin: 0, fontSize: "2rem", letterSpacing: "2px" }}>
            VELVET HOUSE
          </h1>

          {/* Boutons */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
            <a
              href="/contact"
              className="btn-gold"
              style={{
                padding: "14px 20px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              Nous contacter
            </a>
            <a
              href="#about"
              className="btn-outline-gold"
              style={{
                padding: "14px 20px",
                borderRadius: 12,
                textDecoration: "none",
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
        <h2 style={{ margin: 0 }}>À propos</h2>
        <p style={{ color: "var(--vh-muted)" }}>
          Velvet House propose un espace premium avec accès VIP, jeux exclusifs
          et monétisation transparente pour créatrices et agences.
        </p>
        <ul style={{ color: "var(--vh-muted)" }}>
          <li>Commissions transparentes</li>
          <li>Paiements automatiques</li>
          <li>Sécurité & modération strictes</li>
        </ul>
      </section>
    </main>
  );
}
