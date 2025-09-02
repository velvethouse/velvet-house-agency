export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #3c0d0d, #1a0000)",
        color: "#f5f5f5",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Logo responsive */}
      <img
        src="/hero.png"
        alt="Velvet House Lotus"
        className="hero-logo"
      />

      {/* Titre */}
      <h1 className="hero-title">VELVET HOUSE</h1>
      <p className="hero-subtitle">
        Plateforme de live & expériences VIP. Cadeaux animés, suivi personnalisé et univers luxe.
      </p>

      {/* Boutons */}
      <div
        className="button-container"
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "15px",
        }}
      >
        <a
          href="/contact"
          style={{
            backgroundColor: "#d4af37",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Nous contacter
        </a>
        <a
          href="/about"
          style={{
            border: "2px solid #d4af37",
            color: "#d4af37",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          En savoir plus
        </a>
      </div>
    </main>
  );
}
