export default function NotFound() {
  return (
    <main style={{minHeight:"60vh",display:"grid",placeItems:"center",padding:"40px 20px",color:"#f5f5f7"}}>
      <div style={{textAlign:"center"}}>
        <h1 style={{marginBottom:8}}>404 — Page introuvable</h1>
        <a href="/" style={{color:"#aeb8ff",display:"block",marginBottom:24}}>Retour à l’accueil</a>
      </div>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid #1f1f25",marginTop:40,width:"100%"}}>
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
