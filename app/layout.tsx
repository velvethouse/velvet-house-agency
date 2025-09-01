import type { Metadata } from "next";
import "./globals.css"; // si on ajoute un fichier CSS global plus tard

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description: "Live • VIP • Gifts — Velvet House Agency"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0b0b0f 0%, #1a1a22 100%)",
          color: "#f5f5f7",
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
