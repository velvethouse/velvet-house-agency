import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description: "Live • VIP • Gifts — Velvet House Agency",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          backgroundColor: "#0b0b0f",
          color: "#f5f5f7",
          fontFamily: "system-ui, Segoe UI, Roboto, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
