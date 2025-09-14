'use client'

import Image from 'next/image'

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(22px, 6vw, 36px)",
            color: "#FFD700",
            marginBottom: "20px",
          }}
        >
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
      <footer
        style={{
          marginTop: 40,
          padding: "20px 0 10px",
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {[
          "tiktok",
          "instagram",
          "facebook",
          "twitter",
          "snapchat",
          "reddit",
          "linkedin",
          "pinterest",
          "twitch",
          "youtube",
        ].map((name) => (
          <a
            key={name}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title={name}
          >
            <Image
              src={`/social/${name}.svg`}
              alt={name}
              width={24}
              height={24}
              style={{ filter: "invert(1)" }}
            />
          </a>
        ))}
      </footer>
    </main>
  )
}
