// app/chat/vip/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ChatMediaVip from "@/components/ChatMediaVip";
import ChatSettings from "@/components/ChatSettings";

/** ------------- Incognito helper ------------- */
const KEY_INCOG = "vh_incognito";
function isIncognitoOn(): boolean {
  if (typeof window === "undefined") return false;
  try { return localStorage.getItem(KEY_INCOG) === "1"; } catch { return false; }
}

/** ------------- Demo data ------------- */
type Msg = {
  id: string;
  user: string;           // "You" pour l'utilisateur
  text?: string;
  mediaUrl?: string;
  at: string;
  system?: string;        // message système (achat VIP visible)
};

const DEMO: Msg[] = [
  { id: "m1", user: "Alice", text: "Welcome to my VIP chat 💫", at: new Date().toISOString() },
  { id: "m2", user: "Alice", mediaUrl: "/hero.png", at: new Date().toISOString() },
];

export default function VipChatPage() {
  const [msgs, setMsgs] = useState<Msg[]>(DEMO);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  // TODO: brancher vrais rôles depuis la session/auth
  const IS_VIP = true;
  const IS_GOLD = false; // mets true pour tester le mode Gold + incognito

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

  /** Démo : simule un “achat” via message système
      - VIP normal -> message visible
      - Gold -> achat silencieux (pas de message système ajouté)
   */
  function simulatePurchase() {
    if (!IS_VIP && !IS_GOLD) return;
    const isIncog = isIncognitoOn();
    // achat : si Gold => silent, si VIP => visible système
    if (IS_GOLD) {
      // silent: on n'ajoute pas de message système
      alert("Purchase simulated (Gold): silent.");
    } else {
      const displayName = isIncog ? "Gold Member" : "You";
      const sys: Msg = {
        id: crypto.randomUUID(),
        user: "system",
        system: `💎 ${displayName} unlocked a media`,
        at: new Date().toISOString(),
      };
      setMsgs((arr) => [...arr, sys]);
    }
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
          Unlock media with Lotus. VIP → 3 days access, Gold → lifetime (Library+). Purchases: visible for VIP, silent for Gold.
        </p>
      </section>

      {/* Chat settings (incognito visible si Gold) */}
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
            const displayName =
              isMe && incognito ? "Gold Member" : m.user === "system" ? "System" : m.user;
            const avatarUrl = isMe && incognito ? "/icons/lotus-gold.svg" : null;

            return (
              <div key={m.id} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: m.user === "system" ? "rgba(46,204,113,.25)" : "rgba(0,0,0,.3)",
                    border: "1px solid rgba(212,175,55,.25)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                    color: "#d7c9b3",
                    overflow: "hidden",
                  }}
                  title={displayName}
                >
                  {m.user === "system" ? "S" : avatarUrl ? (
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

                  {m.mediaUrl && (
                    <div style={{ marginTop: 8 }}>
                      <ChatMediaVip url={m.mediaUrl} price={1500} isGold={IS_GOLD} isVip={IS_VIP} />
                      <div className="btn-row-2" style={{ marginTop: 8 }}>
                        <button className="btn3d btn3d--velvet" onClick={simulatePurchase}>
                          Simulate purchase (demo)
                        </button>
                      </div>
                    </div>
                  )}

                  {m.system && (
                    <div style={{ marginTop: 4, fontSize: 12, color: "#D4AF37" }}>{m.system}</div>
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
