"use client";

import React from "react";

export default function EventNotice() {
  const message =
    "🌟 Special Event: Tonight at 9 PM, I’ll be live with a surprise show. Only for my favorite followers 💋";

  return (
    <div
      style={{
        background: "#2c0d0d",
        border: "1px solid #d4af37",
        borderRadius: 12,
        padding: "16px 20px",
        marginTop: 20,
        color: "#f8d7a0",
        fontSize: "15px",
        lineHeight: 1.6,
      }}
    >
      <strong>🎉 Streameuse Event:</strong>
      <p style={{ marginTop: 6 }}>{message}</p>
    </div>
  );
}
