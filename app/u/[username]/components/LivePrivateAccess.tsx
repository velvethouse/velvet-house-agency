"use client";

import { useState } from "react";

export default function LivePrivateAccess() {
  const [enabled, setEnabled] = useState(false);

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 10 }}>
        🔐 Private Live Access
      </h2>

      <div
        className="card"
        style={{
          padding: 16,
          border: "1px solid rgba(212,175,55,0.3)",
          background: "rgba(0,0,0,0.2)",
          borderRadius: 12,
        }}
      >
        <p style={{ color: "#e9dfcf", marginBottom: 12 }}>
          Enable a <strong>private live</strong> session with up to{" "}
          <strong>20 exclusive viewers</strong>. Only viewers who receive your
          invitation (via QR or link) can join.
        </p>

        <button
          className={`btn3d ${enabled ? "btn3d--velvet" : "btn3d--gold"}`}
          onClick={() => setEnabled(!enabled)}
        >
          {enabled ? "✅ Private Live Enabled" : "Activate Private Live"}
        </button>

        {enabled && (
          <div
            style={{
              marginTop: 16,
              padding: 12,
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              color: "#aaa",
              fontSize: 14,
            }}
          >
            Share this link with up to 20 viewers:
            <br />
            <code style={{ wordBreak: "break-all", color: "#fff" }}>
              https://velvethouseagency.com/u/yourname/live?private=1
            </code>
          </div>
        )}
      </div>
    </section>
  );
}
