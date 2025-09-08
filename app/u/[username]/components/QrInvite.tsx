// /app/u/[username]/components/QrInvite.tsx
"use client";

import { useMemo, useState } from "react";

type Target =
  | "profile"    // /u/[username]
  | "live"       // /u/[username]/live
  | "chat"       // /u/[username]/chat
  | "vip";       // /vip?ref=[username]

export default function QrInvite({
  username = "demo",
  baseUrl = typeof window !== "undefined" ? window.location.origin : "https://velvethouseagency.com",
}: {
  username?: string;
  baseUrl?: string;
}) {
  const [target, setTarget] = useState<Target>("profile");
  const [size, setSize] = useState<number>(220);

  const inviteUrl = useMemo(() => {
    switch (target) {
      case "live":
        return `${baseUrl}/u/${username}/live`;
      case "chat":
        return `${baseUrl}/u/${username}/chat`;
      case "vip":
        return `${baseUrl}/vip?ref=${encodeURIComponent(username)}`;
      case "profile":
      default:
        return `${baseUrl}/u/${username}`;
    }
  }, [baseUrl, username, target]);

  // API QR simple sans dépendance : qrserver.com
  const qrSrc = useMemo(() => {
    const enc = encodeURIComponent(inviteUrl);
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${enc}&margin=1`;
  }, [inviteUrl, size]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      alert("Link copied to clipboard ✅");
    } catch {
      alert("Copy failed. Please copy manually.");
    }
  }

  async function downloadQR() {
    try {
      const res = await fetch(qrSrc);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `velvet_${username}_${target}_qr.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      alert("Download failed. Try again.");
    }
  }

  return (
    <section style={{ marginTop: 24 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 10 }}>📲 Invite QR</h2>

      <div className="card" style={{ padding: 14, display: "grid", gap: 12 }}>
        {/* Choix du lien */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <select
            className="select-velvet"
            value={target}
            onChange={(e) => setTarget(e.target.value as Target)}
            title="Target link"
            style={{ maxWidth: 220 }}
          >
            <option value="profile">Profile (/u/{username})</option>
            <option value="live">Live (/u/{username}/live)</option>
            <option value="chat">Chat (/u/{username}/chat)</option>
            <option value="vip">VIP Invite (/vip?ref={username})</option>
          </select>

          <select
            className="select-velvet"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value, 10))}
            title="QR size"
            style={{ maxWidth: 160 }}
          >
            {[180, 220, 260, 320].map((s) => (
              <option key={s} value={s}>{s}px</option>
            ))}
          </select>
        </div>

        {/* Aperçu QR */}
        <div style={{ display: "grid", placeItems: "center", padding: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrSrc}
            alt="Invite QR"
            width={size}
            height={size}
            style={{ borderRadius: 12, background: "#fff" }}
          />
        </div>

        {/* Lien + actions */}
        <div
          className="card"
          style={{
            padding: 10,
            display: "grid",
            gap: 8,
            background: "rgba(0,0,0,.25)",
            border: "1px solid rgba(212,175,55,.25)",
          }}
        >
          <div style={{ fontSize: 13, color: "#d7c9b3", wordBreak: "break-all" }}>{inviteUrl}</div>
          <div className="btn-row-2">
            <button className="btn3d btn3d--gold" onClick={copyLink}>Copy link</button>
            <button className="btn3d btn3d--velvet" onClick={downloadQR}>Download QR</button>
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#d7c9b3" }}>
          Tip: share this QR on socials or print it. Scanning opens the selected page directly.
        </div>
      </div>
    </section>
  );
}
