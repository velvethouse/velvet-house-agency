// components/ChatSettings.tsx
"use client";

import { useEffect, useState } from "react";

const KEY_INCOG = "vh_incognito"; // même clé que dans le profil

export default function ChatSettings({ isGold }: { isGold: boolean }) {
  const [incognito, setIncognito] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY_INCOG);
      setIncognito(saved === "1");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY_INCOG, incognito ? "1" : "0");
    } catch {}
  }, [incognito]);

  return (
    <div
      className="card"
      style={{
        padding: 12,
        borderRadius: 12,
        background: "linear-gradient(180deg, rgba(15,15,15,.25), rgba(15,15,15,.18))",
        border: "1px solid rgba(212,175,55,.22)",
      }}
    >
      <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 8 }}>Chat settings</div>

      {isGold ? (
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            checked={incognito}
            onChange={(e) => setIncognito(e.target.checked)}
            style={{ width: 18, height: 18, accentColor: "#D4AF37" }}
          />
          <span style={{ color: "#f5f5f5" }}>Incognito mode (show as “Gold Member”)</span>
        </label>
      ) : (
        <div style={{ fontSize: 13, color: "#d7c9b3" }}>
          Incognito mode is reserved for <b>VIP Gold</b>.
        </div>
      )}
    </div>
  );
}
