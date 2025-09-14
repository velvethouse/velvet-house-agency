"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AgencyLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("agency-auth") === "1") {
      router.push("/agency");
    }
  }, []);

  const handleLogin = () => {
    const validUser = process.env.NEXT_PUBLIC_AGENCY_USERNAME;
    const validPass = process.env.NEXT_PUBLIC_AGENCY_PASSWORD;

    if (username === validUser && password === validPass) {
      localStorage.setItem("agency-auth", "1");
      router.push("/agency");
    } else {
      setError("❌ Invalid credentials");
    }
  };

  return (
    <main style={{ padding: 24, maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ color: "#FFD700", marginBottom: 24 }}>🏢 Agency Login</h1>

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

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: 6,
  border: "1px solid #ccc",
};
