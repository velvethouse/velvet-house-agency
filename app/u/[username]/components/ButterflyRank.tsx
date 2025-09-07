"use client";

import { useEffect, useState } from "react";

type Rank = {
  name: string;
  emoji: string;
  next: string;
  required: number;
  commission: string;
};

export default function ButterflyRank({ lotusEarned }: { lotusEarned: number }) {
  const [rank, setRank] = useState<Rank | null>(null);

  useEffect(() => {
    if (lotusEarned >= 1_000_000) {
      setRank({
        name: "Fire Butterfly",
        emoji: "🔥🦋",
        next: "",
        required: 0,
        commission: "65%",
      });
    } else if (lotusEarned >= 200_000) {
      setRank({
        name: "Golden Butterfly",
        emoji: "💛🦋",
        next: "Fire Butterfly",
        required: 1_000_000,
        commission: "63%",
      });
    } else if (lotusEarned >= 10_000) {
      setRank({
        name: "Butterfly",
        emoji: "🦋",
        next: "Golden Butterfly",
        required: 200_000,
        commission: "61%",
      });
    } else {
      setRank({
        name: "Cristalline",
        emoji: "🐛",
        next: "Butterfly",
        required: 10_000,
        commission: "60%",
      });
    }
  }, [lotusEarned]);

  if (!rank) return null;

  return (
    <div style={{ padding: 20, background: "#3d0e0e", borderRadius: 12 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 8 }}>
        {rank.emoji} {rank.name}
      </h2>
      <p style={{ margin: 0, color: "#f5f5f5" }}>
        Total Lotus earned: <strong>{lotusEarned.toLocaleString()}</strong>
      </p>
      <p style={{ margin: 0, color: "#f5f5f5" }}>
        Commission: <strong>{rank.commission}</strong>
      </p>
      {rank.next && (
        <p style={{ margin: 0, marginTop: 4, color: "#d7c9b3", fontSize: 13 }}>
          Next: <strong>{rank.next}</strong> at{" "}
          {rank.required.toLocaleString()} Lotus
        </p>
      )}
    </div>
  );
}
