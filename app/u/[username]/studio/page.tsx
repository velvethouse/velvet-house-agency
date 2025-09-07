// app/u/[username]/page.tsx
import { notFound } from "next/navigation";

export default async function PublicProfile({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;

  // Simulated data (to replace later with real fetch from DB)
  const profile = {
    username,
    displayName: "QueenLuna",
    avatarUrl: "/avatar-default.jpg", // fallback avatar
    bio: "Welcome to my universe ✨ Let's vibe, chat and enjoy the moment together.",
    level: "🔥 Fire Butterfly", // or 💛 Golden / 🦋 Butterfly / 🐛 Cristalline
    lotusEarned: 1260000,
    isLive: true,
  };

  if (!profile) return notFound();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      <section
        style={{
          maxWidth: 1100,
          margin: "32px auto",
          padding: "0 16px",
          display: "grid",
          gap: 24,
        }}
      >
        {/* AVATAR + INFO */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            textAlign: "center",
          }}
        >
          <img
            src={profile.avatarUrl}
            alt={profile.username}
            style={{
              width: 128,
              height: 128,
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #D4AF37",
            }}
          />
          <h1 style={{ margin: 0, fontSize: "clamp(24px,6vw,36px)" }}>
            {profile.displayName}
          </h1>
          <div style={{ fontSize: 14, color: "#d7c9b3" }}>
            {profile.level} • {profile.lotusEarned.toLocaleString()} Lotus earned
          </div>
          <p
            style={{
              fontSize: 15,
              color: "#e9dfcf",
              maxWidth: 600,
              marginTop: 8,
              lineHeight: 1.7,
            }}
          >
            {profile.bio}
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 12,
          }}
        >
          <a href={`/u/${username}/chat`} className="btn3d btn3d--gold">
            💬 Chat with me
          </a>
          {profile.isLive && (
            <a href={`/u/${username}/live`} className="btn3d btn3d--velvet">
              🔴 Watch Live
            </a>
          )}
          <a href={`/u/${username}/studio`} className="btn3d btn3d--dark">
            🎁 Send Gift
          </a>
        </div>

        {/* (Optionnel) Planning ou Media ici plus tard */}
      </section>
    </main>
  );
}
