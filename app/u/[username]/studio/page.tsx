// app/u/[username]/studio/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StudioPage() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleAgree = () => {
    setAgreed(true);
    // ✅ Redirection vers tableau de bord pro après validation
    router.push("/dashboard");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        padding: "32px 16px",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 42px)", color: "#D4AF37", marginBottom: 24 }}>
          Welcome to Velvet House ✨
        </h1>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: 12,
            padding: 24,
            lineHeight: 1.7,
            fontSize: 16,
          }}
        >
          <p>
            As a Velvet House Creator, you're entering a professional and premium platform. All members here expect
            quality, elegance, and respect.
          </p>
          <p>
            Your personal studio is your command center: manage your lives, chat, unlockable content, VIP features,
            and access gift animations.
          </p>
          <p>
            <b>Key rules:</b> no nudity outside gift unlocks, no hate speech, no violence, and always maintain
            self-respect and professionalism.
          </p>
          <p>
            Before continuing, you must confirm that you've read and understood the platform’s principles.
          </p>
        </div>

        <button
          onClick={handleAgree}
          disabled={agreed}
          className="btn3d btn3d--velvet"
          style={{
            marginTop: 28,
            padding: "14px 28px",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            opacity: agreed ? 0.5 : 1,
          }}
        >
          I understand and want to enter my studio
        </button>
      </div>
    </main>
  );
}
