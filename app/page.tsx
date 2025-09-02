export const metadata = {
  title: "Velvet House Agency",
  description: "Plateforme de live & expériences VIP",
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #3a0d0d 0%, #1a0000 100%)",
        color: "#f5f5f7",
        padding: "20px",
        fontFamily: "system-ui, Segoe UI, sans-serif",
      }}
    >
      {/* LOGO HERO */}
      <section style={{ textAlign: "center", marginTop: 60 }}>
        <img
          src="/hero.png"
          alt="Velvet House"
          style={{
            width: "300px",
            maxWidth: "80%",
            borderRadius: 16,
            display: "block",
            margin: "0 auto 20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            border: "1px solid rgba(58,21,21,0.6)",
          }}
        />
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#D4AF37", // doré
            marginBottom: 10,
          }}
        >
          VELVET HOUSE
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#f5f5f7", opacity: 0.9 }}>
          Plateforme de live & expériences VIP.  
          Cadeaux animés, suivi personnalisé et univers luxe.
        </p>

        {/* Boutons */}
        <div style={{ marginTop: 30 }}>
          <a
            href="/contact"
            style={{
              background: "#D4AF37",
              padding: "12px 24px",
              borderRadius: "8px",
              marginRight: "12px",
              color: "#000",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Nous contacter
          </a>
          <a
            href="/about"
            style={{
              border: "2px solid #D4AF37",
              padding: "12px 24px",
              borderRadius: "8px",
              color: "#D4AF37",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            En savoir plus
          </a>
        </div>
      </section>
    </main>
  );
}
