"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function PrivateCelebrationOverlay({ completed }: { completed: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("goalCelebrationSeen");
    if (completed && !alreadySeen) {
      setVisible(true);
      localStorage.setItem("goalCelebrationSeen", "1");

      // Disparaît après 5 secondes
      setTimeout(() => setVisible(false), 5000);
    }
  }, [completed]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => setVisible(false)}
    >
      <Lottie
        loop={false}
        play
        src="/lottie/gold-burst.json" // ✅ Chargé depuis le dossier public
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}
