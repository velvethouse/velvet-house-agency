"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

function GiftPlayer({ name }: { name: string }) {
  const [anim, setAnim] = useState<any>(null);

  useEffect(() => {
    fetch(`/gifts/${name}.json`)
      .then((res) => res.json())
      .then((data) => setAnim(data))
      .catch((err) =>
        console.error(`❌ Erreur chargement ${name}.json :`, err)
      );
  }, [name]);

  if (!anim) return <div style={{ color: "#fff" }}>⏳ {name}...</div>;

  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      <div style={{ width: 150, height: 150, margin: "0 auto" }}>
        <Lottie loop play animationData={anim} style={{ width: "100%", height: "100%" }} />
      </div>
      <p style={{ color: "#fff", marginTop: 8 }}>{name}</p>
    </div>
  );
}

export default function GiftsPreviewPage() {
  const gifts = ["lotus", "rose", "crown"];

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
      {gifts.map((g) => (
        <GiftPlayer key={g} name={g} />
      ))}
    </main>
  );
    }
