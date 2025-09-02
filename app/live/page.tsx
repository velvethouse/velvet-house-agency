export const metadata = { title: "Live | Velvet House Agency" };

type LiveCard = {
  title: string;
  time: string;
  slug: string;
  desc: string;
};

const lives: LiveCard[] = [
  { title: "Showcase — Alice", time: "Tonight 9:00 PM", slug: "alice", desc: "Live showcase + Q&A" },
  { title: "VIP Talk — Bella", time: "Tomorrow 8:30 PM", slug: "bella", desc: "Private VIP session" },
  { title: "Acoustic Set — Cora", time: "Saturday 7:00 PM", slug: "cora", desc: "Acoustic & chill" }
];

export default function LivePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: "system-ui, Segoe UI, sans-serif",
      }}
    >
      {/* Header local simple */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(8px)",
          background: "rgba(43,13,13,0.88)",
          borderBottom: "1px solid rgba(212,175,55,0.18)",
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <a href="/" style={{ color: "#D4AF37", fontWeight: 800 }}>Velvet House</a>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontWeight: 700 }}>
            <a href="/vip">VIP</a>
            <a href="/gifts">Gifts</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contact">Contact</a>
            <a href="/cgu">Terms</a>
          </div>
        </nav>
      </header>

      {/* Title */}
      <section style={{ maxWidth: 1100, margin: "24px auto 10px", padding: "0 16px" }}>
        <h1 style={{ margin: 0, color: "#D4AF37", fontSize: "clamp(26px, 6vw, 40px)", textAlign: "left" }}>
          Live
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Upcoming & current live sessions from our creators.
        </p>
      </section>

      {/* Grid of lives */}
      <section
        style={{
          maxWidth: 1100,
          margin: "16px auto 40px",
          padding: "0 16px",
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {lives.map((item) => (
          <a
            key={item.slug}
            href={`/u/${item.slug}`}
            style={{
              textDecoration: "none",
              borderRadius: 14,
              padding: 16,
              background:
                "linear-gradient(180deg, rgba(15,15,15,0.45), rgba(15,15,15,0.30))",
              border: "1px solid rgba(212,175,55,0.22)",
              boxShadow: "0 10px 26px rgba(0,0,0,0.30)",
              color: "#f5f5f5",
              display: "grid",
              gap: 8,
            }}
          >
            <div style={{ fontWeight: 800, color: "#D4AF37" }}>{item.title}</div>
            <div style={{ color: "#d7c9b3" }}>{item.time}</div>
            <div style={{ color: "#e9dfcf", opacity: 0.95 }}>{item.desc}</div>

            <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
              <span
                className="goldBtnOutline"
                style={{ flex: "1 1 120px", textAlign: "center" }}
              >
                View profile
              </span>
              <span
                className="goldBtn"
                style={{ flex: "1 1 120px", textAlign: "center" }}
              >
                Join live
              </span>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
