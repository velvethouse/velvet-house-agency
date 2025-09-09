"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  lotusEarned?: number;
  goal?: number;
};

export default function GoalWidget({ lotusEarned, goal }: Props) {
  const [localProgress, setLocalProgress] = useState(0);
  const [localGoal, setLocalGoal] = useState(20000);

  // Load fallback from localStorage if no props
  useEffect(() => {
    if (!lotusEarned) {
      const saved = localStorage.getItem("lotusProgress");
      if (saved) setLocalProgress(Number(saved));
    }
    if (!goal) {
      const savedGoal = localStorage.getItem("lotusGoal");
      if (savedGoal) setLocalGoal(Number(savedGoal));
    }
  }, [lotusEarned, goal]);

  const progress = lotusEarned ?? localProgress;
  const target = goal ?? localGoal;

  const ratio = useMemo(() => {
    if (target <= 0) return 0;
    return Math.min(1, progress / target);
  }, [progress, target]);

  const completed = ratio >= 1;

  return (
    <section style={{ marginTop: 24 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 10 }}>🎯 Weekly Goal</h2>

      <div
        className="card"
        style={{
          padding: 14,
          display: "grid",
          gap: 12,
          background: "rgba(0,0,0,.25)",
          border: "1px solid rgba(212,175,55,.35)",
          borderRadius: 12,
        }}
      >
        <div style={{ fontWeight: 700, color: "#FFD700" }}>
          {progress.toLocaleString()} / {target.toLocaleString()} Lotus
        </div>

        <div
          style={{
            height: 10,
            borderRadius: 999,
            background: "rgba(255,255,255,.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${ratio * 100}%`,
              background: "linear-gradient(90deg,#D4AF37,#f6dd9d)",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {completed && (
          <div
            style={{
              padding: 10,
              borderRadius: 12,
              border: "1px dashed rgba(212,175,55,.55)",
              background: "rgba(212,175,55,.1)",
              color: "#e9dfcf",
              fontWeight: 600,
              marginTop: 8,
            }}
          >
            🎉 Goal achieved! Velvet House rewards you with +2% bonus Lotus!
          </div>
        )}
      </div>
    </section>
  );
}
