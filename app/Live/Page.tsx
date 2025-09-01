function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: "rgba(11,11,15,0.8)",
        borderBottom: "1px solid #1f1f25",
        zIndex: 50
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ fontWeight: 700, letterSpacing: 0.5, fontSize: 18 }}>
          <span style={{ opacity: 0.8, marginRight: 8 }}>🌸</span>
          Velvet House Agency
          <span style={{ opacity: 0.8, marginLeft: 8 }}>🦋</span>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 15, flexWrap: "wrap" }}>
          <a href="/live" style={{ color: "#cfcfd6", textDecoration: "none" }}>Live</a>
          <a href="/vip" style={{ color: "#cfcfd6", textDecoration: "none" }}>VIP</a>
          <a href="/gifts" style={{ color: "#cfcfd6", textDecoration: "none" }}>Gifts</a>
          <a href="/dashboard" style={{ color: "#cfcfd6", textDecoration: "none" }}>Dashboard</a>
          <a href="/#about" style={{ color: "#cfcfd6", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#cfcfd6", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export const metadata = { title: "Live | Velvet House Agency" };

export default function LivePage() {
  const lives = [
    { title: "Live Showcase — Alice", time: "Ce soir 21:00", slug: "alice", desc: "Showcase + Q&A" },
    { title: "VIP Talk — Bella", time: "Demain 20:30", slug: "bella", desc: "Session VIP privée" }
  ];

  return (
    <main>
      <Nav />

      <section style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
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
      </section>
    </main>
  );
}
