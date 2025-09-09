"use client";

import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";
import QrInvite from "./components/QrInvite";
import GoalWidget from "./components/GoalWidget";
import NovaAssistant from "./components/NovaAssistant";
import GalleryBlock from "./components/GalleryBlock";
import EventNotice from "./components/EventNotice";

export default function CreatorProfile({ params }: { params: { username: string } }) {
  const username = params.username;
  const lotusEarned = 216000; // mock
  const isVip = false;        // mock
  const isLocked = false;     // 🔓 default open

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      {/* Header */}
      <h1 style={{ fontSize: "28px", marginBottom: 12 }}>
        🦋 Welcome to {username}'s <br />
        <span style={{ color: "#D4AF37" }}>Creator Profile</span>
      </h1>

      {/* Rank + access notice */}
      <ButterflyRank lotusEarned={lotusEarned} />
      <StreamAccessNotice isLocked={isLocked} isVip={isVip} />

      {/* 🎯 Objectif Lotus */}
      <GoalWidget />

      {/* 🔔 Streameuse Event */}
      <EventNotice />

      {/* 🤖 Nova */}
      <NovaAssistant username={username} />

      {/* 📲 QR Invite */}
      <QrInvite username={username} />

      {/* 🖼️ Galerie publique */}
      <GalleryBlock />
    </main>
  );
}
