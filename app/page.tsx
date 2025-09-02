export default function HomePage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {/* Logo ou image */}
      <img 
        src="/hero.png" 
        alt="Velvet House Lotus" 
        style={{ maxWidth: "200px", margin: "0 auto 1.5rem auto" }} 
      />

      {/* Titre principal en dégradé or */}
      <h1 className="gold-gradient-text">VELVET HOUSE</h1>

      {/* Slogan */}
      <p>
        Velvet House, more than a platform: <br />
        an exclusive universe where elegance meets mystery. <br />
        Every creator shines. Every viewer becomes privileged.
      </p>

      {/* Boutons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button>Sign up</button>
        <button className="button-outline">Log in</button>
        <button className="button-outline">Learn more</button>
      </div>

      {/* Section About */}
      <section style={{ marginTop: "3rem" }}>
        <h2>About</h2>
        <p>
          Velvet House is a premium live platform with VIP access, animated gifts, 
          and transparent monetization for creators and agencies.
        </p>
        <ul style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto", color: "var(--gold)" }}>
          <li>Transparent commissions</li>
          <li>Automatic payouts</li>
          <li>Strict safety & moderation rules</li>
        </ul>
      </section>
    </main>
  );
}
