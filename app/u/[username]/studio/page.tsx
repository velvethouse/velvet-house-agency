'use client';

import NovaChat from "../../../../components/NovaChat";

export const metadata = { title: "Studio | Velvet House Agency" };

type Props = { params: { username: string } };

export default function StudioPage({ params }: Props) {
  const name = params.username;

  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Espace studio — {name}</h1>
      <p style={{color:"#cfcfd6",marginBottom:20}}>
        Ici la streameuse peut préparer son live, gérer son chat, et Nova est dispo pour l’aider ✨
      </p>

      <div style={{border:"1px solid #1f1f25",borderRadius:12,padding:20,marginBottom:20}}>
        <h2>Préparation du live</h2>
        <ul style={{color:"#cfcfd6",lineHeight:1.6}}>
          <li>Choisir le titre du live</li>
          <li>Programmer l’heure</li>
          <li>Activer/désactiver gifts</li>
        </ul>
      </div>

      <div style={{border:"1px solid #1f1f25",borderRadius:12,padding:20}}>
        <h2>Chat studio</h2>
        <p style={{color:"#cfcfd6"}}>Zone réservée à la streameuse pour tester son chat avant diffusion.</p>
      </div>

      {/* Nova visible seulement ici */}
      <NovaChat />
    </main>
  );
}
