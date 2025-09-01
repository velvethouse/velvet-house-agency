import type { Metadata } from "next";
// Si tu as un globals.css tu peux le laisser importé, sinon ignore.
import "./globals.css";

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description: "Live • VIP • Gifts — Velvet House Agency",
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
          }

          /* Titres en or partout (comme demandé) */
          h1, h2, h3, strong { color: var(--vh-gold); }

          /* Liens par défaut (tu peux surcharger inline si besoin) */
          a { color: var(--vh-text); }
          a:hover { color: var(--vh-gold); }

          /* Petites utilitaires si tu veux les réutiliser */
          .btn-gold {
            background: var(--vh-gold);
            color: var(--vh-bg1);
            border: 1px solid #b98d2f;
          }
          .link-gold { color: var(--vh-gold); text-decoration: none; }
        `}</style>
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "linear-gradient(135deg, var(--vh-bg1) 0%, var(--vh-bg2) 100%)",
          color: "var(--vh-text)",
          fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </body>
    </html>
  );
}
