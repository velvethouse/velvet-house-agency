export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "40px 20px",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ marginBottom: 8, fontSize: "clamp(24px, 6vw, 36px)" }}>
          404 — Page not found
        </h1>
        <a href="/" style={{ color: "#D4AF37", textDecoration: "none", fontWeight: 700 }}>
          Back to home
        </a>
      </div>
    </main>
  );
}
