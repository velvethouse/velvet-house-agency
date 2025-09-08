// /app/page.tsx

export default function HomePage() {
  return (
    <main
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "30px 24px",
          borderRadius: "16px",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          color: "#f5f5f5",
        }}
      >
        <h1 style={{ color: "#FFD700", fontSize: "26px", marginBottom: "16px" }}>
          Velvet House
        </h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
          More than a platform: an exclusive universe where elegance meets mystery.<br />
          Every creator shines. Every viewer becomes privileged.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            style={{
              background: "#FFD700",
              color: "#2c0d0d",
              padding: "12px",
              borderRadius: "12px",
              fontWeight: "bold",
              border: "none",
              fontSize: "16px",
            }}
          >
            Sign up
          </button>
          <button
            style={{
              background: "transparent",
              color: "#FFD700",
              padding: "12px",
              borderRadius: "12px",
              border: "2px solid #FFD700",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </main>
  );
}
