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

export const metadata = { title: "Gifts | Velvet House Agency" };

const gifts = [
  { id: 1, name: "Lotus", price: "1€", animated: true,  desc: "Petit soutien élégant" },
  { id: 2, name: "Papillon", price: "2€", animated: true,  desc: "Animation papillon 🦋" },
  { id: 3, name: "Étoile", price: "0,5€", animated: false, desc: "Un clin d’œil ⭐" },
  { id: 4, name: "Velvet Box", price: "5€", animated: true, desc: "Cadeau premium" }
];

export default function GiftsPage() {
  return (
    <main>
      <Nav />

      <section style={{maxWidth:1100, margin:"0 auto", padding:"32px 20px", color:"#f5f5f7"}}>
        <header style={{display:"grid", gap:6, marginBottom:16}}>
          <h1 style={{margin:0}}>Cadeaux</h1>
          <p style={{color:"#cfcfd6", margin:0}}>
            Choisis un cadeau à offrir pendant un live (animations à venir).
          </p>
        </header>

        <div style={{
          display:"grid",
          gap:14,
          gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"
        }}>
          {gifts.map(g => (
            <div key={g.id} style={{
              border:"1px solid #1f1f25",
              borderRadius:14,
              padding:16,
              background:"rgba(15,15,21,0.6)",
              display:"grid",
              gap:8
            }}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{fontWeight:700}}>{g.name} {g.animated ? "✨" : ""}</div>
                <div style={{color:"#cfcfd6"}}>{g.price}</div>
              </div>
              <div style={{color:"#a9a9b8", fontSize:14}}>{g.desc}</div>
              <button
                style={{
                  marginTop:6,
                  padding:"10px 14px",
                  borderRadius:12,
                  border:"1px solid #2a2a33",
                  background:"#8257e6",
                  color:"#fff",
                  fontWeight:500,
                  cursor:"pointer"
                }}
              >
                Offrir
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
