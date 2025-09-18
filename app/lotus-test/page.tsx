"use client";

import GiftPlayer from "../components/GiftPlayer";

export default function LotusTestPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GiftPlayer name="lotus1" size={250} />
    </main>
  );
}
