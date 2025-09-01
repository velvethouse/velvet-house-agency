'use client';

import {useState} from 'react';

export default function NovaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{from:'user'|'nova';text:string}[]>([
    { from: 'nova', text: "Hello ✨ Je suis Nova, clique et pose ta question." }
  ]);
  const [input, setInput] = useState("");

  function send() {
    const text = input.trim();
    if (!text) return;
    const reply = autoReply(text);
    setMessages([...messages, {from:'user', text}, {from:'nova', text:reply}]);
    setInput("");
  }

  function autoReply(q:string) {
    const lower = q.toLowerCase();
    if (lower.includes("live")) return "Les lives seront listés sur /live.";
    if (lower.includes("vip")) return "Le VIP donne accès à des salons privés et avantages.";
    if (lower.includes("gift") || lower.includes("cadeau")) return "Les gifts sont visibles sur /gifts.";
    if (lower.includes("legal") || lower.includes("cgu")) return "Les mentions légales sont sur /legal et les CGU sur /cgu.";
    return "Mode démo activé. Réponse API à venir.";
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send();
  }

  return (
    <>
      {/* Bulle flottante */}
      <button
        onClick={()=>setOpen(!open)}
        style={{
          position:"fixed", right:20, bottom:20, borderRadius:"50%",
          width:56, height:56, border:"none", background:"#8257e6",
          color:"#fff", fontSize:24, cursor:"pointer", zIndex:50
        }}
      >
        💬
      </button>

      {open && (
        <div style={{
          position:"fixed", right:20, bottom:90, width:320, height:400,
          border:"1px solid #2a2a33", borderRadius:12, background:"#0f0f15",
          display:"flex", flexDirection:"column", zIndex:50
        }}>
          <div style={{flex:1, padding:12, overflowY:"auto"}}>
            {messages.map((m,i)=>(
              <div key={i} style={{
                display:"flex",
                justifyContent:m.from==="user" ? "flex-end":"flex-start",
                marginBottom:6
              }}>
                <div style={{
                  padding:"8px 12px", borderRadius:10,
                  background:m.from==="user"?"#2a2a33":"#171720",
                  border:"1px solid #272733", color:"#e7e7ee", maxWidth:"80%"
                }}>
                  <b>{m.from==="user"?"Toi":"Nova"}</b><br/>{m.text}
                </div>
              </div>
            ))}
          </div>
          <div style={{display:"flex", gap:6, padding:8, borderTop:"1px solid #2a2a33"}}>
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Écris ici…"
              style={{flex:1, padding:"8px 10px", borderRadius:8, border:"1px solid #2a2a33", background:"#0f0f15", color:"#fff"}}
            />
            <button onClick={send} style={{padding:"8px 12px", borderRadius:8, border:"1px solid #2a2a33", background:"#8257e6", color:"#fff"}}>
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
