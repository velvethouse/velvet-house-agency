export const metadata = { title: "VIP | Velvet House Agency" };

export default function VipPage() {
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Accès VIP</h1>
      <p style={{color:"#cfcfd6"}}>
        Avantages : salons privés, tarifs spéciaux, suivis personnalisés, badges.  
        (Paiements et abonnements à brancher plus tard)
      </p>
      <a href="/dashboard" style={{padding:"12px 16px",background:"#8257e6",color:"#fff",borderRadius:10,textDecoration:"none",display:"inline-block",marginTop:16}}>
        Devenir VIP
      </a>
    </main>
  );
}
