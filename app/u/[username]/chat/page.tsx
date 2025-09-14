'use client';

import { useState } from "react";
import CreatorTabs from "../../../../components/CreatorTabs";
import PhotoGiftUnlock from "../../../../components/PhotoGiftUnlock";
import NovaAssistant from "@/components/NovaAssistant";

type Props = { params: { username: string } };

export default function ChatPage({ params }: Props) {
  const [messages, setMessages] = useState([
    { id: 1, from: "streamer", type: "text", content: "Hey love 😘 wanna see something?" },
    { id: 2, from: "streamer", type: "photo", content: "/media/private1.jpg", locked: true },
    { id: 3, from: "follower", type: "text", content: "Yes 😍" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: "follower", type: "text", content: input }]);
    setInput("");
  };

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7" }}>
      <h1>💬 Chat privé — {params.username}</h1>
      <CreatorTabs username={params.username} current="chat" />

      <div
        style={{
          background: "#1a1a1a",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 12,
          padding: 16,
          marginTop: 24,
          minHeight: 300,
        }}
      >
        {messages.map((msg) => (
          <div key={msg.id} style={{ textAlign: msg.from === "follower" ? "right" : "left", marginBottom: 12 }}>
            {msg.type === "text" && (
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  background: msg.from === "follower" ? "#FFD700" : "#333",
                  color: msg.from === "follower" ? "#000" : "#fff",
                  borderRadius: 14,
                  fontSize: 14,
                  maxWidth: "80%",
                }}
              >
                {msg.content}
              </div>
            )}

            {msg.type === "photo" && msg.locked && (
              <PhotoGiftUnlock src={msg.content} />
            )}

            {msg.type === "photo" && !msg.locked && (
              <img
                src={msg.content}
                alt="Private"
                style={{
                  maxWidth: "100%",
                  borderRadius: 10,
                  marginTop: 6,
                  border: "2px solid #FFD700",
                }}
              />
            )}
          </div>
        ))}

        {/* Champ d'envoi */}
        <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #333",
              background: "#111",
              color: "#fff",
            }}
          />
          <button
            onClick={sendMessage}
            className="btn3d btn3d--gold"
            style={{ padding: "10px 16px" }}
          >
            Send
          </button>
        </div>
      </div>

      {/* Nova IA */}
      <div style={{ marginTop: 40 }}>
        <NovaAssistant />
      </div>
    </main>
  );
}
