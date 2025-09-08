// /app/f/[username]/page.tsx

"use client";

import { useState } from "react";

export default function FollowerProfilePage() {
  // Simulated follower data (to be replaced with real data via props or API)
  const isVip = true; // true = VIP, false = standard
  const isGold = true; // true = VIP Gold
  const lotusBalance = 12345;
  const followerName = "JohnDoe";

  const [photos, setPhotos] = useState<(string | null)[]>([null, null, null, null, null]);

  function handlePhotoUpload(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotos(prev => {
      const updated = [...prev];
      updated[index] = url;
      return updated;
    });
  }

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 20 }}>
        👤 Welcome, <span style={{ color: "#D4AF37" }}>{followerName}</span>
      </h1>

      <section style={{ marginBottom: 30 }}>
        <p style={{ color: "#e9dfcf", fontSize: 16 }}>
          Status: <strong>{isGold ? "VIP Gold" : isVip ? "VIP" : "Standard"}</strong>
        </p>
        <p style={{ color: "#e9dfcf", fontSize: 16 }}>
          Lotus Balance: <strong style={{ color: "#D4AF37" }}>{lotusBalance.toLocaleString()}</strong>
        </p>

        {!isVip && (
          <a href="/vip" className="btn3d btn3d--gold" style={{ marginTop: 10, display: "inline-block" }}>
            Upgrade to VIP
          </a>
        )}
        {isVip && !isGold && (
          <a href="/vip" className="btn3d btn3d--velvet" style={{ marginTop: 10, display: "inline-block" }}>
            Upgrade to VIP Gold
          </a>
        )}
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Your Profile Photos</h2>
        <div className="media-grid">
          {photos.map((url, i) => (
            <div key={i} className="media-card">
              {url ? (
                <img src={url} alt={`photo-${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <label style={{ cursor: "pointer", display: "block", height: "100%" }}>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={e => handlePhotoUpload(i, e)}
                  />
                  <div style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#d7c9b3",
                    fontSize: 14,
                  }}>
                    + Add Photo
                  </div>
                </label>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
