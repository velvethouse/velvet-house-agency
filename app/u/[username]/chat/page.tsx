'use client';

import CreatorTabs from "@/components/CreatorTabs";
import PhotoGiftUnlock from "../components/PhotoGiftUnlock";
import NovaChat from "@/components/NovaChat";
import NovaAssistant from "../components/NovaAssistant";

type Props = { params: { username: string } };

export default function ChatPage({ params }: Props) {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7" }}>
      <h1>Chat privé — {params.username}</h1>
      <CreatorTabs username={params.username} current="chat" />
      <p>Espace de chat privé avec la streameuse. Nova est là pour t’accompagner ✨</p>

      <div style={{ marginTop: 24 }}>
        <PhotoGiftUnlock src="/example-photo.jpg" />
      </div>

      <div style={{ marginTop: 40 }}>
        <NovaChat />
      </div>

      <div style={{ marginTop: 40 }}>
        <NovaAssistant />
      </div>
    </main>
  );
}
