'use client';

import CreatorTabs from "@/components/CreatorTabs";
import PhotoGiftUnlock from "../components/PhotoGiftUnlock";
import NovaAssistant from "../components/NovaAssistant";

type Props = { params: { username: string } };

export default function ChatPage({ params }: Props) {
  // 🚨 À brancher plus tard : tableau de photos (mock vide pour l’instant)
  const photos: {
    id: string;
    url: string;
    unlocked: boolean;
  }[] = [];

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7" }}>
      <h1>Chat privé — {params.username}</h1>
      <CreatorTabs username={params.username} current="chat" />
      <p>Espace de chat privé avec la streameuse. Nova est là pour t’accompagner ✨</p>

      <div style={{ marginTop: 24 }}>
        {photos.length === 0 ? (
          <p style={{ fontSize: 14, color: "#999" }}>No private media yet. Upload to activate unlockables.</p>
        ) : (
          photos.map((photo) => (
            <PhotoGiftUnlock
              key={photo.id}
              src={photo.url}
              isUnlocked={photo.unlocked}
              onUnlock={() => console.log("Trigger gift unlock for photo:", photo.id)}
            />
          ))
        )}
      </div>

      <div style={{ marginTop: 40 }}>
        <NovaAssistant />
      </div>
    </main>
  );
}
