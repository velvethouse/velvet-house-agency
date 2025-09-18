// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function HomePage() {
  const [lotus, setLotus] = useState<any>(null);

  useEffect(() => {
    fetch("/gifts/lotus.json")
      .then((res) => res.json())
      .then((data) => setLotus(data))
      .catch((err) =>
        console.error("❌ Erreur lors du chargement de lotus.json :", err)
      );
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2e0d0d",
        backgroundImage: "url('/hero.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px 16px 80px",
      }}
    >
      {/* ✅ Test Lotus */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <div style={{ width: 200, height: 200 }}>
          {lotus ? (
            <Lottie
              loop
              play
              animationData={lotus}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <div style={{ color: "#fff" }}>⏳ Loading Lotus...</div>
          )}
        </div>
      </div>

      {/* Bloc texte + inscription */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          borderRadius: 20,
          padding: "30px 20px",
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
          color: "#fff",
          margin: "120px auto 0",
        }}
      >
        <h1 style={{ fontSize: "28px", color: "#FFD700", marginBottom: "20px" }}>
          Velvet House
        </h1>
        <p style={{ marginBottom: "24px", lineHeight: 1.5 }}>
          More than a platform: an exclusive universe where elegance meets
          mystery.
          <br />
          Every creator shines. Every viewer becomes privileged.
        </p>

        <div style={{ display: "grid", gap: "12px" }}>
          <a
            href="/signup"
            style={{
              background: "#FFD700",
              color: "#2c0d0d",
              fontWeight: 700,
              padding: "12px 20px",
              borderRadius: 14,
              textDecoration: "none",
            }}
          >
            Sign up
          </a>
          <a
            href="/login"
            style={{
              background: "transparent",
              border: "2px solid #FFD700",
              color: "#FFD700",
              fontWeight: 700,
              padding: "12px 20px",
              borderRadius: 14,
              textDecoration: "none",
            }}
          >
            Log in
          </a>
        </div>
      </div>

      {/* Réseaux sociaux en bas */}
      <footer
        style={{
          marginTop: 40,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
          paddingTop: 32,
        }}
      >
        {[
          { name: "TikTok", url: "#", icon: "/icons/tiktok.png" },
          { name: "Instagram", url: "#", icon: "/icons/instagram.png" },
          { name: "Facebook", url: "#", icon: "/icons/facebook.png" },
          { name: "X", url: "#", icon: "/icons/x.png" },
          { name: "LinkedIn", url: "#", icon: "/icons/linkedin.png" },
          { name: "Reddit", url: "#", icon: "/icons/reddit.png" },
          { name: "Snapchat", url: "#", icon: "/icons/snapchat.png" },
          { name: "Twitch", url: "#", icon: "/icons/twitch.png" },
          { name: "Pinterest", url: "#", icon: "/icons/pinterest.png" },
        ].map((network) => (
          <a
            key={network.name}
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            <img
              src={network.icon}
              alt={network.name}
              width={28}
              height={28}
              style={{ filter: "brightness(1.2)" }}
            />
          </a>
        ))}
      </footer>
    </main>
  );
                     }
