function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: "rgba(11,11,15,0.8)",
        borderBottom: "1px solid #1f1f25",
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
        <div style={{ fontWeight: 700, letterSpacing: 0.5, fontSize: 18 }}>
          <span style={{ opacity: 0.8, marginRight: 8 }}>🌸</span>
          Velvet House Agency
          <span style={{ opacity: 0.8, marginLeft: 8 }}>🦋</span>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 15, flexWrap: "wrap" }}>
          <a href="/live" style={{ color: "#cfcfd6", textDecoration: "none" }}>Live</a>
          <a href="/vip" style={{ color: "#cfcfd6", textDecoration: "none" }}>VIP</a>
          <a href="/gifts" style={{ color: "#cfcfd6", textDecoration: "none" }}>Gifts</a>
          <a href="/dashboard" style={{ color: "#cfcfd6", textDecoration: "none" }}>Dashboard</a>
          <a href="/#about" style={{ color: "#cfcfd6", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#cfcfd6", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export const metadata = { title: "Mentions légales | Velvet House Agency" };

export default function LegalPage() {
  return (
    <main>
      <Nav />

      <section style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7",lineHeight:1.7}}>
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Velvet House Agency<br />
          Responsable de publication : Sébastien Bodet<br />
          Email : contact@velvethouseagency.com
        </p>

        <h2>Hébergement</h2>
        <p>
          Hébergé par Vercel Inc.<br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Velvet House Agency,
          sauf mentions contraires. Toute reproduction ou représentation totale ou partielle est interdite sans autorisation préalable.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations recueillies via le site servent uniquement à répondre aux demandes des utilisateurs.
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Velvet House Agency ne saurait être tenue pour responsable des dommages directs ou indirects liés à l’utilisation du site.
        </p>
      </section>
    </main>
  );
}
