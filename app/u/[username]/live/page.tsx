'use client';

import CreatorTabs from "@/components/CreatorTabs";
import LivePlayer from "../components/LivePlayer";
import LiveGiftPanel from "../components/LiveGiftPanel";
import LiveChat from "../components/LiveChat";
import NovaAssistant from "../components/NovaAssistant";

type Props = { params: { username: string } };

export default function LivePage({ params }: Props) {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7" }}>
      <h1>Live — {params.username}</h1>
      <CreatorTabs username={params.username} current="live" />

      <div style={{ marginTop: 24 }}>
        <LivePlayer />
      </div>

      <div style={{ marginTop: 24 }}>
        <h2 style={{ marginBottom: 12 }}>🎁 Send a Gift</h2>
        <LiveGiftPanel />
      </div>

      <div style={{ marginTop: 32 }}>
        <LiveChat />
      </div>

      <div style={{ marginTop: 40 }}>
        <NovaAssistant />
      </div>
    </main>
  );
}
