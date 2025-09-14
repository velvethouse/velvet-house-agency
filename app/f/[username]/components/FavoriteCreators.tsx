'use client';

type Creator = {
  id: string;
  name: string;
  avatar: string;
  isLive: boolean;
  rank: string;
};

type Props = {
  creators: Creator[];
};

export default function FavoriteCreators({ creators }: Props) {
  if (creators.length === 0) {
    return (
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>My Favorite Creators</h2>
        <p style={{ fontSize: 14, color: "#ccc" }}>
          You haven’t added any favorites yet.
        </p>
      </section>
    );
  }

  // Tri : créateurs en live en haut
  const sorted = [...creators].sort((a, b) => Number(b.isLive) - Number(a.isLive));

  return (
    <section style={{ marginTop: 40 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>My Favorite Creators</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {sorted.map((c) => (
          <div
            key={c.id}
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: 10,
              background: "rgba(0,0,0,0.3)",
              borderRadius: 12,
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={c.avatar}
                alt={c.name}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              {c.isLive && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#2ecc71",
                    border: "2px solid #2e0d0d",
                  }}
                />
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "#d7c9b3" }}>{c.rank}</div>
            </div>

            <a
              href={`/u/${c.id}`}
              className="btn3d btn3d--gold"
              style={{ fontSize: 13, padding: "6px 14px", minHeight: 0 }}
            >
              {c.isLive ? "Watch live" : "Open profile"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
