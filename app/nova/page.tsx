'use client';

import {useState} from 'react';

export const metadata = { title: "Nova | Velvet House Agency" };

type Msg = { from: 'user' | 'nova'; text: string };

export default function NovaPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { from: 'nova', text: "Hello Seb ✨ ici Nova. Pose ta question, je te réponds." }
  ]);
  const [input, setInput] = useState("");

  function send() {
    const text = input.trim();
    if (!text) return;
    const next = [...messages, { from: 'user', text }];
    // Réponse mock (on branchera l’API plus tard)
    const reply = autoReply(text);
    setMessages([...next, { from: 'nova', text: reply }]);
    setInput("");
  }

  function autoReply(q: string) {
    // mini FAQ provisoire
    const lower = q.toLowerCase();
    if (lower.includes("live")) return "Les lives seront listés sur /live. On branchera LiveKit bientôt.";
    if (lower.includes("vip")) return "Le VIP donne accès à des salons privés et avantages. Voir /vip.";
    if (lower.includes("gift") || lower.includes("cadeau")) return "Les gifts sont visibles sur /gifts. Paiement à venir via Stripe.";
    if (lower.includes("legal") || lower.includes("mentions") || lower.includes("cgu")) return "Les mentions légales sont sur /legal et les CGU sur /cgu.";
    return "Noté. Pour l’instant je suis en mode démo. On branchera l’API bientôt pour te répondre en temps réel.";
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send();
  }

  return (
    <main style={{maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color:"#f5f5f7"}}>
      <h1 style={{marginBottom: 8}}>Nova — Assistant intégré</h1>
      <p style={{color:"#cfcfd6", marginBottom: 20}}>
        Pose-moi tes questions sur le site, les pages, le VIP, les lives, etc. (version démo — backend à venir).
      </p>

      <div style={{display:"grid", gap: 12}}>
        <div style={{border:"1px solid #1f1f25", borderRadius: 12, padding: 16, minHeight: 260, background: "#0f0f15"}}>
          {messages.map((m, i) => (
            <div key={i} style={{
              display:"flex",
              justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 8
            }}>
              <div style={{
                maxWidth: "80%",
                padding: "10px 12px",
                borderRadius: 12,
                background: m.from === 'user' ? "#2a2a33" : "#171720",
                color: "#e7e7ee",
                border: "1px solid #272733",
                whiteSpace: "pre-wrap"
              }}>
                <b style={{opacity:.9}}>{m.from === 'user' ? "Toi" : "Nova"}</b><br/>
                <span>{m.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{display:"flex", gap: 8}}>
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Écris ici… (Entrée pour envoyer)"
            style={{
              flex:1, padding:"12px 14px", borderRadius:10, border:"1px solid #2a2a33",
              background:"#0f0f15", color:"#e7e7ee", outline:"none"
            }}
          />
          <button onClick={send} style={{padding:"12px 16px", borderRadius:10, border:"1px solid #2a2a33", background:"#8257e6", color:"#fff"}}>
            Envoyer
          </button>
        </div>
      </div>
    </main>
  );
              }
