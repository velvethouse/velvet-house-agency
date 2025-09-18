"use client";

import GiftPlayer from "../components/GiftPlayer";

export default function GiftsPreviewPage() {
  const gifts = ["lotus1", "lotus2", "lotus3"]; // noms des futurs fichiers .webm

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2e0d0d",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {gifts.map((name) => (
        <div key={name} style={{ margin: 20, textAlign: "center" }}>
          <GiftPlayer src={`/gifts/${name}.webm`} size={200} />
          <p style={{ color: "#fff", marginTop: 8 }}>{name}</p>
        </div>
      ))}
    </main>
  );
            }
