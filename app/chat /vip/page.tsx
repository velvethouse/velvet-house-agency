// app/chat/vip/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ChatMediaVip from "@/components/ChatMediaVip";

type Msg = {
  id: string;
  user: string;
  text?: string;
  mediaUrl?: string;
  at: string;
  system?: string; // message système (ex: achat VIP)
};

const DEMO: Msg[] = [
  { id: "m1", user: "Alice", text: "Welcome to my VIP chat 💫", at: new Date().toISOString() },
  { id: "m2", user: "Alice", mediaUrl: "/hero.png", at: new Date().toISOString() },
];

export default function VipChatPage() {
  const [msgs, setMsgs] = useState<Msg[]>(DEMO);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  // TODO: brancher vrai rôle user
  const IS_GOLD = false; // toggle démo
  const IS_VIP = true;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs]);

  function send() {
    const text = input.trim();
    if (!text) return;
    const m: Msg = { id: crypto.randomUUID(), user: "You", text, at: new Date().toISOString() };
    setMsgs((arr) => [...arr, m]);
    setInput("");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui,"Segoe UI",Roboto,Arial,sans-serif',
      }}
    >
      {/* Header */}
      <section style={{ maxWidth: 900, margin: "18px auto 10px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(22px,5.5vw,34px)", margin: 0 }}>
          VIP Chat (demo)
        </h1>
        <p style={{ margin: "6px 0 0", color: "#e9dfcf" }}>
          Unlock media with Lotus. VIP → 3 days access, Gold → lifetime (Library+).<br />
          Purchases: visible for VIP, silent for Gold.
        </p>
      </section>

      {/* Chat box */}
      <section
        style={{
          maxWidth: 900,
          margin: "10px auto 0",
          padding: "0 16px",
          display: "grid",
          gap: 12,
          gridTemplateRows: "1fr auto",
          height: "70vh",
        }}
      >
        {/* Messages */}
        <div
          className="card"
          style={{
            padding: 12,
            overflowY: "auto",
            borderRadius: 16,
            background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
          }}
        >
          {msgs.map((m) => (
            <div key={m.id} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,.3)",
                  border: "1px solid rgba(212,175,55,.25)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 12,
                  color: "#d7c9b3",
                }}
                title={m.user}
              >
                {m.user[0].toUpperCase()}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "#d7c9b3" }}>
                  <b style={{ color: "#D4AF37" }}>{m.user}</b> · {new Date(m.at).toLocaleTimeString()}
                </div>

                {m.text && <div style={{ marginTop: 4 }}>{m.text}</div>}

                {m.mediaUrl && (
                  <div style={{ marginTop: 8 }}>
                    <ChatMediaVip url={m.mediaUrl} price={1500} isGold={IS_GOLD} isVip={IS_VIP} />
                  </div>
                )}

                {m.system && (
                  <div style={{ marginTop: 4, fontSize: 12, color: "#D4AF37" }}>{m.system}</div>
                )}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="card" style={{ padding: 10, borderRadius: 16 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              className="input-velvet"
              placeholder="Write a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button className="btn3d btn3d--gold" onClick={send}>Send</button>
          </div>
        </div>
      </section>
    </main>
  );
}
