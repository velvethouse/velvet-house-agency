"use client";

import { useState } from "react";
import GoalWidget from "./components/GoalWidget";
import StudioGallery from "./components/StudioGallery";
import StudioSchedule from "./components/StudioSchedule";
import StudioStats from "./components/StudioStats";
import GoLiveButton from "./components/GoLiveButton";

export default function StudioPage() {
  const [agreed, setAgreed] = useState(false);
  const lotusEarned = 216000; // mock

  if (!agreed) {
    return (
      <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ color: "#D4AF37" }}>📋 Studio Rules & Conditions</h1>
        <p>
          Welcome to your private dashboard. Please review the following rules
          before accessing your studio:
        </p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>No nudity or illegal content in public</li>
          <li>Respect others and yourself</li>
          <li>Only send content that you have rights to</li>
          <li>Content flagged as NSFW will be reviewed</li>
        </ul>
        <button
          className="btn3d btn3d--gold"
          style={{ marginTop: 20 }}
          onClick={() => setAgreed(true)}
        >
          I understand and want to access my studio
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ color: "#D4AF37", marginBottom: 16 }}>
        🎥 Live Studio Dashboard
      </h1>

      {/* 📊 Stats streameuse */}
      <StudioStats lotusEarned={lotusEarned} />

      {/* 🎯 Objectif Lotus */}
      <GoalWidget />

      {/* 🖼️ Galerie privée */}
      <StudioGallery />

      {/* 📅 Planning des lives */}
      <StudioSchedule />

      {/* 🎥 Go Live */}
      <GoLiveButton username="testgirl" />
    </main>
  );
}
