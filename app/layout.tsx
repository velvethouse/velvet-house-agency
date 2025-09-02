import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","700"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500"] });

export const metadata: Metadata = {
  title: "Velvet House Agency",
  description: "Premium live platform with VIP experiences and animated gifts",
  themeColor: "#200808",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Velvet House Agency",
    description: "Premium live platform with VIP experiences and animated gifts",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root{
            --vh-bg1:#200808;   /* bordeaux très sombre (plus foncé) */
            --vh-bg2:#3a0d0d;   /* bordeaux profond */
            --vh-gold:#D4AF37;  /* or luxe */
            --vh-gold-dark:#B8860B;
            --vh-text:#f6f2ea;
            --vh-muted:#d7c9b3;
          }
          *,*::before,*::after{box-sizing:border-box}
          html,body{margin:0;padding:0}
          a{text-decoration:none;color:var(--vh-text)}
          a:hover{color:var(--vh-gold)}
          .gold{color:var(--vh-gold)}
          .goldBtn{
            background:var(--vh-gold); color:#2c0d0d; border:1px solid var(--vh-gold-dark);
            padding:12px 18px; border-radius:12px; font-weight:700;
          }
          .goldBtnOutline{
            background:transparent; color:var(--vh-gold); border:2px solid var(--vh-gold);
            padding:12px 18px; border-radius:12px; font-weight:700;
          }
        `}</style>
      </head>
      <body
        className={`${cormorant.className}`}
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, var(--vh-bg1) 0%, var(--vh-bg2) 100%)",
          color: "var(--vh-text)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </body>
    </html>
  );
}
