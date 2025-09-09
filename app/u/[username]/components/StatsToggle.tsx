"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Lazy-load le graphique quand demandé
const StatsPerformance = dynamic(() => import("./StatsPerformance"), { ssr: false });

export default function StatsToggle() {
  const [visible, setVisible] = useState(false);

  return (
    <section style={{ marginTop: 32 }}>
      <button
        className="btn3d btn3d--outline-gold"
        style={{
          width: "100%",
          padding: "12px",
          fontSize: 16,
          borderRadius: 10,
        }}
        onClick={() => setVisible((v) => !v)}
      >
        {visible ? "🔽 Hide performance stats" : "📈 Show performance stats"}
      </button>

      {visible && (
        <div style={{ marginTop: 20 }}>
          <StatsPerformance />
        </div>
      )}
    </section>
  );
}
