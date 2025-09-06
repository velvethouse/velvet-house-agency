// app/dm/[username]/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import DmMedia from "@/components/DmMedia";

type Msg = {
  id: string;
  me?: boolean;
  text?: string;
  mediaUrl?: string;
  at: string;
};

export default function DmPage({ params }: { params: { username: string } }) {
  const to = params.username;
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: "m1", me: false, text: `Hi, it's ${to}. Welcome to my DM 💌`, at: new Date().toISOString() },
    { id: "m2", me: false, mediaUrl: "/hero.png", at: new Date().toISOString() },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  // TODO: real tier from session/auth
  const IS_VIP = true;
  const IS_GOLD = false;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMsgs((arr) => [...arr, { id: crypto.randomUUID(), me: true, text, at: new Date().toISOString() }]);
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
          DM with {to}
        </h1>
        <p style={{ margin: "6px 0 0", color: "#e9dfcf" }}>
          NSFW media here are pay-per-item. VIP → 3 days access. VIP Gold → lifetime (Library+). Purchases are always
          <b> silent</b> in DM.
        </p>
      </section>

      {/* Thread */}
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
            <div
              key={m.id}
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 10,
                justifyContent: m.me ? "flex-end" : "flex-start",
              }}
            >
              <div style={{ maxWidth: 260 }}>
                <div style={{ fontSize: 12, color: "#d7c9b3", textAlign: m.me ? "right" : "left" }}>
                  {new Date(m.at).toLocaleTimeString()}
                </div>

                {m.text && (
                  <div
                    className="card"
                    style={{
                      padding: 10,
                      borderRadius: 12,
                      background: m.me ? "rgba(212,175,55,.18)" : "rgba(0,0,0,.25)",
                      color: "#f5f5f5",
                    }}
                  >
                    {m.text}
                  </div>
                )}

                {m.mediaUrl && (
                  <div style={{ marginTop: 8 }}>
                    <DmMedia url={m.mediaUrl} price={1800} isGold={IS_GOLD} isVip={IS_VIP} />
                  </div>
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
              placeholder={`Message ${to}…`}
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
