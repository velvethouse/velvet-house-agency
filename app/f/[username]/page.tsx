// /app/f/[username]/page.tsx
"use client";

import { useState } from "react";
import FavoriteCreators from "./components/FavoriteCreators";

export default function FollowerProfile() {
  const [photos, setPhotos] = useState<File[]>([]);
  const lotusBalance = 12345;
  const vipStatus = "VIP Gold";

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const newPhotos = [...photos];
      newPhotos[index] = file;
      setPhotos(newPhotos);
    }
  };

  return (
    <main style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 10 }}>👤 Welcome, JohnDoe</h1>
      <p style={{ marginBottom: 4 }}>
        Status: <strong>{vipStatus}</strong>
      </p>
      <p style={{ marginBottom: 20 }}>
        Lotus Balance: <strong style={{ color: "#D4AF37" }}>{lotusBalance.toLocaleString()}</strong>
      </p>

      {/* 🖼️ Avatar */}
      <section style={{ marginBottom: 30 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Profile Photo</h2>
        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 0)} />
        {photos[0] && (
          <div style={{ marginTop: 10 }}>
            <img
              src={URL.createObjectURL(photos[0])}
              alt="avatar"
              style={{ width: 160, height: 160, borderRadius: "50%", objectFit: "cover", border: "2px solid #D4AF37" }}
            />
          </div>
        )}
      </section>

      {/* 📷 Galerie photos */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>Your Profile Photos</h2>
        <div className="media-grid">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="media-card">
              {photos[i + 1] ? (
                <img
                  src={URL.createObjectURL(photos[i + 1])}
                  alt={`photo-${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  <label htmlFor={`photo-upload-${i}`} style={{ cursor: "pointer", color: "#fff" }}>
                    + Add Photo
                  </label>
                  <input
                    id={`photo-upload-${i}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUpload(e, i + 1)}
                    style={{ display: "none" }}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🦋 Liste des streameuses suivies */}
      <FavoriteCreators />
    </main>
  );
}
