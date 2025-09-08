// /app/page.tsx

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          padding: "30px 24px",
          borderRadius: "20px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#FFD700", marginBottom: 16 }}>Velvet House</h1>
        <p style={{ color: "#f5f5f5", fontSize: "16px", marginBottom: 20 }}>
          More than a platform: an exclusive universe where elegance meets mystery.
          <br />
          Every creator shines. Every viewer becomes privileged.
        </p>

        <div style={{ display: "grid", gap: 12 }}>
          <button
            style={{
              background: "#FFD700",
              color: "#2c0d0d",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Sign up
          </button>

          <button
            style={{
              background: "transparent",
              color: "#FFD700",
              border: "2px solid #FFD700",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </main>
  );
}
