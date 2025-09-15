"use client";

import { useState } from "react";
import GoalWidget from "../components/GoalWidget";
import StudioGallery from "../components/StudioGallery";
import NovaStudioCoach from "@/components/studio/NovaStudioCoach";
import StatsPerformance from "../components/StatsPerformance";

type Props = {
  params: {
    username: string;
  };
};

export default function StreamerStudioPage({ params }: Props) {
  const username = params.username;

  const [agreed, setAgreed] = useState(false);
  const [allowBattle, setAllowBattle] = useState(false);
  const [battleFrequency, setBattleFrequency] = useState(1);

  const toggleAllowBattle = () => setAllowBattle(!allowBattle);

  const photos = []; // Future DB connection
  const onToggleNSFW = (id: number) => {};
  const onAssignGift = (id: number, gift: string) => {};

  if (!agreed) {
    return (
      <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ color: "#D4AF37" }}>📋 Studio Rules & Conditions</h1>
        <p>
          Before accessing your studio, please confirm the following rules:
        </p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>No explicit nudity or illegal content</li>
          <li>Respect others and yourself</li>
          <li>Gifts are your only unlock method</li>
          <li>VIP and Gold status managed by admin</li>
          <li>You are free to create at your rhythm</li>
        </ul>
        <p style={{ marginTop: 16, fontWeight: 600, color: "#f8d7a0" }}>
          Any violation may lead to a ban or account removal.
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
      <h1 style={{ color: "#D4AF37" }}>🎥 Studio Dashboard</h1>
      <p>
        Manage your schedule, go live, track your earnings, and adjust your battle preferences.
      </p>

      {/* 🖼️ Gallery */}
      <StudioGallery photos={photos} onToggleNSFW={onToggleNSFW} onAssignGift={onAssignGift} />

      {/* 🎯 Weekly Goal */}
      <GoalWidget lotusEarned={216000} goal={500000} frequency="weekly" />

      {/* 📊 Lotus stats */}
      <StatsPerformance />

      {/* ⚔️ Battle frequency settings */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#FFD700", marginBottom: 12 }}>⚔️ Battle Frequency</h2>

        <label style={{ display: "block", marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={allowBattle}
            onChange={toggleAllowBattle}
          />{" "}
          Allow battles
        </label>

        {allowBattle && (
          <>
            <label style={{ display: "block", marginTop: 12 }}>
              Desired frequency (per hour):
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
              You can adjust this at any time if you feel it's affecting your audience.
            </p>
          </>
        )}
      </section>

      {/* 🧠 Nova assistant */}
      <div style={{ marginTop: 40 }}>
        <NovaStudioCoach />
      </div>
    </main>
  );
}
