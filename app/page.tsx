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
        justifyContent: "flex-end",
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
    </main>
  );
}
