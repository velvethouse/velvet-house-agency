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
