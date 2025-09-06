// app/chat/public/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ChatMediaPublic from "@/components/ChatMediaPublic";
import ChatSettings from "@/components/ChatSettings";

/** ------------- Incognito helper (shared with profile/chat) ------------- */
const KEY_INCOG = "vh_incognito";
function isIncognitoOn(): boolean {
  if (typeof window === "undefined") return false;
  try { return localStorage.getItem(KEY_INCOG) === "1"; } catch { return false; }
}

/** ------------- Demo types & seed ------------- */
type Msg = {
  id: string;
  user: string;     // "You" pour l'utilisateur courant
  text?: string;
  mediaThumb?: string;
  at: string;
};

const DEMO: Msg[] = [
  { id: "m1", user: "Alice", text: "Welcome everyone ✨", at: new Date().toISOString() },
  { id: "m2", user: "Guest42", text: "Hello!", at: new Date().toISOString() },
  { id: "m3", user: "Alice", mediaThumb: "/hero.png", at: new Date().toISOString() }, // media → gated VIP
  { id: "m4", user: "Guest21", text: "How are you tonight?", at: new Date().toISOString() },
];

export default function PublicChatPage() {
  const [msgs, setMsgs] = useState<Msg[]>(DEMO);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  // Démo : utilisateur NON Gold dans le chat public
  const IS_GOLD = false;

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
          Public Chat (demo)
        </h1>
        <p style={{ margin: "6px 0 0", color: "#e9dfcf" }}>
          Media sent by the creator appear as <b>VIP-only</b> previews here. Click to see VIP plans.
        </p>
      </section>

      {/* Chat settings (incognito visible seulement si Gold - ici faux) */}
      <section style={{ maxWidth: 900, margin: "12px auto", padding: "0 16px" }}>
        <ChatSettings isGold={IS_GOLD} />
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
          {msgs.map((m) => {
            const incognito = isIncognitoOn();
            const isMe = m.user === "You";
            const displayName = isMe && incognito ? "Gold Member" : m.user;
            const avatarUrl = isMe && incognito ? "/icons/lotus-gold.svg" : null;

            return (
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
                    overflow: "hidden",
                  }}
                  title={displayName}
                >
                  {avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={avatarUrl} alt="Gold Member" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    displayName[0].toUpperCase()
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: "#d7c9b3" }}>
                    <b style={{ color: "#D4AF37" }}>{displayName}</b> · {new Date(m.at).toLocaleTimeString()}
                  </div>

                  {m.text && <div style={{ marginTop: 4 }}>{m.text}</div>}

                  {m.mediaThumb && (
                    <div style={{ marginTop: 8 }}>
                      <ChatMediaPublic thumbUrl={m.mediaThumb} label="Photo" from="chat-public" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
