// /app/u/[username]/components/GoalWidget.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Mode = "daily" | "weekly";

type GoalState = {
  mode: Mode;
  target: number;   // objectif Lotus (ex: 50_000)
  progress: number; // Lotus atteints
};

const KEY = "vh_goal_state";

function load(): GoalState {
  if (typeof window === "undefined") return { mode: "daily", target: 50000, progress: 0 };
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as GoalState) : { mode: "daily", target: 50000, progress: 0 };
  } catch {
    return { mode: "daily", target: 50000, progress: 0 };
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

  useEffect(() => save(state), [state]);

  const ratio = useMemo(() => {
    if (state.target <= 0) return 0;
    return Math.min(1, state.progress / state.target);
  }, [state]);

  const completed = ratio >= 1;

  function applyTarget() {
    const n = Math.max(0, Math.floor(Number(inputTarget.replace(/\s/g, "")) || 0));
    setState(s => ({ ...s, target: n }));
  }

  function switchMode(m: Mode) {
    setMode(m);
    setState(s => ({ ...s, mode: m }));
  }

  // DEMO : incrémenter le progrès (remplace plus tard par crédits réels)
  function addProgress(amount: number) {
    setState(s => ({ ...s, progress: Math.max(0, s.progress + amount) }));
  }

  function resetProgress() {
    setState(s => ({ ...s, progress: 0 }));
  }

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
              title="Daily"
            >
              Daily
            </button>
            <button
              className={`btn3d ${mode === "weekly" ? "btn3d--gold" : "btn3d--outline-gold"}`}
              onClick={() => switchMode("weekly")}
              title="Weekly"
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
            <button className="btn3d btn3d--velvet" onClick={applyTarget}>Set target</button>
          </div>
        </div>

        {/* Jauge */}
        <div style={{ fontWeight: 800, color: "#D4AF37" }}>
          {state.progress.toLocaleString("en-US")} / {state.target.toLocaleString("en-US")} Lotus
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

        {/* Message bonus */}
        {completed && (
          <div style={{
            padding: 10,
            borderRadius: 12,
            border: "1px dashed rgba(212,175,55,.55)",
            background: "rgba(212,175,55,.12)",
            color: "#e9dfcf",
            fontWeight: 700
          }}>
            🎉 Objective reached! <b>Velvet House</b> awards a <b>+2% bonus</b> on today’s earnings.
          </div>
        )}

        {/* Actions DEMO */}
        <div className="btn-row-3" style={{ maxWidth: 520 }}>
          <button className="btn3d btn3d--outline-gold" onClick={() => addProgress(10_000)}>+10k</button>
          <button className="btn3d btn3d--outline-gold" onClick={() => addProgress(50_000)}>+50k</button>
          <button className="btn3d btn3d--outline-gold" onClick={() => addProgress(100_000)}>+100k</button>
        </div>
        <div>
          <button className="btn3d btn3d--velvet" onClick={resetProgress}>Reset progress</button>
        </div>

        <div style={{ color: "#d7c9b3", fontSize: 12 }}>
          (Demo only: progress adds/subtracts locally. Replace with real credits earned.)
        </div>
      </div>
    </section>
  );
}
