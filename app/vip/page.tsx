export const metadata = { title: "VIP | Velvet House Agency" };

export default function VipPage() {
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <header style={{display:"grid",gap:6,marginBottom:20}}>
        <h1 style={{margin:0}}>Accès VIP</h1>
        <p style={{color:"#cfcfd6",margin:0}}>
          Profitez d’avantages exclusifs : salons privés, tarifs spéciaux, suivi personnalisé et badges ✨
        </p>
      </header>

      <div style={{
        border:"1px solid #1f1f25",
        borderRadius:14,
        padding:24,
        background:"rgba(15,15,21,0.6)",
        display:"grid",
        gap:12,
        marginBottom:24
      }}>
        <h2 style={{margin:0}}>Avantages VIP</h2>
        <ul style={{color:"#cfcfd6",lineHeight:1.6,margin:0,paddingLeft:20}}>
          <li>Accès aux salons privés</li>
          <li>Tarifs et contenus exclusifs</li>
          <li>Suivi personnalisé</li>
          <li>Badges et reconnaissance VIP</li>
        </ul>
      </div>

      <a
        href="/dashboard"
        style={{
          display:"inline-block",
          padding:"14px 20px",
          background:"#8257e6",
          color:"#fff",
          borderRadius:12,
          textDecoration:"none",
          fontWeight:500
        }}
      >
        Devenir VIP
      </a>
    </main>
  );
}
