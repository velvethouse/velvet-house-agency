'use client';

import NovaChat from "../../../../components/NovaChat";
import CreatorTabs from "../../../../components/CreatorTabs";

export const metadata = { title: "Live | Velvet House Agency" };

type Props = { params: { username: string } };

export default function LiveStudio({ params }: Props) {
  const name = params.username;

  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Live — {name}</h1>

      {/* Onglets navigation créatrice */}
      <CreatorTabs username={name} current="live" />

      <p style={{color:"#cfcfd6",marginBottom:20}}>
        Espace de diffusion en direct pour {name}. Nova reste dispo pour assister pendant le live ✨
      </p>

      <div style={{border:"1px solid #1f1f25",borderRadius:12,padding:20,marginBottom:20}}>
        <h2>Vidéo live</h2>
        <p style={{color:"#cfcfd6"}}>Zone prévue pour l’intégration du flux vidéo (LiveKit à brancher plus tard).</p>
      </div>

      <div style={{border:"1px solid #1f1f25",borderRadius:12,padding:20}}>
        <h2>Chat en direct</h2>
        <p style={{color:"#cfcfd6"}}>Zone pour les messages des viewers. La streameuse voit aussi Nova ici.</p>
      </div>

      {/* Nova intégrée dans le live studio */}
      <NovaChat />
    </main>
  );
}
