"use client";

import { useState } from "react";

const mockGallery = [
  { id: 1, src: "/mock/photo1.jpg", nsfw: false, gift: null },
  { id: 2, src: "/mock/photo2.jpg", nsfw: true, gift: "🎁 Rose" },
  { id: 3, src: "/mock/photo3.jpg", nsfw: true, gift: "🎁 Champagne" },
  { id: 4, src: "/mock/photo4.jpg", nsfw: false, gift: null },
];

export default function StudioGallery() {
  const [photos, setPhotos] = useState(mockGallery);

  const toggleNSFW = (id: number) => {
    setPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, nsfw: !photo.nsfw } : photo
      )
    );
  };

  const assignGift = (id: number, gift: string) => {
    setPhotos((prev) =>
      prev.map((photo) => (photo.id === id ? { ...photo, gift } : photo))
    );
  };

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>🖼️ Your Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 12,
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              position: "relative",
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={photo.src}
              alt={`photo-${photo.id}`}
              style={{
                width: "100%",
                height: "auto",
                filter: photo.nsfw ? "blur(8px)" : "none",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 6,
                left: 6,
                fontSize: 10,
                color: "#ccc",
              }}
            >
              {photo.nsfw ? "🔞 NSFW" : "✅ Public"} {photo.gift && `• ${photo.gift}`}
            </div>
            <div style={{ display: "flex", gap: 6, padding: 6 }}>
              <button
                onClick={() => toggleNSFW(photo.id)}
                className="btn3d btn3d--outline-gold"
              >
                {photo.nsfw ? "Unblur" : "Blur"}
              </button>
              <button
                onClick={() => assignGift(photo.id, "🎁 Rose")}
                className="btn3d btn3d--outline-gold"
              >
                Add Gift
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
