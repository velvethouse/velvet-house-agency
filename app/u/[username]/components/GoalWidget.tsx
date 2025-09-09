"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

type Mode = "daily" | "weekly";

export default function GoalWidget() {
  const [mode, setMode] = useState<Mode>("weekly");
  const [target, setTarget] = useState(20000); // Exemple d'objectif
  const [progress, setProgress] = useState(18500); // À remplacer plus tard par lotusEarned réel
  const [animationData, setAnimationData] = useState<any>(null);
  const [showAnim, setShowAnim] = useState(false);

  const ratio = useMemo(() => {
    if (!target) return 0;
    return progress / target;
  }, [progress, target]);

  const completed = ratio >= 1;

  useEffect(() => {
    if (completed) {
      fetch("/lottie/celebration.json")
        .then((res) => res.json())
        .then((data) => {
          setAnimationData(data);
          setShowAnim(true);
          setTimeout(() => setShowAnim(false), 5000);
        });
    }
  }, [completed]);

  return (
    <section style={{ marginTop: 24 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 10 }}>🎯 Objective</h2>

      <div className="card" style={{ padding: 14, display: "grid", gap: 12 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            className={`btn3d ${mode === "daily" ? "btn3d--gold" : "btn3d--outline-gold"}`}
            onClick={() => setMode("daily")}
          >
            Daily
          </button>
          <button
            className={`btn3d ${mode === "weekly" ? "btn3d--gold" : "btn3d--outline-gold"}`}
            onClick={() => setMode("weekly")}
          >
            Weekly
          </button>
        </div>

        <div style={{ fontWeight: 700, color: "#FFD700" }}>
          {progress.toLocaleString()} / {target.toLocaleString()} Lotus
        </div>

        <div
          style={{
            height: 10,
            borderRadius: 999,
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(ratio * 100, 100)}%`,
              background: "linear-gradient(90deg, #D4AF37, #f1d97c)",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {completed && (
          <div
            style={{
              marginTop: 8,
              padding: 10,
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            🎉 Congratulations! Velvet House rewards you with +2% bonus Lotus.
          </div>
        )}

        {showAnim && animationData && (
          <Lottie
            play
            loop={false}
            animationData={animationData}
            style={{ width: 240, height: 240, margin: "0 auto" }}
          />
        )}
      </div>
    </section>
  );
}
