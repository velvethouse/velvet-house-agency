// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "../components/AnnouncementBar"; // components/ à la racine (chemin relatif depuis app/)

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description:
    "Velvet House — premium live platform with VIP, gifts, unlockable content and the GOD game. NSFW unlock via gifts only.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
          color: "#f5f5f5",
          fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
        }}
      >
        {/* ====== Global sticky header ====== */}
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
            }}
          >
            {/* Logo / Home */}
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

            {/* Liens principaux */}
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
                fontWeight: 700,
              }}
            >
              <a href="/live" style={{ textDecoration: "none", color: "#f5f5f5" }}>Live</a>
              <a href="/vip" style={{ textDecoration: "none", color: "#f5f5f5" }}>VIP</a>
              <a href="/gifts" style={{ textDecoration: "none", color: "#f5f5f5" }}>Gifts</a>
              <a href="/lotus" style={{ textDecoration: "none", color: "#f5f5f5" }}>Lotus</a>
              <a href="/dashboard" style={{ textDecoration: "none", color: "#f5f5f5" }}>Dashboard</a>
              <a href="/contact" style={{ textDecoration: "none", color: "#f5f5f5" }}>Contact</a>
              <a href="/cgu" style={{ textDecoration: "none", color: "#f5f5f5" }}>Terms</a>
            </div>
          </nav>
        </header>

        {/* ====== Announcements / GOD banner (persistant) ====== */}
        <AnnouncementBar />

        {/* ====== Page content ====== */}
        <main>{children}</main>

        {/* ====== Global footer ====== */}
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
              <a href="/legal" style={{ color: "#D4AF37", textDecoration: "none" }}>Legal</a>
              {" · "}
              <a href="/cgu" style={{ color: "#D4AF37", textDecoration: "none" }}>Terms</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
