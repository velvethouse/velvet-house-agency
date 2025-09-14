'use client';

import { useState } from "react";
import GoalWidget from "../components/GoalWidget";
import StudioGallery from "../components/StudioGallery";
import StatsPerformance from "../components/StatsPerformance";
import NovaStudioCoach from "@/components/studio/NovaStudioCoach";

type Photo = {
  id: string;
  src: string;
  nsfw: boolean;
  gift?: string | null;
};

export default function StreamerStudioPage() {
  const [agreed, setAgreed] = useState(false);

  // 🔗 À connecter à ta DB plus tard
  const photos: Photo[] = [];

  if (!agreed) {
    return (
      <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ color: "#D4AF37" }}>📋 Studio Rules & Conditions</h1>
        <p>
          Welcome to your professional page. Velvet House is a premium platform
          for streamers and content creators. Before accessing your studio,
          please make sure you agree with the following rules:
        </p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>No explicit nudity or illegal content</li>
          <li>Respect others and yourself</li>
          <li>Gifts are your only unlock trigger</li>
          <li>VIP and VIP Gold are managed by admins only</li>
          <li>You are free to create and earn at your rhythm</li>
        </ul>
        <p style={{ marginTop: 16, fontWeight: 600, color: "#f8d7a0" }}>
          Any violation may result in a ban or removal from the platform.
        </p>

        <button
          className="btn3d btn3d--gold"
          style={{ marginTop: 28 }}
          onClick={() => setAgreed(true)}
        >
          I understand and want to enter my studio
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ color: "#D4AF37" }}>🎥 Your Studio Dashboard</h1>
      <p>
        Welcome back! You can manage your schedule, go live, and track your
        earnings here.
      </p>

      <div
        style={{
          background: "rgba(0,0,0,0.25)",
          padding: 16,
          borderRadius: 12,
          marginTop: 20,
          border: "1px solid rgba(212,175,55,0.35)",
        }}
      >
        <ul style={{ lineHeight: 2 }}>
          <li>📅 Schedule your live sessions</li>
          <li>🎁 View your received gifts</li>
          <li>💰 Track your Lotus balance</li>
          <li>🔐 Apply for VIP or Gold status</li>
        </ul>
      </div>

      {/* 🎯 Objectif Lotus pendant le live */}
      <GoalWidget lotusEarned={0} goal={100000} frequency="weekly" />

      {/* 🖼️ Galerie privée de la streameuse */}
      <StudioGallery
        photos={photos}
        onToggleNSFW={(id) => console.log("Toggle NSFW", id)}
        onAssignGift={(id, gift) => console.log("Assign gift", gift, "to", id)}
      />

      {/* 📊 Performances Lotus */}
      <StatsPerformance />

      {/* 🧠 Nova Coach IA */}
      <div style={{ marginTop: 40 }}>
        <NovaStudioCoach />
      </div>
    </main>
  );
}
