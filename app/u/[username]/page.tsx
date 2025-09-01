import type { Metadata } from "next";

type Props = { params: { username: string } };

export function generateMetadata({ params }: Props): Metadata {
  return { title: `${params.username} | Velvet House` };
}

export default function UserProfile({ params }: Props) {
  const name = params.username;
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1 style={{marginBottom:8}}>Profil — {name}</h1>
      <p style={{color:"#cfcfd6"}}>
        Bio, planning, compteur de cadeaux, aperçu VIP, et bouton “Entrer en live”.
      </p>
      <div style={{display:"grid",gap:12,marginTop:16}}>
        <a href="/live" style={{padding:"12px 16px",background:"#8257e6",color:"#fff",borderRadius:10,textDecoration:"none",width:"fit-content"}}>
          Rejoindre le live
        </a>
        <a href="/gifts" style={{padding:"12px 16px",border:"1px solid #2a2a33",color:"#e7e7ee",borderRadius:10,textDecoration:"none",width:"fit-content"}}>
          Envoyer un cadeau
        </a>
      </div>
    </main>
  );
}
