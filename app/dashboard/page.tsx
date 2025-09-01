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

export const metadata = { title: "Dashboard | Velvet House Agency" };

export default function DashboardPage() {
  return (
    <main>
      <Nav />

      <section style={{maxWidth:1100, margin:"0 auto", padding:"32px 20px", color:"#f5f5f7"}}>
        <header style={{display:"grid", gap:6, marginBottom:20}}>
          <h1 style={{margin:0}}>Dashboard</h1>
          <p style={{color:"#cfcfd6", margin:0}}>
            Espace réservé aux créatrices et agences (auth à venir).
          </p>
        </header>

        <div style={{
          display:"grid",
          gap:16,
          gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"
        }}>
          <div style={{
            border:"1px solid #1f1f25",
            borderRadius:14,
            padding:20,
            background:"rgba(15,15,21,0.6)"
          }}>
            <h2 style={{marginTop:0}}>👩‍🎤 Créatrices</h2>
            <p style={{color:"#cfcfd6"}}>Créer un live, gérer son planning, suivre ses objectifs.</p>
          </div>

          <div style={{
            border:"1px solid #1f1f25",
            borderRadius:14,
            padding:20,
            background:"rgba(15,15,21,0.6)"
          }}>
            <h2 style={{marginTop:0}}>🏦 Paiements</h2>
            <p style={{color:"#cfcfd6"}}>Seuils de retrait, historique des gains, paiements automatiques.</p>
          </div>

          <div style={{
            border:"1px solid #1f1f25",
            borderRadius:14,
            padding:20,
            background:"rgba(15,15,21,0.6)"
          }}>
            <h2 style={{marginTop:0}}>🎁 Gifts</h2>
            <p style={{color:"#cfcfd6"}}>Catalogue, prix, animations et gestion des cadeaux.</p>
          </div>

          <div style={{
            border:"1px solid #1f1f25",
            borderRadius:14,
            padding:20,
            background:"rgba(15,15,21,0.6)"
          }}>
            <h2 style={{marginTop:0}}>🛡️ Sécurité</h2>
            <p style={{color:"#cfcfd6"}}>Règles de modération, signalements, gestion des bannissements.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
