"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function PrivateCelebrationOverlay({ completed }: { completed: boolean }) {
  const [visible, setVisible] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  // 🎯 Charge le fichier Lottie depuis le dossier public
  useEffect(() => {
    fetch("/lottie/gold-burst.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("goalCelebrationSeen");
    if (completed && !alreadySeen) {
      setVisible(true);
      localStorage.setItem("goalCelebrationSeen", "1");

      setTimeout(() => setVisible(false), 5000);
    }
  }, [completed]);

  if (!visible || !animationData) return null;

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
        animationData={animationData}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}
