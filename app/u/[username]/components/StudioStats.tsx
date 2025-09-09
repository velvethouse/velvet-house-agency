"use client";

type Rank =
  | "Cristalline"
  | "Butterfly"
  | "Golden Butterfly"
  | "Fire Butterfly";

interface Props {
  lotusEarned: number;
}

export default function StudioStats({ lotusEarned }: Props) {
  const rankData = getRank(lotusEarned);

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>📊 Your Stats</h2>

      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: 16,
          borderRadius: 12,
          display: "grid",
          gap: 12,
        }}
      >
        <p>
          💎 Total Lotus earned:{" "}
          <strong style={{ color: "#FFD700" }}>
            {lotusEarned.toLocaleString()} Lotus
          </strong>
        </p>
        <p>
          🦋 Current Rank:{" "}
          <strong style={{ color: "#f1d97c" }}>{rankData.emoji} {rankData.name}</strong>
        </p>
        <p>
          💰 Commission:{" "}
          <strong style={{ color: "#90ee90" }}>{rankData.commission}</strong>
        </p>
      </div>
    </section>
  );
}

function getRank(lotus: number): {
  name: Rank;
  emoji: string;
  commission: string;
} {
  if (lotus >= 1_000_000) {
    return { name: "Fire Butterfly", emoji: "🔥🦋", commission: "65%" };
  }
  if (lotus >= 200_000) {
    return { name: "Golden Butterfly", emoji: "💛🦋", commission: "63%" };
  }
  if (lotus >= 10_000) {
    return { name: "Butterfly", emoji: "🦋", commission: "61%" };
  }
  return { name: "Cristalline", emoji: "🐛", commission: "60%" };
}
