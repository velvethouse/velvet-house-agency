'use client';

import { useState } from "react";

type Msg = { from: 'user' | 'nova'; text: string };

export default function NovaPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { from: 'nova', text: "Hello ✨ Je suis Nova. Pose ta question !" }
  ]);
  const [input, setInput] = useState("");

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages([...messages, { from:'user', text }, { from:'nova', text:"(démo) Réponse à : "+text }]);
    setInput("");
  }

  return (
    <main style={{maxWidth:900,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Nova — Assistant intégré</h1>
      <div style={{border:"1px solid #333",padding:16,borderRadius:8,minHeight:200,marginBottom:12}}>
        {messages.map((m,i)=>(
          <div key={i} style={{margin:"6px 0",textAlign:m.from==="user"?"right":"left"}}>
            <b>{m.from==="user"?"Toi":"Nova"} :</b> {m.text}
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:8}}>
        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          style={{flex:1,padding:"10px",borderRadius:8,border:"1px solid #444"}}
        />
        <button onClick={send} style={{padding:"10px 16px",borderRadius:8,background:"#d4a437",color:"#2c0d0d",fontWeight:600}}>
          Envoyer
        </button>
      </div>
    </main>
  );
}
