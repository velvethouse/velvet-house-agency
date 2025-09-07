"use client";

import { useRouter } from "next/navigation";

export default function StreamerStudioIntro() {
  const router = useRouter();

  return (
    <main
      style={{
        padding: "40px 16px",
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "system-ui, sans-serif",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
        Welcome to Velvet House ✨
      </h1>

      <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
        This space is exclusively reserved for streamers and content creators.
        Before accessing your studio, please make sure you agree with the following rules:
      </p>

      <ul style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.6 }}>
        <li>No explicit nudity or illegal content</li>
        <li>Respect others and yourself</li>
        <li>Gifts are your only unlock trigger</li>
        <li>VIP and VIP Gold are managed by admins only</li>
        <li>You are free to create and earn at your rhythm</li>
      </ul>

      <p style={{ fontWeight: 600, marginBottom: 20 }}>
        Any violation may result in a ban or removal from the platform.
      </p>

      <button
        onClick={() => router.push("/dashboard")}
        style={{
          backgroundColor: "#D4AF37",
          color: "#000",
          padding: "12px 24px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        I understand and want to enter my studio
      </button>
    </main>
  );
}
