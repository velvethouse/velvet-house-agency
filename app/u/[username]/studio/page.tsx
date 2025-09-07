"use client";

import { useEffect, useState } from "react";

export default function StudioPage() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("studio_rules_accepted");
    if (hasAccepted === "true") {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("studio_rules_accepted", "true");
    setAccepted(true);
  };

  if (!accepted) {
    return (
      <div style={{ maxWidth: 600, margin: "32px auto", padding: 16 }}>
        <h1 style={{ fontSize: 20, marginBottom: 12 }}>
          Welcome to your Studio
        </h1>
        <p style={{ marginBottom: 8 }}>
          This space is reserved for streamers and content creators. Before accessing your studio, please agree with the following rules:
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          <li>No explicit nudity or illegal content</li>
          <li>Respect others and yourself</li>
          <li>Gifts are your only unlock trigger</li>
          <li>VIP and VIP Gold are managed by admins only</li>
          <li>You are free to create and earn at your rhythm</li>
        </ul>
        <p style={{ fontWeight: 600, marginBottom: 16, color: "#f5c542" }}>
          Any violation may result in a ban or removal from the platform.
        </p>
        <button
          onClick={handleAccept}
          style={{
            background: "#D4AF37",
            border: "none",
            padding: "12px 24px",
            fontWeight: 700,
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          I understand and want to enter my studio
        </button>
      </div>
    );
  }

  // 🎯 Contenu visible après acceptation
  return (
    <div style={{ maxWidth: 800, margin: "32px auto", padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
        🎥 Your Studio Dashboard
      </h1>
      <p style={{ fontSize: 16, marginBottom: 24 }}>
        Welcome back! You can manage your schedule, go live, and track your earnings here.
      </p>

      <div style={{ background: "#3c1a1a", padding: 24, borderRadius: 12 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 12 }}>📅 Schedule your live sessions</li>
          <li style={{ marginBottom: 12 }}>🎁 View your received gifts</li>
          <li style={{ marginBottom: 12 }}>💰 Track your Lotus balance</li>
          <li style={{ marginBottom: 12 }}>🔐 Apply for VIP or Gold status</li>
        </ul>
      </div>
    </div>
  );
}
