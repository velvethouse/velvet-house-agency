export const metadata = { title: "Live | Velvet House Agency" };

export default function LivePage() {
  const lives = [
    { title: "Live Showcase — Alice", time: "Ce soir 21:00", slug: "alice", desc: "Showcase + Q&A" },
    { title: "VIP Talk — Bella", time: "Demain 20:30", slug: "bella", desc: "Session VIP privée" }
  ];

  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <header style={{display:"grid",gap:6,marginBottom:16}}>
        <h1 style={{margin:0}}>Lives</h1>
        <p style={{color:"#cfcfd6",margin:0}}>Liste des lives en cours et programmés.</p>
      </header>

      <div style={{
        display:"grid",
        gap:14,
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"
      }}>
        {lives.map((x,i)=>(
          <a
            key={i}
            href={`/u/${x.slug}`}
            style={{
              textDecoration:"none",
              border:"1px solid #1f1f25",
              borderRadius:14,
              padding:16,
              background:"rgba(15,15,21,0.6)"
            }}
          >
            <div style={{display:"grid",gap:6}}>
              <div style={{fontWeight:700}}>{x.title}</div>
              <div style={{color:"#cfcfd6"}}>{x.time}</div>
              <div style={{color:"#a9a9b8",fontSize:14}}>{x.desc}</div>
            </div>
            <div style={{display:"flex",gap:10,marginTop:12,flexWrap:"wrap"}}>
              <span style={{padding:"8px 12px",border:"1px solid #2a2a33",borderRadius:10,color:"#e7e7ee"}}>Voir le profil</span>
              <span style={{padding:"8px 12px",background:"#8257e6",borderRadius:10,color:"#fff"}}>Rejoindre</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
