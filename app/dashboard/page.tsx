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
    </main>
  );
}
