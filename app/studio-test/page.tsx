"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function StudioTestPage() {
  const [visible, setVisible] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lottie/gold-burst.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Erreur chargement animation", err));
  }, []);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("goalCelebrationTest");
    if (!alreadySeen) {
      setVisible(true);
      localStorage.setItem("goalCelebrationTest", "1");
      setTimeout(() => setVisible(false), 5000);
    }
  }, []);

  if (!visible || !animationData) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.8)",
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
