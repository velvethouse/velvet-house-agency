"use client";

import { useState } from "react";
import AgencyStreamerTable, { Streamer } from "./components/AgencyStreamerTable";

export default function AgencyDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" && localStorage.getItem("agency-auth") === "1"
  );

  const handleLogin = () => {
    const validUser = process.env.NEXT_PUBLIC_AGENCY_USERNAME;
    const validPass = process.env.NEXT_PUBLIC_AGENCY_PASSWORD;
    const inputUser = prompt("Enter agency username:");
    const inputPass = prompt("Enter agency password:");
    if (inputUser === validUser && inputPass === validPass) {
      localStorage.setItem("agency-auth", "1");
      setIsLoggedIn(true);
    } else {
      alert("❌ Invalid credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <main style={{ padding: 24, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: 26, color: "#FFD700", marginBottom: 16 }}>
          🏢 Agency Access
        </h1>
        <p style={{ marginBottom: 24, color: "#f5f5f5" }}>
          Enter your credentials to access your dashboard.
        </p>
        <button
          onClick={handleLogin}
          className="btn3d btn3d--gold"
          style={{ padding: "10px 24px" }}
        >
          Log in
        </button>
      </main>
    );
  }

  const streamers: Streamer[] = [
    {
      id: "alice01",
      name: "Alice",
      rank: "Butterfly",
      lotusEarned: 18400,
      agencyRate: 5,
      status: "paid",
    },
    {
      id: "bella02",
      name: "Bella",
      rank: "Golden",
      lotusEarned: 218000,
      agencyRate: 7,
      status: "pending",
    },
    {
      id: "clara03",
      name: "Clara",
      rank: "Fire",
      lotusEarned: 1324000,
      agencyRate: 10,
      status: "paid",
    },
  ];

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 28, color: "#D4AF37", marginBottom: 24 }}>
        🏢 Agency Dashboard
      </h1>

      <p style={{ marginBottom: 16, color: "#e0e0e0", fontSize: 15 }}>
        Your streamers' commissions are calculated automatically once their payouts are validated.
      </p>

      <AgencyStreamerTable streamers={streamers} />

      <section style={{ marginTop: 40 }}>
        <button
          className="btn3d btn3d--velvet"
          style={{ padding: "10px 20px", fontSize: 14 }}
        >
          🔁 Request Payout (manual validation after streamer payout)
        </button>
        <p style={{ fontSize: 12, color: "#ccc", marginTop: 8 }}>
          Note: You can only request your payout after the streamer’s payout is marked as “Paid”.
        </p>
      </section>
    </main>
  );
}
