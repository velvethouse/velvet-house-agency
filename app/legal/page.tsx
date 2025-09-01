export const metadata = { title: "Mentions légales | Velvet House Agency" };

export default function LegalPage() {
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7",lineHeight:1.7}}>
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
        340 S Lemon Ave #4133<br />
        Walnut, CA 91789, États-Unis
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Velvet House Agency,
        sauf mentions contraires. Toute reproduction ou représentation totale ou partielle est interdite sans autorisation préalable.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les informations recueillies via le site font l’objet d’un traitement destiné uniquement à répondre aux demandes des utilisateurs.
        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Velvet House Agency ne saurait être tenue pour responsable des dommages directs ou indirects liés à l’utilisation du site.
      </p>
    </main>
  );
}
