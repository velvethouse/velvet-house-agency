export const metadata = { title: "Gifts | Velvet House Agency" };

const gifts = [
  { id: 1, name: "Lotus", price: "1€", animated: true,  desc: "Petit soutien élégant" },
  { id: 2, name: "Papillon", price: "2€", animated: true,  desc: "Animation papillon 🦋" },
  { id: 3, name: "Étoile", price: "0,5€", animated: false, desc: "Un clin d’œil ⭐" },
  { id: 4, name: "Velvet Box", price: "5€", animated: true, desc: "Cadeau premium" }
];

export default function GiftsPage() {
  return (
    <main style={{maxWidth:1100, margin:"0 auto", padding:"32px 20px", color:"#f5f5f7"}}>
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
    </main>
  );
}
