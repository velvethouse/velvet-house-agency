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
      <p style={{color:"#cfcfd6",marginBottom:16}}>
        Bio, planning, compteur de cadeaux, aperçu VIP, et bouton “Entrer en live”.
      </p>

      {/* Liens publics */}
      <div style={{display:"flex",gap:12,flexWrap:"wrap",margin:"12px 0 24px 0"}}>
        <a href="/live" style={{padding:"10px 14px",border:"1px solid #2a2a33",borderRadius:10,textDecoration:"none",color:"#e7e7ee"}}>
          Voir la liste des lives
        </a>
        <a href="/gifts" style={{padding:"10px 14px",border:"1px solid #2a2a33",borderRadius:10,textDecoration:"none",color:"#e7e7ee"}}>
          Envoyer un cadeau
        </a>
        <a href="/vip" style={{padding:"10px 14px",border:"1px solid #2a2a33",borderRadius:10,textDecoration:"none",color:"#e7e7ee"}}>
          Devenir VIP
        </a>
      </div>

      {/* Accès créatrice (privé, pas d’auth encore) */}
      <div style={{border:"1px solid #1f1f25",borderRadius:12,padding:16}}>
        <h2 style={{marginTop:0}}>Espace créatrice</h2>
        <p style={{color:"#cfcfd6",marginBottom:12}}>Liens rapides (réservés à la streameuse) :</p>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <a href={`/u/${name}/studio`} style={{padding:"10px 14px",background:"#2a2a33",borderRadius:10,textDecoration:"none",color:"#e7e7ee"}}>
            Studio
          </a>
          <a href={`/u/${name}/live`} style={{padding:"10px 14px",background:"#2a2a33",borderRadius:10,textDecoration:"none",color:"#e7e7ee"}}>
            Live
          </a>
          <a href={`/u/${name}/chat`} style={{padding:"10px 14px",background:"#2a2a33",borderRadius:10,textDecoration:"none",color:"#e7e7ee"}}>
            Chat
          </a>
        </div>
        <p style={{color:"#8a8aa0",fontSize:13,marginTop:10}}>
          (Plus tard, ces liens seront protégés par connexion/permissions.)
        </p>
      </div>
    </main>
  );
}
