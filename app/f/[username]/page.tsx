// /app/f/[username]/page.tsx

"use client";

import { useState } from "react";
import FavoriteCreators from "./components/FavoriteCreators";

export default function FollowerProfile() {
  const [status, setStatus] = useState<"Standard" | "VIP" | "VIP Gold">("VIP");
  const [lotus, setLotus] = useState(12345);

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 20 }}>
        👤 Welcome, JohnDoe
      </h1>

      <p style={{ marginBottom: 10 }}>
        Status: <strong>{status}</strong>
      </p>

      {status === "VIP" && (
        <button
          style={{
            marginBottom: 20,
            padding: "8px 16px",
            background: "#e74c3c",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
          onClick={() => {
            alert("Your VIP subscription has been cancelled. It will remain active until the end of the billing cycle.");
          }}
        >
          ❌ Stop VIP
        </button>
      )}

      <p style={{ marginBottom: 20 }}>
        Lotus Balance: <span style={{ color: "#D4AF37", fontWeight: "bold" }}>{lotus.toLocaleString()}</span>
      </p>

      <section style={{ marginTop: 30 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Your Profile Photos</h2>
        <div className="media-grid">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="media-card">
              + Add Photo
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Favorite Streamers</h2>
        <FavoriteCreators />
      </section>
    </main>
  );
}
