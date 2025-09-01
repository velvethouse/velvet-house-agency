'use client';

import NovaChat from "../../../../components/NovaChat";
import CreatorTabs from "../../../../components/CreatorTabs";

type Props = { params: { username: string } };

export default function ChatPage({ params }: Props) {
  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Chat privé — {params.username}</h1>
      <CreatorTabs username={params.username} current="chat"/>
      <p>Espace de chat privé pour la créatrice. Nova est dispo ici aussi ✨</p>
      <NovaChat/>
    </main>
  );
}
