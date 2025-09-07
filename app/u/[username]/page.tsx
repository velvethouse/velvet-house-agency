// 📄 /app/u/[username]/page.tsx
"use client";

import { useEffect, useState } from "react";
import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";

export default function UserStudioPage() {
  const [lotusEarned, setLotusEarned] = useState(216000); // TODO: Replace with real fetch later
  const [isVip, setIsVip] = useState(false);              // TODO: Replace with real fetch later

  useEffect(() => {
    // Placeholder logic to simulate future dynamic values
    // setLotusEarned(...)
    // setIsVip(...)
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#D4AF37", marginBottom: 16 }}>🦋 Welcome to your Creator Studio</h1>

      <ButterflyRank lotusEarned={lotusEarned} />
      <StreamAccessNotice isVip={isVip} />

      {/* Future blocks: Schedule, Media Uploads, Earnings Summary, etc. */}
    </div>
  );
}
