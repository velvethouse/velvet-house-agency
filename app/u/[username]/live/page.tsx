'use client';

import CreatorTabs from "@/components/CreatorTabs";
import LivePlayer from "../components/LivePlayer";
import LiveGiftPanel from "../components/LiveGiftPanel";
import LiveChat from "../components/LiveChat";
import NovaAssistant from "../components/NovaAssistant";

type Props = { params: { username: string } };

export default function LivePage({ params }: Props) {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "32px 20px",
        color: "#f5f5f7",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#FFD700" }}>
        🔴 Live — {params.username}
      </h1>

      <CreatorTabs username={params.username} current="live" />

      <section style={{ marginTop: 32 }}>
        <LivePlayer username={params.username} />
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ marginBottom: 12, color: "#FFD700", fontSize: "1.2rem" }}>
          🎁 Send a Gift
        </h2>
        <LiveGiftPanel username={params.username} />
      </section>

      <section style={{ marginTop: 40 }}>
        <LiveChat username={params.username} />
      </section>

      <section style={{ marginTop: 50 }}>
        <NovaAssistant username={params.username} />
      </section>
    </main>
  );
        }
