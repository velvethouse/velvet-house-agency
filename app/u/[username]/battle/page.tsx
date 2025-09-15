"use client";

import { useState, useEffect } from "react";

export default function BattlePage() {
  const [muted, setMuted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [showResult, setShowResult] = useState(false);

  const handleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResult(true);
    }
  }, [timeLeft]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <main style={{ padding: 20, maxWidth: 960, margin: "0 auto", color: "#f5f5f5" }}>
      <h1 style={{ fontSize: 26, color: "#FFD700", marginBottom: 24 }}>🔥 Battle in Progress</h1>

      {/* Timer */}
      <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
        ⏱️ Time left: {formatTime(timeLeft)}
      </div>

      {/* Mute button */}
      <button
        onClick={handleMute}
        className="btn3d btn3d--outline-gold"
        style={{ marginBottom: 20 }}
      >
        {muted ? "🔇 Unmute Opponent" : "🔊 Mute Opponent"}
      </button>

      {/* Streams side by side */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 300, background: "#000", borderRadius: 12 }}>
          <video src="https://example.com/stream1.m3u8" controls autoPlay muted style={{ width: "100%", borderRadius: 12 }} />
          <p style={{ padding: 8, textAlign: "center" }}>🦋 Streameuse 1</p>
        </div>
        <div style={{ flex: 1, minWidth: 300, background: "#000", borderRadius: 12 }}>
          <video src="https://example.com/stream2.m3u8" controls autoPlay muted={muted} style={{ width: "100%", borderRadius: 12 }} />
          <p style={{ padding: 8, textAlign: "center" }}>🦋 Streameuse 2</p>
        </div>
      </div>

      {/* Gifts + Chat */}
      <div style={{ marginTop: 32 }}>
        <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>🎁 Support Your Favorite</h2>
        <p>Send gifts to help your favorite win. All gifts count towards the battle total!</p>
        <div style={{ marginTop: 16, padding: 16, border: "1px solid #FFD700", borderRadius: 10 }}>
          🔥 Chat is open for viewers. Cheer and gift freely!
        </div>
      </div>

      {/* Result */}
      {showResult && (
        <div
          style={{
            marginTop: 40,
            padding: 20,
            background: "#222",
            border: "1px solid #444",
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 22, color: "#FFD700" }}>🏆 Battle Over</h2>
          <p style={{ fontSize: 18, marginTop: 8 }}>
            Winner: <b>Streameuse 1</b> (based on gifts received)
          </p>
          <p style={{ fontSize: 14, color: "#aaa", marginTop: 4 }}>
            +2% bonus Lotus for the winner!
          </p>
        </div>
      )}
    </main>
  );
            }
