import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description:
    "Velvet House — premium live platform with VIP, gifts, unlockable content and the GOD game. NSFW unlock via gifts only.",
  icons: { icon: "/icons/lotus.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFD700" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/lotus.png" />
        <link rel="apple-touch-icon" href="/icons/lotus.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <title>Velvet House</title>
      </head>

      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
          color: "#f5f5f5",
          fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
        }}
      >
        {/* ✅ Header + nav */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
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
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                color: "#D4AF37",
                fontWeight: 900,
                textDecoration: "none",
                letterSpacing: ".3px",
              }}
            >
              Velvet House
            </a>

            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
                fontWeight: 700,
              }}
            >
              <a href="/live" style={linkStyle}>Live</a>
              <a href="/vip" style={linkStyle}>VIP</a>
              <a href="/gifts" style={linkStyle}>Gifts</a>
              <a href="/lotus" style={linkStyle}>Lotus</a>
              <a href="/contact" style={linkStyle}>Contact</a>
              <a href="/terms" style={linkStyle}>Terms</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* ✅ Footer */}
        <footer
          style={{
            maxWidth: 1100,
            margin: "24px auto 32px",
            padding: "0 16px",
            color: "#d7c9b3",
            fontSize: 12,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              borderTop: "1px solid rgba(212,175,55,0.18)",
              paddingTop: 12,
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span>© {new Date().getFullYear()} Velvet House Agency</span>
            <span>
              <a
                href="/terms"
                style={{ color: "#D4AF37", textDecoration: "none" }}
              >
                Terms
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#f5f5f5",
  whiteSpace: "nowrap",
};
