"use client";

import { useState } from "react";
import GoalWidget from "../components/GoalWidget";
import StudioGallery from "../components/StudioGallery";
import NovaStudioCoach from "@/components/studio/NovaStudioCoach";
import StatsPerformance from "../components/StatsPerformance";

export default function StreamerStudioPage() {
  const [agreed, setAgreed] = useState(false);
  const [allowBattle, setAllowBattle] = useState(true);
  const [battleFrequency, setBattleFrequency] = useState(3);

  const toggleAllowBattle = () => setAllowBattle(!allowBattle);

  const photos: any[] = []; // Future DB
  const onToggleNSFW = (id: string | number) => {};
  const onAssignGift = (id: string | number, gift: string) => {};

  if (!agreed) {
    return (
      <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ color: "#D4AF37" }}>📋 Studio Rules & Conditions</h1>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>No nudity or illegal content</li>
          <li>Respect yourself and others</li>
          <li>Only gifts unlock content</li>
          <li>VIP/Gold are admin-managed</li>
          <li>Work at your own pace</li>
        </ul>
        <p style={{ marginTop: 16, fontWeight: 600, color: "#f8d7a0" }}>
          Violations can lead to ban or removal.
        </p>
        <button
          className="btn3d btn3d--gold"
          onClick={() => setAgreed(true)}
          style={{ marginTop: 24 }}
        >
          I understand and accept
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ color: "#D4AF37" }}>🎥 Your Studio</h1>
      <p>Welcome! You can manage your profile and stream settings here.</p>

      {/* 🧠 Nova Coach */}
      <div style={{ marginTop: 32 }}>
        <NovaStudioCoach />
      </div>

      {/* ⚔️ Battle settings */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#FFD700", marginBottom: 12 }}>⚔️ Battle Frequency</h2>

        <label style={{ display: "block", marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={allowBattle}
            onChange={toggleAllowBattle}
          />
          Allow Battles
        </label>

        {allowBattle && (
          <>
            <label style={{ display: "block", marginTop: 12 }}>
              Battle frequency per hour:
              <select
                value={battleFrequency}
                onChange={(e) => setBattleFrequency(parseInt(e.target.value))}
                style={{
                  marginTop: 8,
                  padding: 8,
                  borderRadius: 6,
                  border: "1px solid #aaa",
                  background: "#1c1c1c",
                  color: "#fff",
                }}
              >
                <option value={1}>1 battle/h</option>
                <option value={2}>2 battles/h</option>
                <option value={3}>3 battles/h</option>
                <option value={4}>4 battles/h</option>
                <option value={5}>5 battles/h</option>
                <option value={10}>10 battles/h</option>
                <option value={15}>15 battles/h (max)</option>
              </select>
            </label>
            <p style={{ fontSize: 13, color: "#aaa", marginTop: 10 }}>
              You can adjust this anytime if viewers drop.
            </p>
          </>
        )}
      </section>

      {/* 🖼️ Gallery */}
      <StudioGallery
        photos={photos}
        onToggleNSFW={onToggleNSFW}
        onAssignGift={onAssignGift}
      />

      {/* 🎯 Weekly Goal */}
      <GoalWidget lotusEarned={216000} goal={500000} frequency="weekly" />

      {/* 📊 Stats */}
      <StatsPerformance />
    </main>
  );
}
