"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import lotus from "@/../public/gifts/lotus.json";

export default function GiftPreview() {
  const [anim, setAnim] = useState<any>(lotus);

  useEffect(() => {
    setAnim(lotus);
  }, []);

  return (
    <div style={{ width: 200, height: 200 }}>
      <Lottie
        loop
        play
        animationData={anim}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
