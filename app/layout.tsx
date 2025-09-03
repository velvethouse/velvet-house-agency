import type { Metadata } from "next";
import "./globals.css"; // ✅ charge toutes les classes (.btn3d, .actions-3col, etc.)

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description: "Premium live platform with VIP experiences and animated gifts",
  themeColor: "#2e0d0d",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
          color: "#f5f5f5",
          fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </body>
    </html>
  );
}
