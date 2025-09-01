function Nav() {
  return (
    <header style={{position:"sticky",top:0,backdropFilter:"blur(8px)",borderBottom:"1px solid #1f1f25",zIndex:10}}>
      <nav style={{maxWidth:1100,margin:"0 auto",padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{fontWeight:700,letterSpacing:0.5}}>
          <span style={{opacity:0.8,marginRight:8}}>🌸</span>
          Velvet House Agency
          <span style={{opacity:0.8,marginLeft:8}}>🦋</span>
        </div>
        <div style={{display:"flex",gap:18,fontSize:14}}>
          <a href="/live" style={{color:"#cfcfd6",textDecoration:"none"}}>Live</a>
          <a href="/vip" style={{color:"#cfcfd6",textDecoration:"none"}}>VIP</a>
          <a href="/gifts" style={{color:"#cfcfd6",textDecoration:"none"}}>Gifts</a>
          <a href="/dashboard" style={{color:"#cfcfd6",textDecoration:"none"}}>Dashboard</a>
          <a href="#about" style={{color:"#cfcfd6",textDecoration:"none"}}>About</a>
          <a href="#contact" style={{color:"#cfcfd6",textDecoration:"none"}}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section style={{minHeight:"70vh",display:"grid",placeItems:"center",padding:"40px 20px"}}>
        <div style={{maxWidth:900,textAlign:"center",lineHeight:1.5}}>
          <h1 style={{fontSize:38,marginBottom:12}}>Velvet House Agency</h1>
          <p style={{color:"#cfcfd6",marginBottom:24}}>
            Plateforme de live & expériences VIP. Cadeaux animés, suivi personnalisé et univers luxe.
          </p>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <a href="#contact" style={{padding:"12px 18px",background:"#8257e6",color:"white",borderRadius:10,textDecoration:"none"}}>Nous contacter</a>
            <a href="#about" style={{padding:"12px 18px",border:"1px solid #2a2a33",borderRadius:10,textDecoration:"none",color:"#e7e7ee"}}>En savoir plus</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",display:"grid",gap:10}}>
        <h2 style={{margin:0}}>À propos</h2>
        <p style={{color:"#cfcfd6"}}>Espace premium avec accès VIP, jeux exclusifs et monétisation transparente pour créatrices et agences.</p>
        <ul style={{color:"#cfcfd6"}}>
          <li>Commissions transparentes</li>
          <li>Paiements automatiques</li>
          <li>Sécurité & modération strictes</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",display:"grid",gap:10}}>
        <h2 style={{margin:0}}>Contact</h2>
        <p>📧 <a href="mailto:contact@velvethouseagency.com" style={{color:"#aeb8ff"}}>contact@velvethouseagency.com</a></p>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid #1f1f25",marginTop:40}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"18px 20px",display:"flex",gap:16,justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",color:"#9a9aaa",fontSize:13}}>
          <span>© {new Date().getFullYear()} Velvet House Agency — All rights reserved.</span>
          <nav style={{display:"flex",gap:12}}>
            <a href="/legal" style={{color:"#aeb8ff",textDecoration:"none"}}>Mentions légales</a>
            <a href="/cgu" style={{color:"#aeb8ff",textDecoration:"none"}}>CGU</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
