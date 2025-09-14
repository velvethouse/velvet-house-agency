// app/agency/page.tsx
"use client";

import { useState } from "react";
import AgencyStreamerTable from "./components/AgencyStreamerTable";

type Streamer = {
  id: string;
  name: string;
  rank: "Butterfly" | "Golden" | "Fire";
  lotusEarned: number;
  agencyRate: number;
  status: "pending" | "paid";
};

export default function AgencyDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" && localStorage.getItem("agency-auth") === "1"
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const validUser = process.env.NEXT_PUBLIC_AGENCY_USERNAME;
    const validPass = process.env.NEXT_PUBLIC_AGENCY_PASSWORD;

    if (username === validUser && password === validPass) {
      localStorage.setItem("agency-auth", "1");
      setIsLoggedIn(true);
    } else {
      setError("❌ Invalid credentials");
    }
  };

  const streamers: Streamer[] = [
    {
      id: "alice",
      name: "Alice",
      rank: "Butterfly",
      lotusEarned: 24000,
      agencyRate: 5,
      status: "pending",
    },
    {
      id: "bella",
      name: "Bella",
      rank: "Golden",
      lotusEarned: 88000,
      agencyRate: 7,
      status: "paid",
    },
    {
      id: "clara",
      name: "Clara",
      rank: "Fire",
      lotusEarned: 360000,
      agencyRate: 10,
      status: "paid",
    },
  ];

  if (!isLoggedIn) {
    return (
      <main style={{ padding: 24, maxWidth: 420, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ color: "#FFD700", marginBottom: 24 }}>🏛️ Agency Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button
          onClick={handleLogin}
          style={{
            marginTop: 16,
            padding: "10px 20px",
            background: "#D4AF37",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Log In
        </button>
        {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, color: "#D4AF37", marginBottom: 24 }}>
        🏛️ Agency Dashboard
      </h1>
      <p style={{ color: "#f5f5f5", marginBottom: 20 }}>
        Here is your list of streamers. You can track commissions and payouts.
      </p>

      <AgencyStreamerTable streamers={streamers} />

      <section style={{ marginTop: 40 }}>
        <button
          onClick={() => {
            localStorage.removeItem("agency-auth");
            setIsLoggedIn(false);
          }}
          style={{
            background: "transparent",
            border: "1px solid #FFD700",
            color: "#FFD700",
            padding: "8px 14px",
            borderRadius: 8,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Log out
        </button>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: 6,
  border: "1px solid #ccc",
};
