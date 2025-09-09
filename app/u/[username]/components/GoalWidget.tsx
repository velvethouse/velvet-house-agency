// /app/u/[username]/components/GoalWidget.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Lottie from "react-lottie-player";
import celebration from "@/public/lottie/celebration.json"; // ⚠️ À placer dans /public/lottie/

type Mode = "daily" | "weekly";

type GoalState = {
  mode: Mode;
  target: number;
  progress: number;
  startDate: number; // timestamp de démarrage
};

const KEY = "vh_goal_state";

function load(): GoalState {
  if (typeof window === "undefined") return {
    mode: "daily", target: 5000, progress: 0, startDate: Date.now(),
  };
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as GoalState) : {
      mode: "daily", target: 5000, progress: 0, startDate: Date.now(),
    };
  } catch {
    return { mode: "daily", target: 5000, progress: 0, startDate: Date.now() };
  }
}

function save(s: GoalState) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {}
}

export default function GoalWidget() {
  const [state, setState] = useState<GoalState>(() => load());
  const [inputTarget, setInputTarget] = useState(state.target.toString());
  const [mode, setMode] = useState<Mode>(state.mode);
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => save(state), [state]);

  const now = Date.now();
  const elapsed = now - state.startDate;
  const dayInMs = 86400000;
  const weekInMs = 7 * dayInMs;

  const expired =
    (state.mode === "daily" && elapsed > 7 * dayInMs) ||
    (state.mode === "weekly" && elapsed > 4 * weekInMs);

  useEffect(() => {
    if (expired) {
      setState({ ...state, progress: 0, startDate: Date.now() });
    }
  }, [expired]);

  const ratio = useMemo(() => {
    if (state.target <= 0) return 0;
    return Math.min(1, state.progress / state.target);
  }, [state]);

  const completed = ratio >= 1;

  useEffect(() => {
    if (completed) {
      setShowAnim(true);
      setTimeout(() => setShowAnim(false), 4000);
    }
  }, [completed]);

  function applyTarget() {
    const n = Math.max(0, Math.floor(Number(inputTarget.replace(/\s/g, "")) || 0));
    setState({ ...state, target: n, startDate: Date.now(), progress: 0 });
  }

  function switchMode(m: Mode) {
    setMode(m);
    setState({ ...state, mode: m, startDate: Date.now(), progress: 0 });
  }

  function addProgress(amount: number) {
    setState((s) => ({ ...s, progress: Math.max(0, s.progress + amount) }));
  }

  function reset() {
    setState({ ...state, progress: 0, startDate: Date.now() });
  }

  const timeInfo = () => {
    if (mode === "daily") {
      const day = Math.floor(elapsed / dayInMs) + 1;
      return `Day ${day}/7`;
    }
    const week = Math.floor(elapsed / weekInMs) + 1;
    return `Week ${week}/4`;
  };

  return (
    <section style={{ marginTop: 20 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 10 }}>🎯 Objective</h2>

      <div className="card" style={{ padding: 14, display: "grid", gap: 12 }}>
        {/* Mode + cible */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <div className="btn-row-2" style={{ maxWidth: 260 }}>
            <button
              className={`btn3d ${mode === "daily" ? "btn3d--gold" : "btn3d--outline-gold"}`}
              onClick={() => switchMode("daily")}
            >
              Daily
            </button>
            <button
              className={`btn3d ${mode === "weekly" ? "btn3d--gold" : "btn3d--outline-gold"}`}
              onClick={() => switchMode("weekly")}
            >
              Weekly
            </button>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              className="input-velvet"
              style={{ width: 160 }}
              value={inputTarget}
              onChange={(e) => setInputTarget(e.target.value)}
              placeholder="Target (Lotus)"
              inputMode="numeric"
            />
            <button className="btn3d btn3d--velvet" onClick={applyTarget}>Set</button>
          </div>
        </div>

        {/* Affichage progression */}
        <div style={{ fontWeight: 800, color: "#D4AF37" }}>
          {state.progress.toLocaleString("en-US")} / {state.target.toLocaleString("en-US")} Lotus
          &nbsp; • &nbsp; {timeInfo()}
        </div>
        <div style={{ height: 10, borderRadius: 999, background: "rgba(255,255,255,.12)", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${ratio * 100}%`,
              background: "linear-gradient(90deg,#D4AF37,#f6dd9d)",
              transition: "width .3s ease",
            }}
          />
        </div>

        {/* 🎉 Bonus + animation */}
        {completed && (
          <div style={{
            padding: 10,
            borderRadius: 12,
            border: "1px dashed rgba(212,175,55,.55)",
            background: "rgba(212,175,55,.12)",
            color: "#e9dfcf",
            fontWeight: 700
          }}>
            🎉 Objective reached! <b>Velvet House</b> adds <b>+2% bonus</b> to your earnings.
          </div>
        )}

        {showAnim && (
          <Lottie
            loop={false}
            play
            animationData={celebration}
            style={{ width: 220, height: 220, margin: "0 auto" }}
          />
        )}

        {/* Démo boutons */}
        <div className="btn-row-3" style={{ maxWidth: 520 }}>
          <button className="btn3d btn3d--outline-gold" onClick={() => addProgress(10_000)}>+10k</button>
          <button className="btn3d btn3d--outline-gold" onClick={() => addProgress(50_000)}>+50k</button>
          <button className="btn3d btn3d--outline-gold" onClick={() => addProgress(100_000)}>+100k</button>
        </div>
        <button className="btn3d btn3d--velvet" onClick={reset}>Reset</button>

        <div style={{ fontSize: 12, color: "#d7c9b3" }}>
          (Demo only: in real version, progress = real Lotus earned.)
        </div>
      </div>
    </section>
  );
          }
