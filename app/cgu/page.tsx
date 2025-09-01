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

export const metadata = { title: "CGU | Velvet House Agency" };

export default function CGUPage() {
  return (
    <main>
      <Nav />

      <section style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7",lineHeight:1.7}}>
        <h1>Conditions Générales d’Utilisation (CGU)</h1>

        <h2>1. Objet</h2>
        <p>
          Les présentes CGU encadrent l’accès et l’utilisation du site Velvet House Agency par tout utilisateur
          (visiteur, membre VIP, créatrice, agence).
        </p>

        <h2>2. Accès au service</h2>
        <p>
          L’accès au site est gratuit. Certaines fonctionnalités (VIP, lives privés, gifts) peuvent être payantes
          et nécessitent la création d’un compte.
        </p>

        <h2>3. Comptes et sécurité</h2>
        <p>
          L’utilisateur est responsable de la confidentialité de ses identifiants et de toute activité réalisée via son compte.
          Velvet House Agency se réserve le droit de suspendre un compte en cas d’usage frauduleux ou contraire aux règles.
        </p>

        <h2>4. Contenu et modération</h2>
        <p>
          Tout contenu publié doit respecter la loi et nos règles internes (pas de nudité explicite, pas de violence ni propos illégaux).
          L’équipe se réserve le droit de retirer tout contenu non conforme et de mettre fin à un live en cas de violation.
        </p>

        <h2>5. Paiements et gifts</h2>
        <p>
          Les achats (gifts, abonnements VIP) sont réalisés via des prestataires tiers (ex. Stripe/PayPal).
          Aucune demande de remboursement ne peut être garantie hors cas prévus par la loi.
        </p>

        <h2>6. Données personnelles</h2>
        <p>
          Nous traitons les données conformément au RGPD. Vous disposez d’un droit d’accès, de rectification et de suppression.
          Contact : <a href="mailto:contact@velvethouseagency.com" style={{color:"#aeb8ff"}}>contact@velvethouseagency.com</a>.
        </p>

        <h2>7. Propriété intellectuelle</h2>
        <p>
          Les marques, logos, textes, visuels et éléments du site sont protégés. Toute reproduction non autorisée est interdite.
        </p>

        <h2>8. Responsabilité</h2>
        <p>
          Velvet House Agency n’est pas responsable des interruptions de service, pertes de données ou dommages indirects.
        </p>

        <h2>9. Droit applicable</h2>
        <p>
          Les présentes CGU sont soumises au droit applicable dans le pays de l’éditeur du site, sous réserve des dispositions impératives locales.
        </p>

        <h2>10. Contact</h2>
        <p>
          Pour toute question sur les CGU : <a href="mailto:contact@velvethouseagency.com" style={{color:"#aeb8ff"}}>contact@velvethouseagency.com</a>.
        </p>
      </section>
    </main>
  );
}
