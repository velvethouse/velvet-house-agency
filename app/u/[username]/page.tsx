"use client";

import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";
import QrInvite from "./components/QrInvite";
import GoalWidget from "./components/GoalWidget";
import NovaAssistant from "./components/NovaAssistant";
import GalleryBlock from "./components/GalleryBlock";

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

      {/* Objective (daily/weekly + bonus +2%) */}
      <GoalWidget />

      {/* Nova copilot */}
      <NovaAssistant username={username} />

      {/* QR individual invite */}
      <QrInvite username={username} />

      {/* 📷 Galerie de la streameuse */}
      <GalleryBlock />
    </main>
  );
}
