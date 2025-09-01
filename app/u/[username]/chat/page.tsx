'use client';

import NovaChat from "../../../../components/NovaChat";
import CreatorTabs from "../../../../components/CreatorTabs";

export const metadata = { title: "Chat privé | Velvet House Agency" };

type Props = { params: { username: string } };

export default function PrivateChat({ params }: Props) {
  const name = params.username;

  return (
    <main style={{maxWidth:1100,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Chat privé — {name}</h1>

      {/* Onglets navigation créatrice */}
      <CreatorTabs username={name} current="chat" />

      <p style={{color:"#cfcfd6",marginBottom:20}}>
        Espace de discussion réservé à la streameuse (pré-modération, notes, réponses rapides). Nova est dispo pour assister ✨
      </p>

      <div style={{display:"grid",gap:16,gridTemplateColumns:"1fr",marginTop:8}}>
        <section style={{border:"1px solid #1f1f25",borderRadius:12,padding:16}}>
          <h2 style={{marginTop:0}}>Fil des messages</h2>
          <p style={{color:"#cfcfd6"}}>Ici on branchera le vrai chat (modération, filtres, accès VIP).</p>
        </section>

        <section style={{border:"1px solid #1f1f25",borderRadius:12,padding:16}}>
          <h2 style={{marginTop:0}}>Notes rapides</h2>
          <ul style={{color:"#cfcfd6",lineHeight:1.6}}>
            <li>Raccourcis de réponses</li>
            <li>Liste VIP du jour</li>
            <li>Règles de modération</li>
          </ul>
        </section>
      </div>

      {/* Nova visible dans le chat privé */}
      <NovaChat />
    </main>
  );
}
