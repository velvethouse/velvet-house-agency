'use client';

type Photo = {
  id: string | number;
  src: string;
  nsfw: boolean;
  gift?: string | null;
};

type Props = {
  photos: Photo[];
  onToggleNSFW: (id: string | number) => void;
  onAssignGift: (id: string | number, gift: string) => void;
};

export default function StudioGallery({ photos, onToggleNSFW, onAssignGift }: Props) {
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
        {photos.length === 0 ? (
          <p style={{ fontSize: 14, color: "#aaa" }}>
            No photos uploaded yet. Add media to make your profile shine ✨
          </p>
        ) : (
          photos.map((photo) => (
            <div
              key={photo.id}
              style={{
                position: "relative",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#000",
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
                {photo.nsfw ? "🔞 NSFW" : "✅ Public"}
                {photo.gift && ` • ${photo.gift}`}
              </div>
              <div style={{ display: "flex", gap: 6, padding: 6 }}>
                <button
                  onClick={() => onToggleNSFW(photo.id)}
                  className="btn3d btn3d--outline-gold"
                >
                  {photo.nsfw ? "Unblur" : "Blur"}
                </button>
                <button
                  onClick={() => onAssignGift(photo.id, "🎁 Rose")}
                  className="btn3d btn3d--outline-gold"
                >
                  Add Gift
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
