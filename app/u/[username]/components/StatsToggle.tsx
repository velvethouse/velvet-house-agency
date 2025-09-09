"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Lazy-load le graphique uniquement au clic
const StatsPerformance = dynamic(() => import("./StatsPerformance"), { ssr: false });

export default function StatsToggle() {
  const [visible, setVisible] = useState(false);

  return (
    <section style={{ marginTop: 32 }}>
      <button
        onClick={() => setVisible(!visible)}
        className="btn3d btn3d--velvet"
      >
        {visible ? "Hide performance graph" : "Show performance graph"}
      </button>

      {visible && <StatsPerformance />}
    </section>
  );
}
