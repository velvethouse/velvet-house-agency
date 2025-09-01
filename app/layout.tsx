import type { Metadata } from "next";
// Garde cet import si tu ajoutes un globals.css plus tard (sinon aucun souci).
import "./globals.css";

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description: "Live • VIP • Gifts — Velvet House Agency",
  themeColor: "#2c0d0d",
  icons: {
    icon: "/icon.svg",       // favicon principal (app/icon.svg pris en charge automatiquement)
    apple: "/icon.svg",      // icône iOS
    shortcut: "/icon.svg"    // raccourci
  },
  openGraph: {
    title: "Velvet House Agency",
    description: "Live • VIP • Gifts — Velvet House Agency",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Thème global Bordeaux + Or */}
        <style>{`
          :root{
            --vh-bg1: #2c0d0d;   /* bordeaux très sombre */
            --vh-bg2: #5a1f1f;   /* rouge profond */
            --vh-text: #f6f2ea;  /* texte clair chaud */
            --vh-muted: #d7c9b3; /* texte secondaire */
            --vh-gold: #d4a437;  /* or principal */
            --vh-gold-dark: #b98d2f;
          }

          /* Reset typographique léger */
          *, *::before, *::after { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; }

          /* Titres en or partout (comme demandé) */
          h1, h2, h3, h4, h5, h6, strong { color: var(--vh-gold); }

          /* Liens par défaut (peu intrusifs) */
          a { color: var(--vh-text); text-decoration: none; }
          a:hover { color: var(--vh-gold); }

          /* Petites utilitaires réutilisables */
          .btn-gold {
            background: var(--vh-gold);
            color: var(--vh-bg1);
            border: 1px solid var(--vh-gold-dark);
            border-radius: 12px;
            padding: 12px 18px;
            font-weight: 600;
          }
          .btn-outline-gold {
            background: transparent;
            color: var(--vh-gold);
            border: 1px solid var(--vh-gold);
            border-radius: 12px;
            padding: 12px 18px;
            font-weight: 600;
          }
          .card {
            background: rgba(15,15,21,0.6);
            border: 1px solid #3a1515;
            border-radius: 14px;
          }
        `}</style>
      </head>
      <body
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, var(--vh-bg1) 0%, var(--vh-bg2) 100%)",
          color: "var(--vh-text)",
          fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {children}
      </body>
    </html>
  );
}
