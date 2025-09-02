export const metadata = {
  title: "Velvet House Agency",
  description: "Premium live platform with VIP experiences and animated gifts",
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #3a0d0d 0%, #1a0000 100%)",
        color: "#f5f5f5",
        fontFamily: "system-ui, Segoe UI, sans-serif",
      }}
    >
      {/* HERO: background cover with your image */}
      <section
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "grid",
          placeItems: "center",
          padding: "20px",
          backgroundImage:
            "linear-gradient(to bottom, rgba(44,13,13,0.55), rgba(26,0,0,0.75)), url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content card */}
        <div
          style={{
            width: "min(92vw, 640px)",
            borderRadius: 16,
            padding: "18px 18px 22px",
            background:
              "linear-gradient(180deg, rgba(15,15,15,0.45), rgba(15,15,15,0.35))",
            border: "1px solid rgba(212,175,55,0.22)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            backdropFilter: "blur(2px)",
          }}
        >
          {/* Golden headline + short mystery tagline */}
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(26px, 7vw, 40px)",
              letterSpacing: "2px",
              color: "#D4AF37",
              textAlign: "left",
            }}
          >
            Velvet House — more than a platform
          </h1>

          <p
            style={{
              margin: "10px 0 16px",
              fontSize: "clamp(14px, 3.6vw, 18px)",
              lineHeight: 1.6,
              color: "#D4AF37", // golden text
              opacity: 0.95,
            }}
          >
            An exclusive universe where elegance meets mystery.  
            Every creator shines. Every viewer becomes privileged.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href="/signup"
              style={{
                background: "#D4AF37",
                color: "#2c0d0d",
                textDecoration: "none",
                fontWeight: 700,
                padding: "12px 18px",
                borderRadius: 12,
                border: "1px solid #b98d2f",
                flex: "1 1 180px",
                textAlign: "center",
              }}
            >
              Sign up
            </a>
            <a
              href="/login"
              style={{
                textDecoration: "none",
                fontWeight: 700,
                padding: "12px 18px",
                borderRadius: 12,
                border: "2px solid #D4AF37",
                color: "#D4AF37",
                flex: "1 1 180px",
                textAlign: "center",
              }}
            >
              Log in
            </a>
            <a
              href="#about"
              style={{
                textDecoration: "none",
                fontWeight: 700,
                padding: "12px 18px",
                borderRadius: 12,
                border: "1px solid rgba(212,175,55,0.6)",
                color: "#D4AF37",
                flex: "1 1 180px",
                textAlign: "center",
                opacity: 0.95,
              }}
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT section in EN */}
      <section
        id="about"
        style={{
          maxWidth: 1100,
          margin: "34px auto",
          padding: "0 16px",
          display: "grid",
          gap: 10,
        }}
      >
        <h2 style={{ margin: 0, color: "#D4AF37", fontSize: "clamp(22px,5vw,28px)" }}>
          About
        </h2>
        <p style={{ color: "#e9dfcf", lineHeight: 1.7 }}>
          Velvet House is a premium live platform with VIP access, animated gifts,
          and transparent monetization for creators and agencies.
        </p>
        <ul style={{ color: "#d7c9b3", margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Transparent commissions</li>
          <li>Automatic payouts</li>
          <li>Strict safety & moderation rules</li>
        </ul>
      </section>
    </main>
  );
}
