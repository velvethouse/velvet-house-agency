'use client';

import { useEffect, useMemo, useState } from "react";

type Frequency = "daily" | "weekly";

type Props = {
  lotusEarned?: number;
  goal?: number;
  frequency: Frequency;
};

export default function GoalWidget({
  lotusEarned = 0,
  goal = 100000,
  frequency,
}: Props) {
  const [progress, setProgress] = useState(0);
  const [celebrated, setCelebrated] = useState(false);

  const ratio = useMemo(() => {
    if (goal <= 0) return 0;
    return Math.min(1, lotusEarned / goal);
  }, [lotusEarned, goal]);

  useEffect(() => {
    setProgress(ratio);
    if (ratio >= 1 && !celebrated) {
      localStorage.setItem("goalCelebrationShown", "1");
      setCelebrated(true);
    }
  }, [ratio, celebrated]);

  return (
    <section style={{ marginTop: 24 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 10 }}>
        🎯 {frequency === "daily" ? "Daily Goal" : "Weekly Goal"}
      </h2>

      <div
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid rgba(212,175,55,0.35)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <div style={{ marginBottom: 8, color: "#f5f5f5" }}>
          {lotusEarned.toLocaleString()} / {goal.toLocaleString()} Lotus
        </div>

        <div
          style={{
            height: 10,
            borderRadius: 999,
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              width: `${ratio * 100}%`,
              height: "100%",
              background: "linear-gradient(to right, #D4AF37, #fff2c7)",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {ratio >= 1 && (
          <div
            style={{
              color: "#FFD700",
              background: "rgba(255,255,255,0.05)",
              padding: 8,
              borderRadius: 8,
              fontWeight: "bold",
            }}
          >
            🎉 Congratulations! You've reached your goal and earned +2% Lotus!
          </div>
        )}
      </div>
    </section>
  );
}
