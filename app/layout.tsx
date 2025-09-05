// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

type Announcement = {
  id: string;
  message: string;
  level?: "info" | "warn" | "vip";
  startAt: string;
  endAt: string;
};

/** Détermine un baseURL utilisable côté serveur (Vercel/local) */
function getBaseUrl() {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL!;
  return "http://localhost:3000";
}

/** Récupère les annonces actives (petit message discret) */
async function getAnnouncements(): Promise<Announcement[]> {
  const base = getBaseUrl();
  try {
    const res = await fetch(`${base}/api/announcements`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.items) ? data.items : [];
  } catch {
    return [];
  }
}

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description:
    "Velvet House — premium live platform with VIP, gifts, unlockable content and the GOD game. NSFW unlock via gifts only.",
  icons: { icon: "/icon.svg" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const announcements = await getAnnouncements();

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#f5f5f5",
    whiteSpace: "nowrap",
  };
  const soonStyle: React.CSSProperties = {
    fontSize: 11,
    color: "#d7c9b3",
    marginLeft: 4,
    opacity: 0.9,
  };

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
              flexWrap: "wrap",
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
              <a href="/live" style={linkStyle}>
                Live
              </a>
              <a href="/vip" style={linkStyle}>
                VIP
              </a>
              <a href="/gifts" style={linkStyle}>
                Gifts
              </a>
              <a href="/lotus" style={linkStyle}>
                Lotus
              </a>
              <a href="/dashboard" style={linkStyle}>
                Dashboard
              </a>
              <a href="/contact" style={linkStyle}>
                Contact
              </a>
              <a href="/cgu" style={linkStyle}>
                Terms
              </a>

              {/* Nouveaux accès */}
              <a href="/gaming" style={linkStyle}>
                Gaming <span style={soonStyle}>(soon)</span>
              </a>
              <a href="/casino" style={linkStyle}>
                Casino <span style={soonStyle}>(soon)</span>
              </a>
              <a href="/network" style={linkStyle}>
                Network <span style={soonStyle}>(soon)</span>
              </a>
            </div>
          </nav>

          {/* ====== PETIT STRIP D’ANNONCE DISCRET ====== */}
          {announcements.length > 0 && (
            <div style={{ background: "transparent", padding: "2px 8px" }}>
              {announcements.map((a) => (
                <div
                  key={a.id}
                  style={{
                    textAlign: "center",
                    color: "#D4AF37",
                    fontSize: 12,
                    lineHeight: 1.6,
                    opacity: 0.92,
                  }}
                >
                  {a.message}
                </div>
              ))}
            </div>
          )}
        </header>

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
              <a href="/legal" style={{ color: "#D4AF37", textDecoration: "none" }}>
                Legal
              </a>{" "}
              ·{" "}
              <a href="/cgu" style={{ color: "#D4AF37", textDecoration: "none" }}>
                Terms
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
