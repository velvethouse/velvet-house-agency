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

      {/* HERO avec l'image que tu viens d'uploader */}
      <section
        style={{
          minHeight: "72vh",
          display: "grid",
          placeItems: "center",
          padding: "28px 20px",
          textAlign: "center"
        }}
      >
        <div style={{ width: "100%", maxWidth: 860, margin: "0 auto" }}>
          <img
            src="/A_mobile_app_design_for_Velvet_House_is_displayed_.png" // ← ton fichier actuel dans /public
            alt="Velvet House"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 16,
              display: "block",
              margin: "0 auto 20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              border: "1px solid rgba(58,21,21,0.6)"
            }}
          />

          {/* Boutons or */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                padding: "14px 20px",
                background: "#d4a437",
                color: "#2c0d0d",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
                border: "1px solid #b98d2f"
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
