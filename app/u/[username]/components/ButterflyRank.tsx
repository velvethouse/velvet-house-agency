// app/u/[username]/components/ButterflyRank.tsx
"use client";
import { useEffect, useState } from "react";

export default function ButterflyRank({ lotusEarned }: { lotusEarned: number }) {
  const [rank, setRank] = useState({
    name: "Cristalline",
    emoji: "🐛",
    next: "Butterfly",
    required: 10000,
    commission: "60%",
  });

  useEffect(() => {
    if (lotusEarned >= 1_000_000) {
      setRank({ name: "Fire Butterfly", emoji: "🔥🦋", next: null, required: 0, commission: "65%" });
    } else if (lotusEarned >= 200_000) {
      setRank({ name: "Golden Butterfly", emoji: "💛🦋", next: "Fire Butterfly", required: 1_000_000, commission: "63%" });
    } else if (lotusEarned >= 10_000) {
      setRank({ name: "Butterfly", emoji: "🦋", next: "Golden Butterfly", required: 200_000, commission: "61%" });
    }
  }, [lotusEarned]);

  return (
    <div
      style={{
        border: "1px solid rgba(212,175,55,0.25)",
        padding: 16,
        borderRadius: 12,
        background: "rgba(255,255,255,0.03)",
        marginBottom: 24,
      }}
    >
      <h2 style={{ marginBottom: 12 }}>
        {rank.emoji} Your Rank: <span className="gold-gradient-text">{rank.name}</span>
      </h2>
      <p style={{ marginBottom: 4 }}>
        Total earned: <strong>{lotusEarned.toLocaleString()} Lotus</strong>
      </p>
      <p style={{ marginBottom: 4 }}>
        Commission: <strong>{rank.commission}</strong>
      </p>
      {rank.next && (
        <p style={{ fontSize: 13, color: "#d7c9b3", opacity: 0.9 }}>
          Earn <strong>{(rank.required - lotusEarned).toLocaleString()} Lotus</strong> more to reach <strong>{rank.next}</strong>
        </p>
      )}
    </div>
  );
}
