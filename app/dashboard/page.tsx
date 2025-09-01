export const metadata = { title: "Dashboard | Velvet House Agency" };

export default function DashboardPage() {
  return (
    <main style={{maxWidth:1100, margin:"0 auto", padding:"32px 20px", color:"#f5f5f7"}}>
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
    </main>
  );
}
