export const metadata = { title: "Live | Velvet House Agency" };

export default function LivePage() {
  const lives = [
    { title: "Live Showcase — Alice", time: "Ce soir 21:00", slug: "alice" },
    { title: "Q&A VIP — Bella", time: "Demain 20:30", slug: "bella" }
  ];

  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Lives</h1>
      <p style={{color:"#cfcfd6"}}>Liste des lives en cours / programmés (LiveKit plus tard).</p>

      <div style={{display:"grid",gap:16,marginTop:16}}>
        {lives.map((x,i)=>(
          <a key={i} href={`/u/${x.slug}`} style={{textDecoration:"none",border:"1px solid #1f1f25",borderRadius:12,padding:16}}>
            <div style={{fontWeight:600}}>{x.title}</div>
            <div style={{color:"#cfcfd6"}}>{x.time}</div>
          </a>
        ))}
      </div>

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
