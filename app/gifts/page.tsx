"use client";

import GiftPlayer from "../components/GiftPlayer";

export default function GiftsPage() {
  const gifts = ["lotus"]; // gift officiel à afficher

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#1a1a1a",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {gifts.map((name) => (
        <div key={name} style={{ margin: 20, textAlign: "center" }}>
          <GiftPlayer name={name} size={200} />
          <p style={{ color: "#fff", marginTop: 8 }}>{name}</p>
        </div>
      ))}
    </main>
  );
      }
