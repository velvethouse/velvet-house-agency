// app/agency/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Streamer = {
  id: number;
  name: string;
  rank: "🦋 Butterfly" | "💛 Golden Butterfly" | "🔥 Fire Butterfly";
  earned: number;
  paid: boolean;
};

const mockStreamers: Streamer[] = [
  { id: 1, name: "LunaFire", rank: "🔥 Fire Butterfly", earned: 48000, paid: true },
  { id: 2, name: "VelvyStar", rank: "💛 Golden Butterfly", earned: 22000, paid: false },
  { id: 3, name: "CherryLips", rank: "🦋 Butterfly", earned: 11000, paid: true },
];

const AGENCY_COMMISSION_RATES = {
  "🦋 Butterfly": 0.05,
  "💛 Golden Butterfly": 0.07,
  "🔥 Fire Butterfly": 0.1,
};

export default function AgencyDashboard() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("agency-auth") === "1") {
      setIsAuth(true);
    } else {
      router.push("/agency/login");
    }
  }, []);

  const eligibleStreamers = mockStreamers.filter((s) => s.paid);
  const totalCommission = eligibleStreamers.reduce((acc, s) => {
    const rate = AGENCY_COMMISSION_RATES[s.rank];
    return acc + s.earned * rate * 0.00465;
  }, 0);

  const canWithdraw = totalCommission >= 50;

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, color: "#D4AF37", marginBottom: 24 }}>
        🏢 Agency Dashboard
      </h1>

      <section
        style={{
          background: "#2e0d0d",
          padding: 20,
          borderRadius: 12,
          border: "1px solid rgba(212,175,55,0.25)",
          color: "#f5f5f5",
          marginBottom: 32,
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>👯 Streamers Overview</h2>
        <ul style={{ lineHeight: 1.8 }}>
          {mockStreamers.map((s) => (
            <li key={s.id}>
              {s.name} • {s.rank} • {s.earned.toLocaleString()} Lotus •{" "}
              {s.paid ? "✅ Paid" : "⏳ Awaiting payout"}
            </li>
          ))}
        </ul>
      </section>

      <section
        style={{
          background: "#111",
          padding: 20,
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#fff",
        }}
      >
        <p>
          💰 <strong>Total agency commission:</strong>{" "}
          <span style={{ color: "#9f6" }}>${totalCommission.toFixed(2)}</span>
        </p>
        <p>
          📤 <strong>Minimum to withdraw:</strong> $50
        </p>
        <button
          disabled={!canWithdraw}
          className="btn3d btn3d--gold"
          style={{
            marginTop: 12,
            opacity: canWithdraw ? 1 : 0.5,
            cursor: canWithdraw ? "pointer" : "not-allowed",
          }}
        >
          {canWithdraw ? "Request payout" : "Not enough to withdraw"}
        </button>
      </section>

      <section style={{ marginTop: 32 }}>
        <h3 style={{ color: "#FFD700", marginBottom: 10 }}>📜 Payout History</h3>
        <ul style={{ fontSize: 14, color: "#ccc" }}>
          <li>2025-08-28 • $81.40 • Paid via Wise</li>
          <li>2025-07-10 • $54.20 • Paid via USDT</li>
        </ul>
      </section>
    </main>
  );
}
