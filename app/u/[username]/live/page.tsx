'use client';

import CreatorTabs from "@/components/CreatorTabs";
import LivePlayer from "./components/LivePlayer";
import LiveGiftPanel from "./components/LiveGiftPanel";
import LiveChat from "./components/LiveChat";
import NovaAssistant from "./components/NovaAssistant";
import LiveGiftOverlay from "./components/LiveGiftOverlay"; // ✅ nouvelle intégration
import { useState } from "react";

type Props = {
  params: {
    username: string;
  };
};

export default function LivePage({ params }: Props) {
  const [lastGift, setLastGift] = useState<string | null>(null);

  const handleGiftSend = (giftName: string) => {
    setLastGift(giftName);
    // ⏱️ Réinitialise après 3.5 secondes
    setTimeout(() => setLastGift(null), 3500);
  };

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7", position: "relative" }}>
      <h1>Live — {params.username}</h1>
      <CreatorTabs username={params.username} current="live" />

      {/* 🔴 Lecteur vidéo */}
      <section style={{ marginTop: 24 }}>
        <LivePlayer />
      </section>

      {/* 🎁 Cadeaux */}
      <section style={{ marginTop: 32 }}>
        <h2 style={{ marginBottom: 12 }}>🎁 Send a Gift</h2>
        <LiveGiftPanel onSendGift={handleGiftSend} />
      </section>

      {/* 💬 Chat public */}
      <section style={{ marginTop: 32 }}>
        <LiveChat username={params.username} />
      </section>

      {/* 🤖 Nova Coach */}
      <section style={{ marginTop: 40 }}>
        <NovaAssistant username={params.username} />
      </section>

      {/* ✨ Overlay cadeau */}
      <LiveGiftOverlay giftName={lastGift} />
    </main>
  );
}
