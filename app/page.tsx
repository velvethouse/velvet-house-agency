'use client'

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/hero.png')",
        backgroundSize: "contain",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          borderRadius: 20,
          padding: "30px 20px",
          maxWidth: 480,
          width: "100%",
          textAlign: "center",
          color: "#fff",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "clamp(24px, 6vw, 36px)", color: "#FFD700", marginBottom: "20px" }}>
          Velvet House
        </h1>
        <p style={{ marginBottom: "24px", lineHeight: 1.5, fontSize: "clamp(14px, 4vw, 18px)" }}>
          More than a platform: an exclusive universe where elegance meets mystery.
          <br />
          Every creator shines. Every viewer becomes privileged.
        </p>

        <div style={{ display: "grid", gap: "12px" }}>
          <a
            href="/signup"
            style={{
              background: "#FFD700",
              color: "#2c0d0d",
              fontWeight: 700,
              padding: "12px 20px",
              borderRadius: 14,
              textDecoration: "none",
            }}
          >
            Sign up
          </a>
          <a
            href="/login"
            style={{
              background: "transparent",
              border: "2px solid #FFD700",
              color: "#FFD700",
              fontWeight: 700,
              padding: "12px 20px",
              borderRadius: 14,
              textDecoration: "none",
            }}
          >
            Log in
          </a>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          {[
            { name: "TikTok", icon: "tiktok", link: "#" },
            { name: "Instagram", icon: "instagram", link: "#" },
            { name: "Facebook", icon: "facebook", link: "#" },
            { name: "X", icon: "twitter-x", link: "#" },
            { name: "LinkedIn", icon: "linkedin", link: "#" },
            { name: "Reddit", icon: "reddit", link: "#" },
            { name: "Snapchat", icon: "snapchat", link: "#" },
            { name: "Twitch", icon: "twitch", link: "#" },
            { name: "Pinterest", icon: "pinterest", link: "#" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              <img
                src={`/icons/${item.icon}.svg`}
                alt={item.name}
                style={{ width: 28, height: 28, opacity: 0.85 }}
              />
            </a>
          ))}
        </div>

        <p style={{ fontSize: 12, color: "#aaa", marginTop: 20 }}>
          © 2025 Velvet House Agency
        </p>
      </div>
    </main>
  )
}
