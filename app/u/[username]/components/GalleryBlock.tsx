'use client';

import { useState } from "react";

type Photo = {
  id: number;
  src: string;
  nsfw: boolean;
  likes: number;
  gift?: string;
};

type Props = {
  username: string;
  photos: Photo[];
  onLike?: (id: number) => void;
};

export default function GalleryBlock({ username, photos, onLike }: Props) {
  const [localLikes, setLocalLikes] = useState<Record<number, number>>({});

  const handleLike = (id: number) => {
    setLocalLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    onLike?.(id); // pour connecter plus tard au backend
  };

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>
        📷 {username}'s Gallery
      </h2>

      {photos.length === 0 ? (
        <p style={{ color: "#999", fontSize: 13 }}>No photos published yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12,
          }}
        >
          {photos.map((item) => (
            <div
              key={item.id}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <img
                src={item.src}
                alt={`photo-${item.id}`}
                style={{
                  width: "100%",
                  height: "auto",
                  filter: item.nsfw ? "blur(12px)" : "none",
                  objectFit: "cover",
                }}
              />

              {/* Watermark */}
              <div
                style={{
                  position: "absolute",
                  bottom: 4,
                  right: 6,
                  fontSize: 10,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                © Velvet House
              </div>

              {/* NSFW overlay */}
              {item.nsfw && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.3)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                >
                  Unlock with {item.gift || "🎁 a gift"}
                </div>
              )}

              {/* Like button */}
              <button
                onClick={() => handleLike(item.id)}
                style={{
                  position: "absolute",
                  top: 6,
                  right: 6,
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "2px 6px",
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                ❤️ {localLikes[item.id] ?? item.likes}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
