'use client';

import NovaChat from "../../../../components/NovaChat";
import CreatorTabs from "../../../../components/CreatorTabs";

type Props = { params: { username: string } };

export default function StudioPage({ params }: Props) {
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Studio — {params.username}</h1>
      <CreatorTabs username={params.username} current="studio"/>
      <p>Prépare ton live ici. Nova est dispo pour t’aider ✨</p>
      <NovaChat/>
    </main>
  );
}
