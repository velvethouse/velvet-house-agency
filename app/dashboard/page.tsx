export const metadata = { title: "Dashboard | Velvet House Agency" };

export default function DashboardPage() {
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Dashboard</h1>
      <p style={{color:"#cfcfd6"}}>
        Espace réservé (auth à venir) : stats, paiements, gestion des lives, gifts, niveaux VIP, modération.
      </p>

      <ul style={{color:"#cfcfd6",lineHeight:1.8}}>
        <li>👩‍🎤 Créatrices : créer un live, planning, objectifs</li>
        <li>🏦 Paiements : seuils, historiques, auto-payout</li>
        <li>🎁 Gifts : catalogue, prix, animations</li>
        <li>🛡️ Sécurité : règles, signalements, bannissements</li>
      </ul>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid #1f1f25",marginTop:40}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"18px 20px",display:"flex",gap:16,justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",color:"#9a9aaa",fontSize:13}}>
          <span>© {new Date().getFullYear()} Velvet House Agency — All rights reserved.</span>
          <nav style={{display:"flex",gap:12}}>
            <a href="/legal" style={{color:"#aeb8ff",textDecoration:"none"}}>Mentions légales</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
