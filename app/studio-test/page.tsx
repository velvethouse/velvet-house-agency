"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function StudioTestPage() {
  const [visible, setVisible] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lottie/gold-burst.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
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
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        loop={false}
        play
        animationData={animationData}
        style={{ width: 320, height: 320 }}
      />
    </div>
  );
}
