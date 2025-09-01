export const metadata = { title: "Gifts | Velvet House Agency" };

const gifts = [
  { id: 1, name: "Lotus", price: "1€", animated: true },
  { id: 2, name: "Papillon", price: "2€", animated: true },
  { id: 3, name: "Étoile", price: "0,5€", animated: false }
];

export default function GiftsPage() {
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Cadeaux</h1>
      <p style={{color:"#cfcfd6"}}>
        Catalogue (50 prévus, dont 40 animés). Paiement & animation viendront ensuite.
      </p>
      <div style={{display:"grid",gap:12,gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",marginTop:16}}>
        {gifts.map(g => (
          <div key={g.id} style={{border:"1px solid #1f1f25",borderRadius:12,padding:16}}>
            <div style={{fontWeight:600}}>
              {g.name} {g.animated ? "✨" : ""}
            </div>
            <div style={{color:"#cfcfd6"}}>{g.price}</div>
            <button style={{marginTop:10,padding:"8px 12px",borderRadius:10,border:"1px solid #2a2a33",background:"transparent",color:"#e7e7ee"}}>
              Offrir
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
